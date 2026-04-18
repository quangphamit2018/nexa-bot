const express = require("express");
const app = express();

app.use(express.json());

// 👉 route test
app.get("/", (req, res) => {
  res.send("Nexa bot running 🚀");
});

// ✅ THÊM ĐOẠN NÀY (verify Zalo)
app.get("/zalo_verifier_JC6xT9RgAc9h_wLFb-u6QKVvecAhZtS_Cpau.html", (req, res) => {
  res.send("zalo-site-verification: zalo_verifier_JC6xT9RgAc9h_wLFb-u6QKVvecAhZtS_Cpau.html");
});

// 👉 webhook Zalo
app.post("/webhook", (req, res) => {
  console.log("Webhook nhận:", req.body);
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
