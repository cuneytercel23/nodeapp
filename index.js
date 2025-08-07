// 1. KESİN PATLATAN HARDCODED CREDENTIAL
const DB_PASSWORD = "admin123"; // 🔴 CRITICAL: Blocker

// 2. SQL INJECTION ÖRNEĞİ
app.get("/hack", (req, res) => {
  db.query(`SELECT * FROM users WHERE id = ${req.query.id}`); // 🔴 CRITICAL
});

// 3. CORS AÇIĞI
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // 🔴 MAJOR
  next();
});

// 4. SHELL INJECTION
app.get("/cmd", (req) => {
  require("child_process").exec(req.query.command); // ☠️ BLOCKER
});
