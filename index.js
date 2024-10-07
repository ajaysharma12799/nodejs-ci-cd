const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Sample data
let users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
];

// Root endpoint
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Sample API" });
});

// Get all users
app.get("/users", (req, res) => {
    res.json(users);
});

// Get a specific user
app.get("/users/:id", (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});

// Create a new user
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
