import http from 'http';
import { should as _should } from 'chai'

let should = _should();

import '../src/index.js';

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get('http://127.0.0.1:3000', res => {
      res.statusCode.should.equal(200);
      done();
    });
  });
});

