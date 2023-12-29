

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
  

  