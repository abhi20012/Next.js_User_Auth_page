"use client"



const Profile = () => {
	
	const onLogout = (e) => {
		e.preventDefault();


	}

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center flex-col items-center">
      <div className="bg-white px-16 pt-8 pb-12 mb-4">
        <h1 className="text-3xl mb-4 text-center">Welcome to Home Page</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Voluptatum rem ullam  ipsum quod est vitae </p>
        <button className="bg-red-500 hover:bg-red-700 text-white py-2 mt-4 px-4 rounded-full w-full" onClick={(e) => onLogout(e)}>Logout</button>
      </div>
    </div>

  );
};

export default Profile;
