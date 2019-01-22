const dogs = ['bad', 'good']

module.exports = {
	getDogs() {
		console.log(dogs.join(','))
		return dogs.join(',')
	},
	getDog(index) {
		return dogs[index]
	}
}
