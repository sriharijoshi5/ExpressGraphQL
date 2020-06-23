import Express from "express";
import Products from "./products.json"

const app = Express();
const port = 3000;


// GET, PUT, POST, DELETE

app.get("/products/:id", (req, res) => {
    // res.send("Hello World");
    res.json(Products.find((product) => {
        return +req.params.id === product.id
    }))

    // res.json(req.params.id);

})

app.listen(port, () => console.log("listening on port" + port))

// app.put()
// app.post()
// app.delete()
