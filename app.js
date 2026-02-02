const http=require('http')
const server=http.createServer((req,res)=>{
//res.end("wow")
    if(req.url=="/home"){
        res.end("this is home page")
    }
    if(req.url=='/profile'){
        res.end("this is profile page")
    }
})

server.listen(3000)