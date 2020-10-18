const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let exprArr = expr.match(/.{1,10}/g);
	let morseArr = [];
	let finalExpr = "";

	exprArr.map((item) => {
		morseArr.push(item.match(/.{1,2}/g));
	});

	const decodeToMorse = (morseArr) => {
		for (let i = 0; i < morseArr.length; i++) {
			for (let j = 0; j < morseArr.length; j++) {
				if (morseArr[i][j] === "10") {
					morseArr[i][j] = ".";
				} else if (morseArr[i][j] === "11") {
					morseArr[i][j] = "-";
				} else if (morseArr[i][j] === "00") {
					morseArr[i].splice([j], 1);
					decodeToMorse(morseArr);
				}
			}
		}
		return morseArr;
	};
	
	decodeToMorse(morseArr);

	const finalArr = morseArr.map(elem => {
		return elem.join("");
	});

	console.log(finalArr);

	for (let i = 0; i < finalArr.length; i++) {
		for (let key in MORSE_TABLE) {
			if (key === finalArr[i]) {
				finalExpr += MORSE_TABLE[key];
			} else if (finalArr[i] === '**********') {
				finalExpr += ' ';
			}
		}
	}

	finalExpr = finalExpr.replace(/ +/g, ' ').trim();

	return finalExpr;
}

module.exports = {
    decode
};
