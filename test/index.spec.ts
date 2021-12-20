import assert from 'assert';
// import supertest, { Response } from 'supertest';

describe('TEST', () => {
  before(done => {
    // ...
    done();
  });

  after(done => {
    // ...
    done();
  });

  beforeEach((done) => {
    // ...
    done();
  });

  afterEach((done) => {
    // ...
    done();
  });

  describe('SMOKE test #1', () => {
    it('should return something', (done) => {
      const actual = {a: 1};
      const expected = {a: 1};
      assert.deepStrictEqual(actual, expected);
      done();
    });
  });
});
