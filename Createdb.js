const db = require('./database');



const hostels = [
  {
    name: "Backpackers Paradise",
    city: "London",
    description: "Affordable and cozy hostel.",
    averageRating: 4.5,
    pricePerNight: 30,
    imageUrl: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
  },
  {
    name: "City Stay",
    city: "Paris",
    description: "Modern rooms with central access.",
    averageRating: 4.2,
    pricePerNight: 40,
    imageUrl: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
  },
  {
    name: "Novotel",
    city: "Visakhapatnam",
    description: "High class and Luxury rooms with beach view.",
    averageRating: 4.7,
    pricePerNight: 45,
    imageUrl: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
  },
  {
    name: "La Tamara",
    city: "Hyderabad",
    description: "High class and Luxury rooms with city view.",
    averageRating: 4.7,
    pricePerNight: 45,
    imageUrl: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
  },
  {
    name: "Paradise",
    city: "Banglore",
    description: "Affordable and cozy hostel.",
    averageRating: 4.5,
    pricePerNight: 30,
    imageUrl: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
  },
  {
    name: "Le Meridian",
    city: "Hyderabad",
    description: "Clean and neat friendly hostel.",
    averageRating: 4.5,
    pricePerNight: 30,
    imageUrl: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
  },
  {
    name: "Sydney Rooms",
    city: "Sydney",
    description: "Famous for tourists and Qualified staff.",
    averageRating: 4.5,
    pricePerNight: 30,
    imageUrl: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
  },
  {
    name: "BoxRooms",
    city: "London",
    description: "High class and Luxury rooms with city view.",
    averageRating: 4.5,
    pricePerNight: 30,
    imageUrl: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
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
