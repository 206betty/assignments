var input = "";

try {  
  if(input == "") {
    throw "Input can not be empty";
  } else if(input.length > 5) {
    throw "Input is to big";
  }
} catch(err) {
  console.log(err);
} finally {
  console.log("Runs no matter what");
  console.log("And the input was " + input);
}