let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');

let should = chai.should();
let expect = chai.expect();
chai.use(chaiHttp);

describe('/GET registration', () => {
    it('It should return all tasks', () => {
        chai.request(server)
        .get('/registration')
        .end((err,response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            //response.body.length.should.not.be.eq(0);
        //done();    
        });
    });
    // it('/GET  should NOT return all tasks', () => {
    //     chai.request(server)
    //     .get('/form')
    //     .end((err,response) => {
    //         response.should.have.status(404);
    //         response.body.should.be.a('object');
    //     done();    
    //     });
    // });
    
});
