/* eslint-disable no-unused-expressions */
'use strict';
const server = require('../server/server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

server.listen(4444);

describe('loopback Workshop', function() {
  this.timeout(5000);
  beforeEach((done) => {
    done();
  });

  afterEach((done) => {
    done();
  });

  it('responds to /', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(err).not.exist;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('responds to /api/players', (done) => {
    chai.request(server)
      .get('/api/players')
      .end((err, res) => {
        expect(err).not.exist;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('responds to /api/teams', (done) => {
    chai.request(server)
      .get('/api/teams')
      .end((err, res) => {
        expect(err).not.exist;
        expect(res).to.have.status(200);
        done();
      });
  });
});