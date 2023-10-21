module.exports = function toReadable(number) {
    const ones = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }

    const tenToTwenty = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }

    const tens = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    const hundreds = {
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred'
    }

    let res;
    let digitOfTens = number.toString()[0] + '0';
    let digitOfOnes = number % 10;
    if (number < 10) {
        res = Object.values(ones)[(Object.keys(ones)[number])];
    } if (number >= 10 && number < 20) {
        Object.entries(tenToTwenty).map(el => {
            if (el[0] == number) {
                res = el[1];
            }
        })
    } if (number >= 20 && number < 100) {
        Object.entries(tens).map(el => {
            if (el[0] == digitOfTens) {
                res = el[1] + ' ' + Object.values(ones)[(Object.keys(ones)[digitOfOnes])]
            } if (el[0] == digitOfTens && digitOfOnes == 0) {
                res = el[1];
            }
        })
    } if (number >= 100 && number < 1000) {
        let digitOfHundreds = number.toString()[0] + '00';
        Object.entries(hundreds).map(el => {
            if (el[0] == digitOfHundreds) {
                res = el[1] + ' ' + toReadable(number % 100);
            } if (el[0] == digitOfHundreds && number % 100 == 0) {
                res = el[1];
            }
        });
    }
    return res;

}
