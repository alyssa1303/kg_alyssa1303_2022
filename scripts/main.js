var integerDict = {
	"1": "One",
	"2": "Two",
	"3": "Three",
	"4": "Four",
	"5": "Five",
	"6": "Six",
	"7": "Seven",
	"8": "Eight",
	"9": "Nine",
	"0": "Zero"
};

function convertInteger(integerArr) {
	resultArr = []
	for (i = 0; i < integerArr.length; i++) {
		num = integerArr[i]
		convertedNum = ""
		for (j = 0; j < num.length; j++) {
			convertedNum += integerDict[num[j]]
		}
		resultArr.push(convertedNum)
	}
	return resultArr
}

var arr = process.argv.slice(2)
console.log(convertInteger(arr).toString())
