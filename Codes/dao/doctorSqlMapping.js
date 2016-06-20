// dao/doctorSqlMapping.js
// CRUD SQL语句

var doctor = {
  insert:'insert into model(id,json) values(?,?)',
  update:'update doctor set doctorTitle=?, doctorName=?, doctorSpec=?, doctorDetail=?, doctorImg=? where doctorId=?',
  delete: 'delete from doctor where doctorId=?',
  queryById: 'select * from doctor where doctorId=?',
  queryAll: 'select * from model'
};

module.exports = doctor;