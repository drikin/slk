# slk

_Slack wrapper for use as desktop app._

![Screenshot](https://farm8.staticflickr.com/7503/15619846607_048d6e98ac_z_d.jpg)

Uses [node-webkit] to provide a single-purpose window
onto Slack's web version.

Will not work with node-webkit < 0.10.

[node-webkit]: https://github.com/rogerwang/node-webkit

## running…

### …from source:

```bash
$ $package_manager install node-webkit
$ git clone git://github.com/drikin/slk.git
$ cd slk
$ nw .
```

### …from package:

- Install [node-webkit].
- Download latest [release].
- Run it.

### …on archlinux:

[AUR package](https://aur.archlinux.org/packages/slk)

```bash
$ yaourt -S slk
$ slk
```

A `.desktop` file (for graphical menus) is also provided.

## legal

Slack, Slack logo are trademarks
of, and copyrighted to, Slack, Inc.

All other files are released in the Public Domain as per
my [policy](https://passcod.name/PUBLIC.txt).
