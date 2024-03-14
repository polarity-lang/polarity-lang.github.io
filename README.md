# Public Website for polarity-lang.github.io
[![Publish Website to gh-pages](https://github.com/polarity-lang/polarity-lang.github.io/actions/workflows/publish.yml/badge.svg)](https://github.com/polarity-lang/polarity-lang.github.io/actions/workflows/publish.yml)

### Cloning the site

We use a git submodule for the theme, so you have to clone this repository recursively:

```console
git clone --recurse-submodules git@github.com:polarity-lang/polarity-lang.github.io.git
```

If you have already cloned the repository without the `--recurse-submodules` flag, then you can use the following two commands to initialize the submodule:

```console
git submodule init
git submodule update
```

### Building the site

The website is built using the [zola](https://www.getzola.org/) static site generator.

In order to preview the site run:

```console
> zola serve
Building site...
Checking all internal links with anchors.
Successfully checked 0 internal link(s) with anchors.
-> Creating 0 pages (0 orphan) and 0 sections
Done in 146ms.

Listening for changes in /home/../polarity-lang.github.io/{config.toml,content,sass,static,templates}
Press Ctrl+C to stop

Web server is available at http://127.0.0.1:1111
```

In order to build the site run:

```console
> zola build
Building site...
Checking all internal links with anchors.
Successfully checked 0 internal link(s) with anchors.
-> Creating 0 pages (0 orphan) and 0 sections
Done in 9ms.
```

### Theme

We are using the [juice](https://github.com/huhu/juice) theme.
