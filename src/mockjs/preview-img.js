const Mock = require('mockjs')
const Random = Mock.Random
const domain = 'http://mockjs.com/api'
const code = 200

const imgData = req => {
	let imgs = []
	console.log(req)
	for(let i = 0; i < 5; i++){
		let img = {
			image : Random.dataImage('100x100' , "缩略图")
		}
		imgs.push(img)
	}
	
	return {
		code,
		imgs
	}
}

Mock.mock(`${domain}/imgs`,'get',imgData)