+++
title = "Install"
description = "Installation"
weight = 3
+++

# Installing Polarity

We currently do not provide prebuilt binaries, so you have to build the polarity executable from the sources yourself.

## Requirements

The latest version of the source code is available on [github.com/polarity-lang/polarity-lang](https://github.com/polarity-lang/polarity-lang).
You have to clone that repository into an empty directory, for example with the following invocation:

```console
> git clone git@github.com:polarity-lang/polarity-lang.git
```

Polarity is implemented in [Rust](https://www.rust-lang.org), so you also need to install a Rust toolchain on your system.
The recommended way to install Rust is to use the [rustup](https://rustup.rs) toolchain manager and to follow the instructions on their website.

## Building from Source

In order to build the binary you can use the provided `Makefile`:

```console
> make install
```

By default, this should install the executable `pol` in the directory `~/.cargo/bin/`.
Make sure that this directory is in your `PATH`.
You can check whether the installation was successful by trying to use the help option of the command line interface:

```console
> pol --help
Usage: pol [OPTIONS] <COMMAND>

Commands:
  run     Run a source code file
  fmt     Format a code file
  texify  Render a code file as a latex document
  xfunc   De-/Refunctionalize a type in a code file
  lsp     Start an LSP server
  lift    Lift local (co)matches of a type to the top-level
  help    Print this message or the help of the given subcommand(s)

Options:
      --trace  Enable internal debug output
  -h, --help   Print help
```

The `pol` binary is also used to provide editor support using the [language server protocol (LSP)](https://microsoft.github.io/language-server-protocol/), so make sure that the installation was successful before proceeding with the installation of the editor plugin.

# Editor Support

## Visual Studio Code
We offer a plugin for Visual Studio Code which provides rich editor services via the language server protocol (LSP).
The plugin is available on the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=polarity-lang.polarity) and can be found by searching for `polarity` in the extensions browser of Visual Studio Code.

The plugin can also be built from source using the instructions in the GitHub repository [github.com/polarity-lang/polarity-lang-vscode](https://github.com/polarity-lang/polarity-lang-vscode).
