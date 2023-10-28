"use client"
import { useState } from "react";
import Input from "@/app/components/Input";
import Link from "next/link";



const defaultValue = {
	username:"",
	password:""
}

const Login = () => {
	const [data, setData] = useState(defaultValue);

	const onValueChange = (e) => {
		setData({...data, [e.target.name]: e.target.value});
	}

	const onLogin = (e) => {
		e.preventDefault();

		if( !data.username || !data.password){
			alert("Please enter each field");
			return;
		}

		//API call
		
	}
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center flex-col items-center">
      <div className="bg-white px-16 pt-8 pb-12 mb-4">
        <h1 className="text-3xl mb-4 text-center">Login</h1>
        <form>
          <Input label="Username" type="text" id="username" value={data.username} onChange={(e) => onValueChange(e)}/>
          <Input label="Password" type="password" id="password"  value={data.password} onChange={(e) => onValueChange(e)}/>
		  <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full" onClick={(e) => onLogin(e)}>Login</button>
		  <p className="mt-4 text-center ">
			New user? {""}
			<Link href="/Register" className="text-blue-500 hover:underline">Register</Link>
		  </p>
        </form>
      </div>
    </div>

  );
};

export default Login;
