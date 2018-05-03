var chai = require("chai");
var assert = chai.assert;
var addWord = require("./app").addWord
var lookItUp = require("./app").lookItUp

describe("create a dictionary that contains words and definitions", function(){
    it("should add a word and a definaition for that word", function(){
        assert.equal(JSON.stringify(addWord("cat", "a peacful animal")), JSON.stringify({cat: "a peacful animal"}) )
    })
    it("should retunr the definition of the word", function(){
        assert.equal(lookItUp("cat"), "a peaceful animal")
    })
    it("should not allow plurals of the same word", function(){
        assert.equal(addWord("cats", "a similar animal"), )
    })
})