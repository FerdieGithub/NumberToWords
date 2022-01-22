
var thousMill = ['', 'thousand', 'million'];
var smallWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function ConvertToWords(s) {
	s = s.toString();
	var sLength = s.length;
	if (sLength > 9)
		return 'number too large';
	var sArr = s.split('');
	var words = '';
	var bitVal = 0;
	for (var i = 0; i < sLength; i++) {
		if ((sLength - i) % 3 == 2) {
			if (sArr[i] == '1') {
				words += tenToNineteen[Number(sArr[i + 1])] + ' ';
				i++;
				bitVal = 1;
			} else if (sArr[i] != 0) {
				words += tens[sArr[i] - 2] + ' ';
				bitVal = 1;
			}
		} else if (sArr[i] != 0) {
			words += smallWords[sArr[i]] + ' ';
			if ((sLength - i) % 3 == 0)
				words += 'hundred ';
			bitVal = 1;
		}
		if ((sLength - i) % 3 == 1) {
			if (bitVal)
				words +=  thousMill[(sLength - i - 1) / 3] + ' ';
			bitVal = 0;
		}
	}
	if (sLength != s.length) {
		var y_val = s.length;
		words += 'point ';
		for (var i = sLength + 1; i < y_val; i++)
			words += smallWords[sArr[i]] + ' ';
	}
	return words.replace(/\s+/g, ' ');
}