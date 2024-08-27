const express = require('express');
const app = express();

const PORT = 3000; // OR 8080

// console.dir(app);

//Handling requests & Req Object details
app.use((req, res) => {
    console.log('Request receieved.');
});

//Sending a response
// app.use((req, res) => {
//     res.send('Hello World!');
// });

//Sending a HTML Response
// app.use((req, res) => {
//     let code = '<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>'
//     res.send(code);
// });

//Sending a JSON response
// app.use((req, res) => {
//     let fruits = ['Apple', 'Orange'];
//     res.send(fruits);
// });

app.listen(PORT, () => {
    console.log(`Server is Listening on port http://localhost:${PORT}`);
});