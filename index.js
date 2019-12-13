const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'sequelizenode'
  }
});

const query = new Promise((resolve, reject) => {
  
  knex({ u: 'users' })
    // .where('email', 'like', '%@email.com')
    .then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })

})

async function teste() {

  setTimeout(async () => {
    const banana = await query;
    
    console.log(banana);
  }, 10000)


  return;
}

teste();