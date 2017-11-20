# taskr-precache [![][travis-badge]][travis-link]
> _[Precache](https://github.com/GoogleChrome/sw-precache)_ plugin for _[Taskr](https://github.com/lukeed/taskr)_.

> Generate a service worker to cache resources and make them available offline.

## Install

````bash
npm install --save-dev taskr-precache
````
or with yarn

````bash
yarn add taskr-precache --dev
````

## API

### .precache(options)

A full list of `sw-precache` options can be [found here](https://github.com/GoogleChrome/sw-precache#options-parameter).

## Usage

Cache assets within the `dist` directory. This will create a `dist/sw` directory that contains two dependencies for the `dist/service-worker.js`.

```js
exports.cache = function * (task) {
  yield task.source('dist/**/*.{js,html,css,png,jpg,gif}')
    .precache({
      cacheId: 'my-project-name'
    })
    .target('dist')
}
```

## License

MIT © [Marcus Asplund](https://pap.as)

[releases]:     https://github.com/marcusasplund/taskr-precache/releases
[npm-pkg-link]: https://www.npmjs.org/package/taskr-precache
[npm-ver-link]: https://img.shields.io/npm/v/taskr-precache.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/taskr-precache.svg?style=flat-square
[travis-link]:  https://travis-ci.org/marcusasplund/taskr-precache
[travis-badge]: http://img.shields.io/travis/marcusasplund/taskr-precache.svg?style=flat-square
