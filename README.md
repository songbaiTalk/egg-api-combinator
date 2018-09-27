# egg-api-combinator

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-api-combinator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-api-combinator
[travis-image]: https://img.shields.io/travis/eggjs/egg-api-combinator.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-api-combinator
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-api-combinator.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-api-combinator?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-api-combinator.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-api-combinator
[snyk-image]: https://snyk.io/test/npm/egg-api-combinator/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-api-combinator
[download-image]: https://img.shields.io/npm/dm/egg-api-combinator.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-api-combinator

<!--
Description here.
-->

## Install

```bash
$ npm i egg-api-combinator --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.apiCombinator = {
  enable: true,
  package: 'egg-api-combinator',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.apiCombinator = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
