import { should as _should } from 'chai'

let should = _should();

import Base from '../../src/models/base.js';

describe('Base model test', () => {
  it('should return Hello world with timestamp', done => {
    let base = new Base();
    base.sayHi().should.equal(`Hello World! ${base.initAt}`)
    done();
  });
});

