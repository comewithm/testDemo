const Mock = require('mockjs')
const Random = Mock.Random
const domain = 'http://mockjs.com/api'

const code = 200

const photoListData = req => {
	console.log(req) 
	const photolists=[]
		
	for(let i=0; i<10; i++){
		let photolist = {
			id : i,
			title: Random.title(2,4),
			url: Random.url(),
			image : Random.dataImage('300x300','图片'),
			sentence : Random.sentence(15)
		}
		
		photolists.push(photolist)
	}
	
	return {
		code,
		photolists
	}
	
}

// Mock.mock(`${domain}/photolists`,'get',photoListData)
// Mock.mock(`${domain}/photolists?id=photolist.id`,'get',photoListData)
Mock.mock(RegExp(`${domain}/photolists` + ".*"),'get',photoListData)