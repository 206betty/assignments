for (i = 0; i < 100; i += 1) {
    if (i % 15 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else (i % 3 > 0 || i % 5 > 0)
        console.log(i);
}