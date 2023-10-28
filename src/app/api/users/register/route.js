import User from "@/models/user";
import bcryptjs from 'bcryptjs';
import ConnectToDatabase from "@/database/config";

export const POST = async (NextRequest) => {
	try {
		const body = await NextRequest.json();


		const {name, username, password} = body; //object destructuring


		if(!name || !username || !password){
			return new Response("Each field required", {status: 401});
		}

		await ConnectToDatabase();

		const user = await User.findOne({username});

		if(user){
			return new Response("Username already exist", {status:400});
		}

		const salt = await bcryptjs.genSalt(12);
		const hashedPassword = await bcryptjs.hash(password, salt);

		const newUser = new User({
			name,
			username,
			password:hashedPassword
		});

		await newUser.save();
		return new Response("Signed in successfully", {status:200});

	} catch (error) {
		console.log("Error while creating user", error);
		return new Response(`Error while creating user ${error}`, {status:500});
	}
}