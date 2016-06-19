/**
 * Created by dmx on 2016/6/14.
 */
function doctor() {
    var doctorDao=require('../dao/doctorDao');
    var uuid=require('node-uuid');
    /**
     * 获取所有的医生列表
     * @param params
     */
    this.getAllDoctor=function (params) {
        
    };
    this.addDoctor=function (params) {
        console.dir(params);
        var guid=uuid.v4();
        params.guid=guid;
        doctorDao.add(params,function (result) {
            params.doneService(result);
        });

    };
    this.selectAllDoctors=function (params) {
        doctorDao.queryAll(null,function (result) {
            params.doneService(result);
        });
    }
}
module.exports=doctor;