var should = require('should'),
 sinon =require('sinon');

 describe('Book Controller Test: ', function(){
     describe('Post', function(){
         it('Should not allow a empty title on Post', function(){
             var book = function(book){this.save = function(){}};
             var req= {
                 body: {
                     author:'Jhon'
                 }
             }
             var res = {
                 status : sinon.spy(),
                  send:sinon.spy()
             }
             var bookController = require('../Controllers/bookController')(Books);
             bookController.post(req,res);
             req.status.calledWith(400).should.equal(true,'Bad Status' + res.status.args[0][0]);
             res.send.calledWith('Title is Require').should.equal(true);
         });
     })
 })