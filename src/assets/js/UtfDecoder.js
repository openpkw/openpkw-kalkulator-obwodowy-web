'use strict';
var OpenPKW = OpenPKW || {};

OpenPKW.UtfDecoder = {

	decode: function(input) {
		var output = [];

		do {
			var b = input.shift();
			if (b != null) {

				var s = ("00000000" + b.toString(2)).substr(-8);
				if (s.substring(0, 1) == "0") {
					output.push(b);
				} else if (s.substring(0, 3) == "110") {
					var first = s.substring(3, 8);
					b = input.shift();
					s = s = ("00000000" + b.toString(2)).substr(-8);
					var second = s.substring(2, 8);
					var total = ("0000000000000000" + first+second).substr(-16);

					var b1 = total.substr(0,8);
					var b0 = total.substr(9,8);
					output.push(parseInt(b0, 2));
					output.push(parseInt(b1, 2));
//					output.push("["+total+"] ["+b0+","+b1+"]");
				} else if (s.substring(0, 4) == "1110") {
					var first = s.substring(4, 8);
					b = input.shift();
					s = s = ("00000000" + b.toString(2)).substr(-8);
					var second = s.substring(2, 8);
					b = input.shift();
					s = s = ("00000000" + b.toString(2)).substr(-8);
					var third = s.substring(2, 8);
					var total = ("000000000000000000000000"+first+second+third).substr(-24);

					var b2 = total.substr(0,8);
					var b1 = total.substr(8,8);
					var b0 = total.substr(16,8);

					output.push(parseInt(b0, 2));
					output.push(parseInt(b1, 2));
					output.push(parseInt(b2, 2));
					//output.push("["+b0+"]["+b1+"]["+b2+"]");
				}else {
					output.push(s);
				}
			}
		} while (b != null);

		return output;
	}
}
// }
// 		var bytes = [];
// 	var output = [];
// 	bytes.push(parseInt("EF", 16));
// 	bytes.push(parseInt("BF", 16));
// 	bytes.push(parseInt("BD", 16));

// 	var first_byte = bytes[0].toString(2);
// 	if (first_byte.substring(0, 1) == "0") {
// 		output.push(parseInt(first_byte, 2));
// 	} else if (first_byte.substring(0, 3) = "110") {

// 	}

// 	alert(first_byte);
// 	alert(bytes);

// 	if (true) {
// 		return;
// 	}


