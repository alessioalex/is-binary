"use strict";

var fs = require("fs");
var isBinary = require("../");
var should = require('should');

describe('isBinary', function() {
  it('should be true for a binary program', function() {
    isBinary(fs.readFileSync(__dirname + "/fixtures/01_grep", 'utf8')).should.be.true;
  });

  it('should be false for an extensionless script', function() {
    isBinary(fs.readFileSync(__dirname + "/fixtures/02_perl_script", 'utf8')).should.be.false;
  });

  it('should be false for a russian text', function() {
    isBinary(fs.readFileSync(__dirname + "/fixtures/03_russian_file.rst", 'utf8')).should.be.false;
  });

  it('should be true for a PDF', function() {
    isBinary(fs.readFileSync(__dirname + "/fixtures/04_HelloWorld.pdf", 'utf8')).should.be.true;
  });

  it('should be true for a gif', function() {
    isBinary(fs.readFileSync(__dirname + "/fixtures/06_trunks.gif", 'utf8')).should.be.true;
  });
});
