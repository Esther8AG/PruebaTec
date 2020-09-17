"use strict"

 var assert = require('assert');
 var request = require('supertest')
 var app = require('../app.js')

 var request = request("http://qabarnasis.kuepa.com/api/auth/login-by-token?token&ust=1600384980000000")

 describe('auth/login-by-token?token&ust=1600384980000000', function() {
     describe('POST', function(){
         it('Should return json as default data format', function(done){
             request.post('/api/auth/login-by-token?token&ust=1600384980000000')
                 .expect('Content-Type', /json/)
                 .expect(200, done);
                });
                it('Should return json as data format when set Accept header to application/json', function(done){
                    request.post('/api/auth/login-by-token?token&ust=1600384980000000')
                        .set('Accept', 'application/json')
                        .expect('Content-Type', /json/)
                        .expect(200, done);
              
         });
     });
 });