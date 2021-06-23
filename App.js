const express = require("express");
const app = express();
const users = require("./users");

app.listen(3000, () => {
    console.log("server started at port 3000");
});

app.use(express.json());
//console.log(users);

app.get("/users/", (req, res) => {

    //const user = users.filter((u) => u.id == parseInt(req.params.id));
    res.send(users);
});

app.get("/users/", (req, res) => {
    res.send(req.query);

})

app.post("/users/:id", (req, res) => {
    res.send(req.body);
});
// app.put("/users/:id", (req, res) => {
//     //db.users.updateOne();


// });
