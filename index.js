import Express from "express";
import Products from "./products.json"

const app = Express();
const port = 3000;

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }) )
// GET, PUT, POST, DELETE

function mid(req, res, next){
    console.log(req.query);
    console.log(req.params);
    next();
}


app.get("/products/:id", mid, (req, res) => {
    // res.send("Hello World");
    res.json(Products.find((product) => {
        return +req.params.id === product.id
    }))
})

app.post("/add", (req,res) => {
    console.log(req.body.id)
    res.sendStatus(200)
})

app.listen(port, () =>
    console.log("listening on port" + port))

// app.put()
// app.post()
// app.delete()
