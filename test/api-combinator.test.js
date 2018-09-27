'use strict';

const mock = require('egg-mock');

describe('test/api-combinator.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/api-combinator-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, apiCombinator')
      .expect(200);
  });
});
