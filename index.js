const express = require('express');
const app = express();

const PORT = 3000; // OR 8080

app.listen(PORT, () => {
    console.log(`Server is Listening on port http://localhost:${PORT}`);
});