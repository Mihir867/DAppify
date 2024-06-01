import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide your first name"],
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Please provide your email address"],
        unique: true,
    },
    number: {
        type: String,  
        required: [true, "Please provide your contact number"],
    },
    password: {
        type: String,
        required: [true, "Please provide your password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
}, {
    timestamps: true,  
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
