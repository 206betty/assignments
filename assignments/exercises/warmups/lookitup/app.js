var dictionary = {};

function addWord (word, define){
    dictionary[word] = define;
    return dictionary
}

function lookItUp (word){
    return dictionary[word]
}

module.exports = {
    addWord,
    lookItUp
}