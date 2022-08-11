var numbers = [32, 11, 13, 31, 24, 15, 77, 66, 283];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
}