const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

db.all('SELECT * FROM hostels', [], (err, rows) => {
  if (err) {
    console.error('❌ Error fetching hostels:', err.message);
    return;
  }

  console.log('✅ Hostels found in database:');
  console.table(rows);
});
