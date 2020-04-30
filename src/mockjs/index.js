const Mock = require('mockjs') 
const Random = Mock.Random 
const domain = 'http://mockjs.com/api' 
const code = 200 


const indexData = req => {
  
  console.log(req) 

  let indexs = [] 
  
  for (let i = 0; i < 20; i++) {
    let index = {
		id: i,
		title: Random.title(3, 5),
		click: Random.integer(1, 100),
		date: Random.datetime(),
		url: Random.url(),
		image: Random.dataImage('200x100', '新闻')
    }

    indexs.push(index)
  }
  
 
  return {
    code,
    indexs
  }
}


Mock.mock(`${domain}/indexs`, 'get', indexData);