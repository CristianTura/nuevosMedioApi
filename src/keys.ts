// export default {

//   database: {
//     host: 'localhost',
//     user: 'root',
//     password: ' ',
//     database:  'movies'
//   }

// }
const host = 'bptk5dd1btqmid1a9ave-mysql.services.clever-cloud.com',
db = 'bptk5dd1btqmid1a9ave',
user = 'uvi2mlmvl36awp2j',
port = 3306,
password = 'qEDOnHAdnM0eSBU0InL4'

export default {
  database: [`mysql://${user}:${password}@${host}:${port}/${db}`]
}