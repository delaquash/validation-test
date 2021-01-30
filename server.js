const express = require ('express');
const app = express();


// Initialise body-parser
app.use(express.json({extended: false }))

app.post('/', (req, res) => {
    res.send('API IS UP')
})

// APi Route
app.use('/api/users', require('./routes/api/validation'))

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));