describe("UtfDecoder", function() {
	describe("When decoding utf string", function() {
	
		it("should return single-byte characters unaffected", function() {
			var decoder = OpenPKW.UtfDecoder;

			var input = [];
			input.push(parseInt("7f", 16));

			var output = decoder.decode(input);
			expect(output[0]).toBe(parseInt("01111111",2));
		});

		it("should return decoded two-byte characters", function() {
			var decoder = OpenPKW.UtfDecoder;

			var input = [];
			input.push(parseInt("11010101", 2));
			input.push(parseInt("10111010", 2));

			var output = decoder.decode(input);
			expect(output[0]).toBe(parseInt("01111010",2));
			expect(output[1]).toBe(parseInt("00000101",2));
		});

		it("should return decoded three-byte charactersunaffected", function() {
			var decoder = OpenPKW.UtfDecoder;

			var input = [];
			input.push(parseInt("11101111", 2));
			input.push(parseInt("10111111", 2));
			input.push(parseInt("10111101", 2));

			var output = decoder.decode(input);
			expect(output[0]).toBe(parseInt("11111101",2));
			expect(output[1]).toBe(parseInt("11111111",2));
		});
	})
});
