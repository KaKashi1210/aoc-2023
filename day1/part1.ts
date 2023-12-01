const input = await Bun.file('./input.txt').text()
const arr = input.split('\n')
arr.pop()
let temp = ''
let sum: number = 0

for (let i = 0; i < arr.length; i++) {


	for (let j = 0; j < arr[i].length; j++) {
		if (arr[i][j].charCodeAt(0) <= 57 && arr[i][j].charCodeAt(0) >= 48) {
			temp += arr[i][j]
		}
	}
	let anotherTemp = parseInt(temp[0] + temp[temp.length - 1])

	sum += anotherTemp
	temp = ''
}

console.log(sum)
