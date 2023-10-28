"use client"
import { useState } from "react";
import Input from "@/app/components/Input";
import Link from "next/link";
import axios from 'axios';
import { useRouter } from "next/navigation";


const defaultValue = {
	name:"",
	username:"",
	password:""
}

const Register = () => {
	const [data, setData] = useState(defaultValue);
	const router = useRouter();

	const onValueChange = (e) => {
		setData({...data, [e.target.name]: e.target.value});
	}

	const onRegister = async (e) => {
		e.preventDefault();

		if(!data.name || !data.username || !data.password){
			alert("Please enter each field");
			return;
		}

		//API call
		try {
			const response = await axios.post('api/users/register', data);	
			setData(defaultValue);

			if(response.status === 200){
				router.push("/Login");
			}
		} catch (error) {
			console.log("Error while calling api: ", error);
		}

	}
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center flex-col items-center">
      <div className="bg-white px-16 pt-8 pb-12 mb-4">
        <h1 className="text-3xl mb-4 text-center">Register</h1>
        <form>
          <Input label="Name" type="text" id="name"  value={data.name} onChange={(e) => onValueChange(e)}/>
          <Input label="Username" type="text" id="username" value={data.username} onChange={(e) => onValueChange(e)}/>
          <Input label="Password" type="password" id="password"  value={data.password} onChange={(e) => onValueChange(e)}/>
		  <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full" onClick={(e) => onRegister(e)}>Register</button>
		  <p className="mt-4 text-center ">
			Already have account? {""}
			<Link href="/Login" className="text-blue-500 hover:underline">Login</Link>
		  </p>
        </form>
      </div>
    </div>

  );
};

export default Register;
