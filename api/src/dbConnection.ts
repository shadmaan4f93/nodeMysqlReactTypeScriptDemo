import mysql from 'mysql';

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'shadmaan',
    database : 'adludiodb'
  });
  
export default pool;