const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lucasyepez:PUfcwvaonLIPL1sF@portfolio-site-backend.modbl.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});