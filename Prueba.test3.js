"use strict"

 var assert = require('assert');
 var request = require('supertest')
 var app = require('../app.js')

 var request = request("http://qabarnasis.kuepa.com")

 describe('auth/generateToken', function() {
     describe('POST', function(){
         it('Should return json as default data format', function(done){
             request.post('/api/auth/generateToken')
                 .expect('Content-Type', /json/)
                 .expect(200, done);
                });
                it('Should return json as data format when set Accept header to application/json', function(done){
                    request.post('/api/auth/generateToken')
                        .set('Accept', 'application/json')
                        .expect('Content-Type', /json/)
                        .expect(200, done);
              
         });
     });
 });