const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     res.send("Hello IbrahimKudi!")
// })

app.use(express.static('./facebook-login'))

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})