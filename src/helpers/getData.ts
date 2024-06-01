import jwt from "jsonwebtoken"
import { NextRequest } from "next/server"

export const getData = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || "";
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        return decodedToken.name;
    } catch (error) {
        console.log(error);
        throw new Error("Token verification failed");
    }
}
