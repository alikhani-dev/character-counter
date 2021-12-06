const result = document.querySelector('.result')

function calculateDot(text) {
	const value = [...text]
	let sum = 0
	value.forEach((character, index) => {
		for (const alpha in data) {
			if (character == 'ی' && value[index + 1] && value[index + 1] !== ' ') {
				sum += 2
				break
			}
			if (alpha === character) {
				sum += data[alpha]
				break
			}
		}
	})
	result.innerHTML = sum
}
