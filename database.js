const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

// Create tables
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS hostels (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      city TEXT NOT NULL,
      description TEXT,
      averageRating REAL,
      pricePerNight REAL,
      imageUrl TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      hostelId INTEGER,
      user TEXT,
      comment TEXT,
      rating INTEGER,
      FOREIGN KEY (hostelId) REFERENCES hostels(id)
    )
  `);
});

module.exports = db;
