import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        
        const connection = mongoose.connection;
        
        connection.on('connected', () => {
            console.log("MongoDB connected successfully");
        });

        connection.on('error', (err:any) => {
            console.error("MongoDB connection error:", err);
        });

        return connection; 
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; 
    } 
}
 