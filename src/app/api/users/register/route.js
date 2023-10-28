

export const POST = async (NextRequest) => {
	try {
		const body = await NextRequest.json();

		const {name, username, password} = body; //object destructuring

		if(!name || !username || !password){
			return new Response("Each field required", {status: 401});
		}

		
	} catch (error) {
		
	}
}