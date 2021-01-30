const express = require ('express');

const app = express();


// Initialise body-parser
app.use(express.json({extended: false }))

app.get('/', (req, res) => {
    res.send('API IS UP')
})

// APi Route
app.use('/api/user', require('./routes/api/user'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));