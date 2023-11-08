import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://sujal:sujalj@cluster0.gbfngmo.mongodb.net/library', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to the database.');
    } catch (err) {
        console.error('Error connecting to the database', err);
    }
}

connectDB();