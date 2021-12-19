var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../app");

var expect = chai.expect;

chai.use(chaiHttp);

it("Routes", (done) => {
  chai
    .request(app)
    .post("/api/auth/login")
    .end((error, response) => {
      expect(response.text).to.equal("Logged In");
      done();
    });
});
