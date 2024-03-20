+++
title = "FAQ"
description = "Frequently Asked Questions"
weight = 5
+++

# What is the core idea?

The core idea of polarity is that a modern functional language should have equal support for data and codata types.
We want to show that this is a practical idea by developing a language which does not have any types which are hard-wired into the compiler.
In particular, the types of functions and dependent functions are defined by the user as custom codata types.

# Is it production ready?

No. Polarity is part of a research project which studies the feasability of programming with dependent data and codata types.
As a normal part of a research project we will frequently make breaking changes in order to explore new ideas.

# Is polarity a proof assistant?

No, the language cannot be used as a proof assistant since it is not consistent.
Polarity is Turing-complete, which means that you can write non-terminating programs and that every type is inhabitated by some term.
Instead, polarity is a dependently-typed programming language similar to a project like dependent Haskell.

# What does the logo depict?

The logo is inspired by an [arctic hare](https://en.wikipedia.org/wiki/Arctic_hare) which has a white winter coat and a dark summer coat. The fur pattern resembles the yin and yang symbol, playing on the duality between data and codata.
The logo was designed by Hendrik Süberkrüb.
