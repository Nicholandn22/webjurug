const express = require('express');
const router = express.Router();

router.get('/api/agenda', async (req, res) => {
  try {
    const db = req.app.locals.db; // ambil koneksi db dari server
    const agenda = await db.collection('agenda').find().toArray();
    res.json(agenda);
  } catch (err) {
    console.error("❌ Gagal ambil agenda:", err);
    res.status(500).json({ error: 'Gagal mengambil data agenda' });
  }
});

module.exports = router;
