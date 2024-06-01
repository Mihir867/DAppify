import { connect } from "@/dbConfig/config";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Connect to MongoDB
connect();

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const reqBody = await request.json();
        const { email, password } = reqBody;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            // If user does not exist, return error response
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }

        // Check if password is correct
        const validPass = await bcryptjs.compare(password, user.password);
        if (!validPass) {
            // If password is incorrect, return error response
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }

        // Create token data
        const tokenData = { id: user._id, name: user.name, email: user.email, number: user.number };
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });

        // Create response object
        const response = NextResponse.json({ message: "Logged In successfully" });

        // Set token as cookie
        response.cookies.set("token", token, { httpOnly: true });

        // Return response
        return response;
    } catch (error) {
        // If an error occurs, return error response
        return NextResponse.json({ error }, { status: 500 });
    }
}
