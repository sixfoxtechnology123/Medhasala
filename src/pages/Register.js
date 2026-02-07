import { useState } from "react";
import axios from "axios";


const Register = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const register = async () => {
await axios.post("http://localhost:5000/api/auth/register", {
name,
email,
password
});


alert("Registered Successfully");
};


return (
<div className="h-screen flex justify-center items-center">
<div className="bg-white p-6 rounded shadow w-80">
<h2 className="text-xl font-bold mb-4">Register</h2>


<input className="border p-2 w-full mb-2" placeholder="Name" onChange={e=>setName(e.target.value)} />
<input className="border p-2 w-full mb-2" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
<input className="border p-2 w-full mb-4" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />


<button className="bg-green-600 text-white w-full p-2 rounded" onClick={register}>
Register
</button>
</div>
</div>
);
};


export default Register;