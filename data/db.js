const mongoose = require('mongoose');

db().catch(err => console.log(err));

async function db() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);

    }


    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = db;