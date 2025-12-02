const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

const SECRET_KEY = "your_secret_key"; 

// Dummy user (normally you'd use a database)
const user = {
  id: 1,
  email: "john@example.com",
  password: bcrypt.hashSync("password123", 10)
};

// LOGIN route – generates JWT
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== user.email || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email }, 
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

// Middleware to verify token
function authenticate(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Missing token" });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid or expired token" });
    req.user = decoded;
    next();
  });
}

// Protected route
app.get("/profile", authenticate, (req, res) => {
  res.json({
    message: "Access granted",
    user: req.user
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
