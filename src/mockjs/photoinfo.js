const Mock = require('mockjs') 
const Random = Mock.Random 
const domain = 'http://mockjs.com/api' 
const code = 200 

const photoinfoData = req => {
  
  console.log(req) 

  let photoinfos = [] 
  
  for (let i = 0; i < 10; i++) {
    let photoinfo = {
		id: i,
		title: Random.title(1),
    }

    photoinfos.push(photoinfo)
  }
  
 
  return {
    code,
    photoinfos
  }
}


Mock.mock(`${domain}/photoinfos`, 'get', photoinfoData);