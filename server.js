const express = require('express');
const db = require('./database');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // For parsing JSON

// Test Route
app.get('/', (req, res) => {
  res.send('🏕️ Hostelworld API is running');
});

// GET /hostels?city=London
app.get('/hostels', (req, res) => {
  const city = req.query.city;

  let query = 'SELECT * FROM hostels';
  let params = [];

  if (city) {
    query += ' WHERE city = ?';
    params.push(city);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      console.error('Error fetching hostels:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

// GET /hostels/:id
app.get('/hostels/:id', (req, res) => {
  const id = req.params.id;

  const query = `
    SELECT * FROM hostels WHERE id = ?;
  `;

  db.get(query, [id], (err, hostel) => {
    if (err) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (!hostel) {
      res.status(404).json({ error: 'Hostel not found' });
      return;
    }

    // Get reviews for the hostel
    db.all(
      'SELECT * FROM reviews WHERE hostelId = ?',
      [id],
      (err, reviews) => {
        if (err) {
          res.status(500).json({ error: 'Internal server error' });
        } else {
          res.json({ ...hostel, reviews });
        }
      }
    );
  });
});

// (Optional) POST /bookings
app.post('/bookings', (req, res) => {
  // You can just log the data for now as a mock
  console.log('📦 Booking request received:', req.body);
  res.status(201).json({ message: 'Booking request received (mock)' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
