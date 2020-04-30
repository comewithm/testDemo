const Mock = require('mockjs')
const Random = Mock.Random
const domain = 'http://mockjs.com/api'

const code = 200

const descData = req => {
	console.log(req)
	let desc = {
		title: Random.title(4,6),
		paragraph : Random.paragraph()
	}
	
	return {
		code,
		desc
	}
}

Mock.mock(`${domain}/goodsdescs`,'get',descData)