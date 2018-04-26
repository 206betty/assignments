function rando() {
    var option = "ABCDEFGhijklm123456!@#$%^";
    var length = 6;
    var ran = " ";
    for (var i = 0; 1 < length; i++) {
        ran += option.charAt (Math.floor(Math.random() * option.length);
    }
    return ran;
}

