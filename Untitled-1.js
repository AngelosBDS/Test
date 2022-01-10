const sql = require('mssql')

var config = {
    database: 'WindDB_Trinity',
    server: '147.102.30.15',
    trustServerCertificate: true
};

sql.connect(config,function(err){
    if(err){
        console.log(err);
    }
    var request = new sql.Request();

    request.query('select * from dbo.Counter', function(err,recordset){
        if(err){
            console.log(err)
        }else{
            console.log(recordset)
        }

    });

});
