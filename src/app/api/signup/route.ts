import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { name, email, number, password } = reqBody;
        console.log(reqBody);
        // Check if a user already exists
        const user = await User.findOne({ "email": email });
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashPass = await bcryptjs.hash(password, salt);

        const newUser = new User({
            name,
            email,
            number,
            password: hashPass,
        });
        const saveUser = await newUser.save();
        //send verification
        await sendEmail({email, type:"VERIFY", userId: saveUser._id})
        return NextResponse.json({ message: "User created" });

    } catch (error) {
        return NextResponse.json({ error}, { status: 500 });
    }
}
