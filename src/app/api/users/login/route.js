import User from "@/models/user";
import bcryptjs from 'bcryptjs';
import ConnectToDatabase from "@/database/config";
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";

export const POST = async (NextRequest) => {
	try {
		const body = await NextRequest.json();

		const {username, password} = body; //object destructuring


		if(!username || !password){
			return new Response("Each field required", {status: 401});
		}

		await ConnectToDatabase();

		const user = await User.findOne({username});

		if(!user){
			return new Response("Username doesn't exist", {status:400});
		}

		const validPassword = await bcryptjs.compare(password, user.password);

		if(!validPassword){
			return new Response("Password is incorrect", {status:400});
		}

		const tokenData = {
			username:user.username,
			id: user._id,
		}

		const token = jwt.sign(tokenData, "demokey", {expiresIn:"1d"});

		const response = NextResponse.json({message: "Login successfully"});

		response.cookies.set('token', token, {httpOnly:true});

		return response;

	} catch (error) {
		console.log("Error loggin user", error);
		return new Response(`Error while creating user ${error}`, {status:500});
	}
}