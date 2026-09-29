const express = require("express");
const app = express();
app.use(express.json());

app.post("/ask", (req, res) => {
    res.json({ answer: "Hello from the doctor" });
});

app.listen(3000, () => console.log("Server running on port 3000"));