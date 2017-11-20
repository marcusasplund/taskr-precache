<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

# taskr-precache

> Precache plugin for _[Fly](https://github.com/flyjs/fly)_.

[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]

## Install

```sh
npm install --save-dev taskr-precache
```

## Usage


```js
exports.default = function * (fly) {
  yield fly.source('src/*.js').precache().target('dist')
}
```

## API

### .precache(input, options)

> Check out the [documentation](PLUGIN_DOCUMENTATION) to see the available options.

#### input

Type: `string`<br>
Default: 'foobar'

This is a description.

#### options.foo

Type: `boolean`<br>
Default: `false`

This is a description.


## License

MIT © [Marcus Asplund](https://pap.as)

[releases]:     https://github.com/marcusasplund/taskr-precache/releases
[npm-pkg-link]: https://www.npmjs.org/package/taskr-precache
[npm-ver-link]: https://img.shields.io/npm/v/taskr-precache.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/taskr-precache.svg?style=flat-square
[travis-link]:  https://travis-ci.org/marcusasplund/taskr-precache
[travis-badge]: http://img.shields.io/travis/marcusasplund/taskr-precache.svg?style=flat-square
