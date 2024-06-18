
import dbConnect from "../../../utils/mongo";
import jwt from "jsonwebtoken";
import CreateUser from "../../../models/CreateUser";

export default async function handler(req, res) {

    const { method } = req;

    if (method === "GET") {
        try {
            await dbConnect()
            const token = req.cookies.token;
            
            if (!token) {
                return res.status(401).json({ success: false, message: "Unauthorized" });
            }
            // Verify a token and retrieve the JWT ID
            let verifyToken
            try{
                verifyToken=await jwt.verify(token, process.env.JWT_SECRET)
            }catch(err){
                return res.status(500).json({ success: false, message: "jwt malformed" });
            }
            
            if (!verifyToken) {
                return res.status(401).json({ success: false, message: "Unauthorized verifyToken" });
            }
            const user = await CreateUser.findOne(
                { _id: verifyToken.userId1 },
                { token: 1, _id: 0 }
            );
            if (!user.token) {
                return  res.status(500).json({ success: false, message: "Error getting token from database" });

            }
            if (user.token !== token) {
                return  res.status(401).json({ success: false, message: "Token in data base and cookies token are not the same" });
               

            } else {
                let dataBaseToken
                try{
                    dataBaseToken = await jwt.verify(user.token, process.env.JWT_SECRET)
                }catch(err){
                    return res.status(500).json({ success: false, message: "jwt malformed" });
                }
                
                if (!dataBaseToken) {
                    return res.status(401).json({ success: false, message: "Unauthorized dataBaseToken" });
                    
                }
                if(verifyToken.jti!==dataBaseToken.jti){
                    return  res.status(401).json({ success: false, message: "verifyToken.jti!==dataBaseToken.jti" });
                }
                res.status(200).json({ success: true, message: "Authenticated successfully" });
            }
        } catch (error) {
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).json({ success: false, message: `Method ${method} not allowed` });
    }


}