+++
title = "Language Reference"
description = "Language Reference"
weight = 2
+++

# Data Types

The simplest form of data types do not have parameters or indices. In that case, the constructors of the data type can be given as a comma-separated list. As with all syntactic constructs, we always allow trailing commas.

```
data Bool { True, False, }
```

In the more general case we have to specify the precise type that a constructor constructs. Therefore, the above data type declaration can be written more explicitly as:

```
data Bool { True: Bool, False: Bool }
```

A simple example of a parameterized type is the type of singly-linked lists of some type a. In that case, we have to specify both the parameters of the type constructor List, and the instantiations of the term constructors Nil and Cons. For the parameter of the type constructor List we make use of the impredicative type universe, which is written Type.

```
data List(a: Type) {
  Nil(a: Type): List(a),
  Cons(a: Type, x: a, xs: List(a)): List(a)
}
```

A proper dependent type is the type of length-indexed lists: the vector type. The VNil and VCons constructors of vectors create vectors with different indices.

```
data Nat { Z, S(n: Nat) }
data Vec(a: Type, n: Nat) {
  VNil(a: Type): Vec(a, Z),
  VCons(a: Type, n: Nat, x: a, xs: Vec(a, n)): Vec(a, S(n))
}
```
Finally, we can define the Martin-Löf equality type as follows:

```
data Eq (a: Type, x y: a) {
    Refl(a: Type, x: a) : Eq(a, x, x)
}
```

# Codata Types

Codata types are specified by a list of methods or destructors. A very simple example is the type of pairs of a boolean and a natural number:

```
data Bool { True, False }
data Nat { Z, S(n: Nat)}
codata Pair {
  proj1: Bool,
  proj2: Nat
}
```

This type supports two observations; the first observations proj1 yields a boolean value when invoked on a Pair, and the observation proj2 yields a natural number.

A common codata type that is typically built into many programming languages is the function type. In our language, it is not built-in, but we can define it as follows:

```
codata Fun(a b: Type) {
    Fun(a, b).ap(a: Type, b: Type, x: a) : b
}
```

Codata types can also model infinite types. The type of infinite streams is a classical example and written like this:

```
codata Stream(a: Type) {
  Stream(a).head(a: Type) : a,
  Stream(a).tail(a: Type) : Stream(a),
}
```

Sometimes we also need to reference the object on which a method is invoked in its return type. This is especially the case when we want an observation to yield a proof that the object satisfies some property. Here is a simple example which shows how this can be expressed:
```
codata Bool {
  Bool.neg : Bool,
  (x: Bool).neg_inverse : Eq(Bool, x, x.neg.neg),
}
```

# Definitions

Definitions create a consumer (method) for a data type. These consumers receive an implicit input on which they pattern match. As a simple example, we can define Boolean negation as follows:

```
def Bool.neg: Bool {
    True => False,
    False => True,
}
```

Definitions can be recursive. For instance, we can define addition on natural numbers as follows:

```
def Nat.add(y: Nat) : Nat {
    Z => y,
    S(x) => S(x.add(y)),
}
```

Definitions can also deal with parametrized types. For instance, we can define a map method for the data type List as follows:

```
def List(a).map(a b: Type, f: Fun(a, b)): List(b) {
    Nil(a) => Nil(b),
    Cons(a, x, xs) => Cons(b, f.ap(a, b, x), xs.map(a, b, f)),
}
```

Finally, to illustrate dependently typed definitions, let us give the classic example of defining append on length-indexed lists:

```
def Vec(a, n).append(a: Type, n m: Nat, ys: Vec(a, m)) : Vec(a, n.add(m)) {
    VNil(a) => ys,
    VCons(a, n', x, xs) => VCons(a, n'.add(m), x, xs.append(a, n', m, ys))
}
```

Last, but certainly not least, the return type of a definition may not only depend on its parameters but also on its (implicit) input. To do so, we can make the input explicit by assigning it a name. For instance, we can prove that Boolean negation is its own inverse as follows:

```
def (x: Bool).neg_inverse: Eq(Bool, x, x.not.not) {
    True => Refl(Bool, True),
    False => Refl(Bool, False)
}
```

# Codefinitions

Codefinitions create producers (or objects) for codata types. They need to define the behavior of the object when each of its destructors is invoked. Analogously to pattern matching, where we pattern match on the constructors of a data type, we copattern match on the destructors of a codata type. For example, we can create a pair with the Pair codata type defined above as follows:

```
codef MyPair: Pair {
    proj1 => True,
    proj2 => 42,
}
```

We can retrieve the values in the pair by invoking one of the destructors. For instance, MyPair.proj2 will yield the result of 42.

Codefinitions can also be used to construct infinite objects. For instance, we can generate an infinite stream that counts upwards as follows:

```
codef CountUp(n: Nat): Stream(Nat) {
    head(_) => n,
    tail(_) => CountUp(S(n)),
}
```

Finally, codefinitions can also return proofs that they fulfill certain properties:

```
codef True: Bool {
    not => False,
    neg_inverse => Refl(Bool, True),
}
```

```
codef False: Bool {
    not => True,
    neg_inverse => Refl(Bool, False),
}
```

# Comments

Line comments are written using two dashes: `-- This is a comment`. Certain items of the program can also be annotated with a documentation comment. Here is an example using doc-comments:

```
-- | The type of booleans
data Bool {
  -- | The boolean truth value
  True,
  -- | The boolean false value
  False,
}
```

These documentation comments are preserved during defunctionalization and refunctionalization.

# Typed Holes

An incomplete program can be written using typed holes. Typed holes are written using either ?; they have type ? which unifies with any other type. For example, an incomplete implementation of boolean negation can be written as follows:

```
def Bool.neg : Bool {
  True => ?,
  False => ?,
}
```

# The Main Expression

After all other data types, codata types, definitions and codefinitions an additional expression can be written. This is called the "main" expression of the program.

```
data Bool { True, False }
def Bool.neg {
  True => False,
  False => True,
}
True.neg
```
