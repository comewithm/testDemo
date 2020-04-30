const Mock = require('mockjs')
const Random = Mock.Random
const domain = 'http://mockjs.com/api'

const code = 200

const photoData = req =>{
	console.log(req)
	let photos = []
	
	for (let i = 0; i < 10; i++) {
		let photo = {
			id : i,
			title : Random.title(3, 5),
			click : Random.integer(1, 100),
			time : Random.datetime(),
			content : Random.sentence(18)
		}
		photos.push(photo)
	}
		
	return {
		code,
		photos
	}
}

Mock.mock(`${domain}/photos`,'get',photoData)