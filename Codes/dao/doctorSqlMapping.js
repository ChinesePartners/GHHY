// dao/doctorSqlMapping.js
// CRUD SQL语句

var doctor = {
  insert:'insert into model(id,json) values(?,?)',
  update:'update model set json=? where id=?',
  delete: 'delete from doctor where doctorId=?',
  queryById: 'select * from doctor where doctorId=?',
  queryAll: 'select * from model'
};

module.exports = doctor;