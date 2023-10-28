import Input from "@/app/components/Input";
import Link from "next/link";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center flex-col items-center">
      <div className="bg-white px-16 pt-8 pb-12 mb-4">
        <h1 className="text-3xl mb-4 text-center">Register</h1>
        <form>
          <Input label="Name" type="text" id="name" />
          <Input label="Username" type="text" id="username" />
          <Input label="Password" type="password" id="password" />
		  <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full">Submit</button>
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
