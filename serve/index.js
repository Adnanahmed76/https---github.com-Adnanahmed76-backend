let http=require("http")

let server=http.createServer((req,res)=>{
    if(req.url=="/news"){
let obj={
    status:1,
    data:[{
newTitle:"ws",
newsDes:"adnan hello",
    },
{
    newsTitle:"Ip",
    newsDes:"Ip Hello"
}
]
}
res.end(JSON.stringify(obj));
    }if(req.url=="/about"){
        
    }
    if(req.url=="/course"){
res.end("hello")
    }
    if(req.url=="/")
{
    res.end("welcome to adnan ")
}

})
server.listen("8000",)//http://localhost:8000