const Mock = require('mockjs') 
const Random = Mock.Random 
const domain = 'http://mockjs.com/api' 
const code = 200 

const commentData = req => {
  
  console.log(req) 

  let comments = [] 
  
  for (let i = 0; i < 10; i++) {
    let commentinfo = {
		user:Random.first(),
		date: Random.datetime(),
		sentence: Random.sentence(3, 5)
    }

    comments.push(commentinfo)
  }
  
 
  return {
    code,
    comments
  }
}


Mock.mock(`${domain}/comments`, 'get', commentData);