const express = require("express");
const app = express();
const routeCategory = require("./routes/category");
const routeBook = require("./routes/books");
const bodyParser = require("body-parser");

// Lo vemos en la próxima clase
app.use(bodyParser.json());

app.get("/categories", routeCategory.list);
app.post("/categories", routeCategory.create);
app.get("/categories/:id", routeCategory.get);

app.get("/books", routeBook.list);
app.post("/books", routeBook.create);
app.get("/books/:id", routeBook.get);
app.get("/books/search/:keyword", routeBook.search);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
