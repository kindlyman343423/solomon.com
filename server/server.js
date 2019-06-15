let app = require('../app');
let http = require('http');


http.createServer(app).listen(3000,(err)=>{
    try{
    if(err){
        throw new err;
    }
    console.log('server has started at port 3000');
}catch(err){
    console.log(err);
}
});