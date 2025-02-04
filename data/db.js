const mongoose = require('mongoose');
const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://lucas:kFdIPFU3USLfbqQZ@clust(er0.jsvxv.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
module.exports = connectDB;