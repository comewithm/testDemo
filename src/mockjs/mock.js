
const Mock = require('mockjs') 
const Random = Mock.Random 
const domain = 'http://mockjs.com/api' 
const code = 200 


const postData = req => {
  
  console.log(req) 

  let posts = [] 
  
  for (let i = 0; i < 3; i++) {
    let post = {
	  url: Random.url(),
	  image: Random.dataImage('200x100', '123')
    }

    posts.push(post)
  }
  
 
  return {
    code,
    posts
  }
}


Mock.mock(`${domain}/posts`, 'get', postData);

