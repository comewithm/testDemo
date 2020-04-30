const Mock = require('mockjs')
const Random = Mock.Random
const domain = 'http://mockjs.com/api'

const code = 200

const goodsinfoData = req => {
	console.log(req)
	// let goodsinfos = []
	// for(let i = 0; i < 17; i++){
		let goodsinfo = {
			// id: 10,
			title: Random.title(4,9),
			date: Random.datetime(),
			number: Random.natural(),
			sell: Random.integer(60,100),
			newPrice: Random.integer(1800,2000),
			oldPrice: Random.integer(2100,2800)
		}
		// goodsinfos.push(goodsinfo)
	// }
	
	return{
		code,
		goodsinfo
	}	
}

Mock.mock(`${domain}/goodsinfos`,'get',goodsinfoData)
