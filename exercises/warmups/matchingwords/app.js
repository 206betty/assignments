// let keystring = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

// function findDuplicates(keystring, word){
//     return string.split(word).length -1;
// }
// console.log(keystring);

function duplicates(str){

    return str.split(' ')
        .filter(function(word, i, all){ // Get all occrences of duplicates, i.e. ['foo', 'foo'].
            return i != all.indexOf(word);
        })
        .filter(function(word, i, all){ // Get a unique list of those duplicate occrences, i.e. ['foo'].
            return i == all.indexOf(word);
        });

}
console.log(duplicates("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."))