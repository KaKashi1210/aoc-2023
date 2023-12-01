const input = await Bun.file('./input.txt').text()
let arr = input.split('\n')
arr.pop()
let temp = ''
let sum = 0

for (let i = 0; i < arr.length; i++) {
	let temp2 = ''

	for (let k = 0; k < arr[i].length; k++) {
		temp2 += arr[i][k]
		temp2 = temp2
			.replace('one', '1e')
			.replace('two', '2o')
			.replace('three', '3e')
			.replace('four', '4')
			.replace('five', '5')
			.replace('six', '6')
			.replace('seven', '7')
			.replace('eight', '8t')
			.replace('nine', '9')

	}
	arr[i] = temp2

	for (let k = 0; k < arr[i].length; k++) {
		if (arr[i][k].charCodeAt(0) <= 57 && arr[i][k].charCodeAt(0) >= 48) {
			temp += arr[i][k]
		}
	}
	sum += parseInt(temp[0] + temp[temp.length - 1])
	temp = ''
}

console.log(sum)
