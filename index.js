const express = require("express");
const app = express();

app.use(express.json());

// ==============================
// ✅ TEST SERVER
// ==============================
app.get("/", (req, res) => {
  res.send("Nexa bot running 🚀");
});

// ==============================
// ✅ ZALO DOMAIN VERIFY
// ==============================

// 👉 đúng chuẩn (có dấu _)
app.get("/zalo_verifier_JC6xT9RgAc9h_wLFb-u6QKVvecAhZtS_Cpau.html", (req, res) => {
  res.send("zalo-site-verification: zalo_verifier_JC6xT9RgAc9h_wLFb-u6QKVvecAhZtS_Cpau.html");
});

// 👉 backup (trường hợp Zalo gọi sai thiếu dấu _)
app.get("/zalo_verifierJC6xT9RgAc9h_wLFb-u6QKVvecAhZtS_Cpau.html", (req, res) => {
  res.send("zalo-site-verification: zalo_verifier_JC6xT9RgAc9h_wLFb-u6QKVvecAhZtS_Cpau.html");
});

// ==============================
// ✅ WEBHOOK NHẬN TIN NHẮN
// ==============================
app.post("/webhook", (req, res) => {
  console.log("📩 Webhook nhận:", JSON.stringify(req.body, null, 2));

  // 👉 TODO: xử lý tin nhắn ở đây
  // ví dụ: đọc text user gửi

  res.status(200).send("OK");
});

// ==============================
// ✅ START SERVER
// ==============================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});
