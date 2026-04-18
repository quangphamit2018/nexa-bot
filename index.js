const express = require("express");
const app = express();

// middleware
app.use(express.json());

// ===== TEST SERVER =====
app.get("/", (req, res) => {
  res.send("Nexa bot running");
});

// ===== ZALO VERIFY (QUAN TRỌNG NHẤT) =====
app.get("/zalo_verifier_JC6xT9RgAc9h_wLFb-u6QKVvecAhZtS_Cpau.html", (req, res) => {
  res.status(200);

  // headers chuẩn cho Zalo
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");

  // response phải CHÍNH XÁC 100%
  return res.end(
    "zalo-site-verification: zalo_verifier_JC6xT9RgAc9h_wLFb-u6QKVvecAhZtS_Cpau.html"
  );
});

// ===== WEBHOOK =====
app.post("/webhook", (req, res) => {
  console.log("Webhook nhận:", req.body);
  res.status(200).send("OK");
});

// ===== START SERVER =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
