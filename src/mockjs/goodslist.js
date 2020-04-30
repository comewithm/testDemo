const Mock = require('mockjs')
const Random = Mock.Random
const domain = 'http://mockjs.com/api'

const code = 200

const goodsData = req => {
	console.log(req)
	let goods = []
	for(let i = 0; i < 15; i++){
		let good = {
			id: i,
			image: Random.dataImage('180x180','手机图片'),
			title : Random.title(4, 8),
			newPrice : Random.integer(1000,1500),
			oldPrice : Random.integer(1600,2000),
			sell : Random.integer(40,100)
		}
		goods.push(good)
	}
	
	return {
		code,
		goods
	}
}

Mock.mock(`${domain}/goods`,'get',goodsData)