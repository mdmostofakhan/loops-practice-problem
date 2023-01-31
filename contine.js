var numbers = [12, 34, 34, 56, 58, 46, 86, 78, 64, 65,];

for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
}