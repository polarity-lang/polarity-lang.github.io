+++
title = "Install"
description = "Installation"
weight = 2
+++

# Installing Polarity

We currently do not provide prebuilt binaries, so you have to build the polarity executable from the sources yourself.

## Requirements

The latest version of the source code is available on [github.com/polarity-lang/polarity](https://github.com/polarity-lang/polarity).
You have to clone that repository into an empty directory, for example with the following invocation:

```console
> git clone git@github.com:polarity-lang/polarity.git
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

## VSCodium

Users of [VSCodium](https://vscodium.com/) or other editors compatible with `.vsix` plugins can install the extension from the [open-vsx](https://open-vsx.org/extension/polarity-lang/polarity) marketplace instead.

## Building from source

The plugin can also be built from source using the instructions on [github.com/polarity-lang/vscode](https://github.com/polarity-lang/vscode).

# Shell Completions

In order to get working shell completions for the `pol` binary you need to generate a completion script for your shell and place it in the correct directory.
This directory depends your operating system, distribution and shell.
Completions scripts can be generated with the `pol generate-completion` subcommand which supports bash, elvish, fish, power-shell and the zsh shell.

If you are using the bash shell on Ubuntu, for example, you can install a completion script using the following steps:

```
> pol generate-completion bash pol
> sudo mv pol /usr/share/bash-completion/completions/pol
```

Please consult the documentation of your operating system or distribution to find out where you have to place the completion scripts on your computer.