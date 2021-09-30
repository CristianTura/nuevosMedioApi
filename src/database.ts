import mysql, { Pool } from 'promise-mysql';

import keys from './keys'

const pool = mysql.createPool(keys.database[0]);

pool.getConnection()
    .then(connection => {
      pool.releaseConnection(connection);
      console.log('DB is connected')
    });

export default pool;