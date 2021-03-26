### Fork of the [hughsk/rm-modules](https://github.com/hughsk/rm-modules) package with some fixes. [![Latest Published Version](https://img.shields.io/npm/v/@ns0m/rm-modules)](https://www.npmjs.com/package/@ns0m/rm-modules)
```
npm install -g @ns0m/rm-modules
```

---

# rm-modules
![](http://img.shields.io/badge/stability-experimental-orange.svg?style=flat)
![](http://img.shields.io/npm/v/rm-modules.svg?style=flat)
![](http://img.shields.io/npm/dm/rm-modules.svg?style=flat)
![](http://img.shields.io/npm/l/rm-modules.svg?style=flat)

Recursively remove *all* `node_modules` directories within the chosen root
directory.

Useful for cleaning a project which has more than one `node_modules` tree.

## CLI Usage

[![NPM](https://nodei.co/npm/rm-modules.png)](https://nodei.co/npm/rm-modules/)

``` bash
npm install -g rm-modules
rm-modules
```

## Module Usage

### `rm(root, done(err))`

Recursively removes every `node_modules` directory within the `root` directory,
calling `done(err)` when complete.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/rm-modules/blob/master/LICENSE.md) for details.
