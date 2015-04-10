'use strict';
var OpenPKW = OpenPKW || {};

OpenPKW.UtfDecoder = {

    decode: function(input) {
        var output = [];
        var b;

        do {
            b = input.shift();
            if (b !== undefined) {

                var s = ('00000000' + b.toString(2)).substr(-8);
                if (s.substring(0, 1) === '0') {
                    output.push(b);
                } else if (s.substring(0, 3) === '110') {
                    var firstOfTwo = s.substring(3, 8);
                    b = input.shift();
                    s = s = ('00000000' + b.toString(2)).substr(-8);
                    var secondOfTwo = s.substring(2, 8);
                    var totalTwo = ('0000000000000000' + firstOfTwo + secondOfTwo).substr(-16);

                    var b1 = totalTwo.substr(0, 8);
                    var b0 = totalTwo.substr(9, 8);
                    output.push(parseInt(b0, 2));
                    output.push(parseInt(b1, 2));
                } else if (s.substring(0, 4) === '1110') {
                    var firstOfThree = s.substring(4, 8);
                    b = input.shift();
                    s = s = ('00000000' + b.toString(2)).substr(-8);
                    var secondOfThree = s.substring(2, 8);
                    b = input.shift();
                    s = s = ('00000000' + b.toString(2)).substr(-8);
                    var thirdOfThree = s.substring(2, 8);
                    var totalThree = ('000000000000000000000000' + firstOfThree +
                            secondOfThree + thirdOfThree).substr(-24);

                    var c2 = totalThree.substr(0, 8);
                    var c1 = totalThree.substr(8, 8);
                    var c0 = totalThree.substr(16, 8);

                    output.push(parseInt(c0, 2));
                    output.push(parseInt(c1, 2));
                    output.push(parseInt(c2, 2));
                }else {
                    output.push(s);
                }
            }
        } while (b !== undefined);

        return output;
    }
};
