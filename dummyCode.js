

// // DUMMY DATA ---- DUMMY DATA ---- DUMMY DATA ---- DUMMY DATA ---- DUMMY DATA
// let notes = [
//   { id: 1, content: "HTML is easy", important: true },
//   { id: 2, content: "Browser can execute only JavaScript", important: false },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true,
//   },
// ];
// //  ---- DUMMY DATA  ---- DUMMY DATA  ---- DUMMY DATA  ---- DUMMY DATA  ---- DUMMY DATA
// // MIDDLEWARE IMPLEMENTATION EXAMPLES ---- MIDDLEWARE IMPLEMENTATION EXAMPLES ---- MIDDLEWARE IMPLEMENTATION EXAMPLES
// app.get("/api/notes/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const note = notes.find((note) => note.id === id);
//   if (note) {
//     res.json(note);
//     console.log(note)
//   } else {
//     res.status(404).end();
//   }
// });

// app.delete('/api/notes/:id', (request, response) => {
//   const id = Number(request.params.id)
//   notes = notes.filter(note => note.id !== id)

//   response.status(204).end()
// })
// const noteSchema = new mongoose.Schema({
//     content: String,
//     important: Boolean,
//   })
  
//   const Note = mongoose.model('Note', noteSchema)


// Note.find({}).then(result => {
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })
// // MIDDLEWARE IMPLEMENTATION EXAMPLES ---- MIDDLEWARE IMPLEMENTATION EXAMPLES ---- MIDDLEWARE IMPLEMENTATION EXAMPLES








// MONGOOSE MODEL EXAMPLE with persisting data on db operation implemented ---- MONGOOSE MODEL EXAMPLE with persisting data on db operation implemented
// const noteSchema = new mongoose.Schema({
//     content: String,
//     important: Boolean,
//   })
  
//   const Note = mongoose.model("Note", noteSchema)
  
//   const note = new Note({
//     content: "HTML is Easy",
//     important: true,
//   })
  
