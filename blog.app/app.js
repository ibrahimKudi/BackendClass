require('dotenv').config()
const express = require('express')
const app = express()

PORT = 4000 || process.env.PORT

app.use('/', require('./routes/main'));

// app.get('/', (req, res) =>{
//     res.send('Hello World!')
// })

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});