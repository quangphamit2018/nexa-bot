const express = require("express");
const app = express();

app.use(express.json());

// ===== TRANG CHỦ (QUAN TRỌNG) =====
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="zalo-platform-site-verification" content="JC6xT9RgAc9h_wLFb-u6QKVvecAhZtS_Cpau" />
        <title>Nexa Bot</title>
      </head>
      <body>
        Nexa bot running
      </body>
    </html>
  `);
});

// ===== WEBHOOK =====
app.post("/webhook", (req, res) => {
  console.log("Webhook nhận:", req.body);
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
