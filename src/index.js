let express = require('express')
let app = express()

app.get("/hola", function(req, res){
    res.send("Hola mundo")
})

app.post("/users", (req, res) => {
    if(req.body.caso == "insertar"){
        if(req.body.identification != ""){

        } else {
            res.send({
                status: "done",
                message: "Usuario registrado",
                data: {

                }
            })
        }
    }
})

app.listen(3000, () => {
    console.log("Server on port 3000")
})