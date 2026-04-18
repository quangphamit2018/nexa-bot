const express = require("express");
const app = express();

app.use(express.json());

// 👉 route test
app.get("/", (req, res) => {
  res.send("Nexa bot running 🚀");
});

/**
 * ✅ ZALO DOMAIN VERIFY (CHUẨN)
 * Route đúng (có dấu _)
 */
app.get("/zalo_verifier_JC6xT9RgAc9h_wLFb-u6QKVvecAhZtS_Cpau.html", (req, res) => {
  res.send("zalo-site-verification: zalo_verifier_JC6xT9RgAc9h_wLFb-u6QKVvecAhZtS_Cpau.html");
});

/**
 * ✅ Backup route (phòng trường hợp Zalo gọi sai URL - thiếu dấu _)
 */
app.get("/zalo_verifierJC6xT9RgAc9h_wLFb-u6QKVvecAhZtS_Cpau.html", (req, res) => {
  res.send("zalo-site-verification: zalo_verifier_JC6xT9RgAc9h_wLFb-u6QKVvecAhZtS_Cpau.html");
});

// 👉 webhook Zalo
app.post("/webhook", (req, res) => {
  console.log("📩 Webhook nhận:", JSON.stringify(req.body, null, 2));
  res.status(200).send("OK");
});

// 👉 start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("🚀 Server running on port", PORT));
