import Express from "express";
import Products from "products.json"

const app = Express();
const port = 3000;


// GET, PUT, POST, DELETE

app.get("/", (req, res) => {
    // res.send("Hello World");
    res.json(Products);

})

app.listen(port, () => console.log("listening on port" + port))

// app.put()
// app.post()
// app.delete()

 
