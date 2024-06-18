
import dbConnect from "../../../utils/mongo";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CreateUser from "../../../models/CreateUser";
export default async function handler(req, res) {

    const { method, query } = req;

    if (method === "POST") {
        if (query.type === "createUser") {
            try {
                await dbConnect()
                function checkForNums(input) {
                    let result = /^\d+$/.test(input);
                    return result
                }
                const admin = await CreateUser.find({ admin: true })
                if (admin.length > 0) {
                    res.status(500).json({ success: false, message: "admin exist", admin });
                } else {
                    if (req.body.email !== "" && req.body.PhoneNumber !== "" && checkForNums(req.body.PhoneNumber) === true && req.body.password !== ""
                        && req.body.password === req.body.RePassword && req.body.SecureTok !== "") {
                        const salt = await bcrypt.genSalt(10);
                        const hashedPassword = await bcrypt.hash(req.body.password, salt);
                        const user = await CreateUser.create({
                            email: req.body.email,
                            password: hashedPassword,
                            phonenumber: parseInt(req.body.PhoneNumber),
                            securetok: req.body.SecureTok,
                            admin: true
                        });
                        const admin = await CreateUser.find({ email: req.body.email })
                        if (admin[0].email === user.email) {
                            res.status(200).json({ success: true, message: "Admin is created" });
                        } else {
                            res.status(500).json({ success: false, message: "Error saving to data base" });
                        }

                    } else {
                        res.status(500).json({ success: false, message: "Please fill in the fields with te right input" });
                    }
                }
            } catch (error) {
                res.status(500).json({ success: false, message: "Internal server error" });
            }
        }
        if (query.type === "login") {
            try {
                const { email, password } = req.body;
                const admin = await CreateUser.findOne({ email });
                if (!admin) {
                    return res.status(401).json({ success: false, message: "Invalid email or password" });
                }

                const isPasswordMatch = await bcrypt.compare(password, admin.password);

                if (!isPasswordMatch) {
                    return res.status(401).json({ success: false, message: "Invalid email or password" });
                }
               

                //const token = jwt.sign({ id: admin._id, randomString: randomString }, process.env.JWT_SECRET, { expiresIn: "1h" });
                // Issue a new token with a unique ID
                function issueToken(userId) {
                    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                    const token = jwt.sign({ userId1:userId, jti: randomString }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    return token;
                }
                try {
                    const updatedUser = await CreateUser.findOneAndUpdate(
                      { _id: admin._id },
                      { $set: { token:issueToken(admin._id) } },
                      { new: true, useFindAndModify: false }
                    );
                    res.setHeader("Set-Cookie", `token=${updatedUser.token}; HttpOnly; Secure; SameSite=None`);
                    res.status(200).json({ success: true, message: "Logged in successfully" });
                  } catch (err) {
                    res.status(500).json({ success: false, message: "Faild to save token into database" });
                  }

            } catch (error) {
                res.status(500).json({ success: false, message: "Internal server error" });
            }
        }

    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ success: false, message: `Method ${method} not allowed` });
    }


}
