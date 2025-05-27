const db = require('./database');



const hostels = [
  {
    name: "Backpackers Paradise",
    city: "London",
    description: "Affordable and cozy hostel.",
    averageRating: 4.5,
    pricePerNight: 30,
    imageUrl: "https://via.placeholder.com/300"
  },
  {
    name: "City Stay",
    city: "Paris",
    description: "Modern rooms with central access.",
    averageRating: 4.2,
    pricePerNight: 40,
    imageUrl: "https://via.placeholder.com/300"
  },
  {
    name: "Novotel",
    city: "Visakhapatnam",
    description: "High class and Luxury rooms with beach view.",
    averageRating: 4.7,
    pricePerNight: 45,
    imageUrl: "https://via.placeholder.com/300"
  },
];

hostels.forEach(h => {
  db.run(`
    INSERT INTO hostels (name, city, description, averageRating, pricePerNight, imageUrl)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [h.name, h.city, h.description, h.averageRating, h.pricePerNight, h.imageUrl],
    (err) => {
      if (err) console.error(err.message);
    }
  );
});
