const http = require("http")

const server = http.createServer(async (req, res)=> {
    if (req.url === "/" && req.method === "GET"){
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        res.write(JSON.stringify({message: "Feliz Navidad"}))

        res.end()
        return
    }

    res.writeHead(404, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ message: "Metodo no encontrado"}))
})

const PORT= 5002

server.listen(PORT, () => {
    console.log(`Servidor escuchando ${PORT}`)
})