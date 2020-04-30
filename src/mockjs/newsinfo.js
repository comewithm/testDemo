const Mock = require('mockjs') 
const Random = Mock.Random 
const domain = 'http://mockjs.com/api' 
const code = 200 

const newsinfoData = req => {
  
  console.log(req) 

  let newsinfos = [] 
  
  for (let i = 0; i < 20; i++) {
    let newsinfo = {
		id: i,
		title: Random.title(3, 5),
		click: Random.integer(1, 100),
		date: Random.datetime(),
		paragraph : Random.paragraph()
    }

    newsinfos.push(newsinfo)
  }
  
 
  return {
    code,
    newsinfos
  }
}


Mock.mock(`${domain}/newsinfos`, 'get', newsinfoData);