//   note.save().then(result => {
//     console.log("note saved!")
//     mongoose.connection.close()
//   })
  // MONGOOSE MODEL EXAMPLE with persisting data on db operation implemented ---- MONGOOSE MODEL EXAMPLE with persisting data on db operation implemented





  // DATA DUMP ---- DATA DUMP ---- DATA DUMP ---- DATA DUMP ---- DATA DUMP ---- DATA DUMP ---- DATA DUMP ---- DATA DUMP ---- 
 const dataArray = [
    {
      "itemName": "Item 1",
      "imageCover": "item1_cover.jpg",
      "images": ["item1_image1.jpg", "item1_image2.jpg"],
      "description": "Description for Item 1 goes here.",
      "ingredients": ["Ingredient 1", "Ingredient 2"],
      "price": 19.99,
      "ratingsAverage": 4.2,
      "ratingQuantity": 15,
      "quantity": "In Stock",
      "priceDiscount": 5,
      "createdAt": "2023-01-01T12:00:00.000Z"
    },
    {
      "itemName": "Item 2",
      "imageCover": "item2_cover.jpg",
      "images": ["item2_image1.jpg", "item2_image2.jpg"],
      "description": "Detailed description for Item 2.",
      "ingredients": ["Ingredient 3", "Ingredient 4"],
      "price": 29.99,
      "ratingsAverage": 4.7,
      "ratingQuantity": 22,
      "quantity": "Out of Stock",
      "priceDiscount": null,
      "createdAt": "2023-02-01T12:00:00.000Z"
    },
    {
      "itemName": "Item 3",
      "imageCover": "item3_cover.jpg",
      "images": ["item3_image1.jpg", "item3_image2.jpg"],
      "description": "Item 3 is a great choice.",
      "ingredients": ["Ingredient 5", "Ingredient 6"],
      "price": 39.99,
      "ratingsAverage": 4.9,
      "ratingQuantity": 30,
      "quantity": "Limited Stock",
      "priceDiscount": 8,
      "createdAt": "2023-03-01T12:00:00.000Z"
    },
    {
      "itemName": "Item 4",
      "imageCover": "item4_cover.jpg",
      "images": ["item4_image1.jpg", "item4_image2.jpg"],
      "description": "The description for Item 4 is informative.",
      "ingredients": ["Ingredient 7", "Ingredient 8"],
      "price": 49.99,
      "ratingsAverage": 4.5,
      "ratingQuantity": 18,
      "quantity": "In Stock",
      "priceDiscount": null,
      "createdAt": "2023-04-01T12:00:00.000Z"
    },
    {
      "itemName": "Item 5",
      "imageCover": "item5_cover.jpg",
      "images": ["item5_image1.jpg", "item5_image2.jpg"],
      "description": "A unique description for Item 5.",
      "ingredients": ["Ingredient 9", "Ingredient 10"],
      "price": 59.99,
      "ratingsAverage": 4.3,
      "ratingQuantity": 25,
      "quantity": "In Stock",
      "priceDiscount": 12,
      "createdAt": "2023-05-01T12:00:00.000Z"
    },
    {
      "itemName": "Item 6",
      "imageCover": "item6_cover.jpg",
      "images": ["item6_image1.jpg", "item6_image2.jpg"],
      "description": "Item 6 is a must-have.",
      "ingredients": ["Ingredient 11", "Ingredient 12"],
      "price": 69.99,
      "ratingsAverage": 4.8,
      "ratingQuantity": 28,
      "quantity": "Out of Stock",
      "priceDiscount": 10,
      "createdAt": "2023-06-01T12:00:00.000Z"
    },
    {
      "itemName": "Item 7",
      "imageCover": "item7_cover.jpg",
      "images": ["item7_image1.jpg", "item7_image2.jpg"],
      "description": "Description for Item 7.",
      "ingredients": ["Ingredient 13", "Ingredient 14"],
      "price": 79.99,
      "ratingsAverage": 4.6,
      "ratingQuantity": 20,
      "quantity": "In Stock",
      "priceDiscount": null,
      "createdAt": "2023-07-01T12:00:00.000Z"
    },
    {
      "itemName": "Item 8",
      "imageCover": "item8_cover.jpg",
      "images": ["item8_image1.jpg", "item8_image2.jpg"],
      "description": "Detailed description for Item 8.",
      "ingredients": ["Ingredient 15", "Ingredient 16"],
      "price": 89.99,
      "ratingsAverage": 4.4,
      "ratingQuantity": 24,
      "quantity": "Limited Stock",
      "priceDiscount": 15,
      "createdAt": "2023-08-01T12:00:00.000Z"
    },
    {
      "itemName": "Item 9",
      "imageCover": "item9_cover.jpg",
      "images": ["item9_image1.jpg", "item9_image2.jpg"],
      "description": "Item 9 is a top choice.",
      "ingredients": ["Ingredient 17", "Ingredient 18"],
      "price": 99.99,
      "ratingsAverage": 4.7,
      "ratingQuantity": 26,
      "quantity": "In Stock",
      "priceDiscount": null,
      "createdAt": "2023-09-01T12:00:00.000Z"
    },
    {
      "itemName": "Item 10",
      "imageCover": "item10_cover.jpg",
      "images": ["item10_image1.jpg", "item10_image2.jpg"],
      "description": "Description for Item 10.",
      "ingredients": ["Ingredient 19", "Ingredient 20"],
      "price": 109.99,
      "ratingsAverage": 4.9,
      "ratingQuantity": 32,
      "quantity": "Out of Stock",
      "priceDiscount": 20,
      "createdAt": "2023-10-01T12:00:00.000Z"
    }
  ]
  // DATA DUMP ---- DATA DUMP ---- DATA DUMP ---- DATA DUMP ---- DATA DUMP ---- DATA DUMP ---- DATA DUMP ---- DATA DUMP ---- 

 const usersArray = [
    {
      "name": "John",
      "email": "john@example.com",
      "password": "password123",
      "lastName": "Doe",
      "location": "New York",
      "role": "admin",
      "avatar": "john_avatar.jpg",
      "avatarPublicId": "12345",
    },
    {
      "name": "Jane",
      "email": "jane@example.com",
      "password": "securepass",
      "lastName": "Smith",
      "location": "San Francisco",
      "role": "user",
      "avatar": "jane_avatar.jpg",
      "avatarPublicId": "67890",
    },
    {
      "name": "Alice",
      "email": "alice@example.com",
      "password": "alicepass",
      "lastName": "Johnson",
      "location": "Los Angeles",
      "role": "user",
      "avatar": "alice_avatar.jpg",
      "avatarPublicId": "13579",
    },
    {
      "name": "Bob",
      "email": "bob@example.com",
      "password": "bobpass123",
      "lastName": "Williams",
      "location": "Chicago",
      "role": "user",
      "avatar": "bob_avatar.jpg",
      "avatarPublicId": "24680",
    },
    {
      "name": "Charlie",
      "email": "charlie@example.com",
      "password": "charliepass",
      "lastName": "Brown",
      "location": "Houston",
      "role": "admin",
      "avatar": "charlie_avatar.jpg",
      "avatarPublicId": "98765",
    },
    {
      "name": "David",
      "email": "david@example.com",
      "password": "davidpass",
      "lastName": "Davis",
      "location": "Miami",
      "role": "user",
      "avatar": "david_avatar.jpg",
      "avatarPublicId": "54321",
    },
    {
      "name": "Eva",
      "email": "eva@example.com",
      "password": "evapass123",
      "lastName": "Evans",
      "location": "Seattle",
      "role": "user",
      "avatar": "eva_avatar.jpg",
      "avatarPublicId": "11111",
    },
    {
      "name": "Frank",
      "email": "frank@example.com",
      "password": "frankpass",
      "lastName": "Franklin",
      "location": "Denver",
      "role": "user",
      "avatar": "frank_avatar.jpg",
      "avatarPublicId": "22222",
    },
    {
      "name": "Grace",
      "email": "grace@example.com",
      "password": "gracepass123",
      "lastName": "Green",
      "location": "Phoenix",
      "role": "admin",
      "avatar": "grace_avatar.jpg",
      "avatarPublicId": "33333",
    },
    {
      "name": "Harry",
      "email": "harry@example.com",
      "password": "harrypass",
      "lastName": "Harrison",
      "location": "Dallas",
      "role": "user",
      "avatar": "harry_avatar.jpg",
      "avatarPublicId": "44444",
    },
    {
      "name": "Ivy",
      "email": "ivy@example.com",
      "password": "ivypass123",
      "lastName": "Iverson",
      "location": "Portland",
      "role": "user",
      "avatar": "ivy_avatar.jpg",
      "avatarPublicId": "55555",
    },
    // Add more objects as needed
  ];
  

  