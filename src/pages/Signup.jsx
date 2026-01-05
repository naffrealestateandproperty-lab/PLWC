import React from "react";
import { Link } from "react-router"
import image from "../assets/images/image-cake-desktop.jpg"
import { useState } from "react";



export default function SignUp(){
     const [user, setUser] = useState({ email: "", FullName: "", Password: "", ConfirmPassword: "" }); 
    const [error, setError] = useState({})
    
    
    const handleChange = (event)=>{
        setUser({...user, [event.target.name] : event.target.value})
        setError({...error, [name]: ""})
    }
    
    const formValidation = ()=>{
        const {email, FullName, Password, ConfirmPassword} = user
        const newErrors = {}

        if(!email) { newErrors.email = "Please provide an email"}
        if(!FullName) { newErrors.FullName = "please provide your full name"}
        if(!Password) { newErrors.password = "Please provide a pasword"}
        if(!ConfirmPassword) { newErrors.ConfirmPassword = " please confirm your password"}

        setError(newErrors)
        return Object.keys(newErrors).length === 0
    }

    
    const handleSubmit = (event)=>{
        event.preventDefault();
        if (!formValidation()) return;
        setError({})
        console.log(user);
        setUser({email : "" ,FullName : "", Password : "", ConfirmPassword : "" })
        
    }

    const renderInput = (label, name, type = "text")=> {
        return <div>
            <label className="block text-xl font-semibold">{label}</label>
            <input id={name} onChange={handleChange} value={user[name]} className="w-full border rounded-md px-2 py-3" name={name} type={type} />
            {error[name] && <p className="text-red-600 mt-1">{error[name]}</p>}
        </div>

    }
    return (
        <div className="flex flex-col lg:flex-row h-screen w-full">
            <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                <Link to="/signin">
                <span className="font-bold text-4xl mb-4">Desserts</span>
                </Link>

                <form onSubmit={handleSubmit} action="" className="space-y-5 max-w-md w-full">
                    <h1 className="text-4xl font-extrabold">REGISTER</h1>
                    <p className="text-lg font-bold">already have an account <span className="underline text-rose-900"><Link to="/signin">Sign in</Link></span></p>
                    {renderInput("Full Name", "FullName",)}
                    {renderInput("Email Address", "email",)}
                    {renderInput("password", "password", "password")}
                    {renderInput("Confirm password", "ConfirmPassword", "password")}
                    <div className="flex lg:flex-row justify-between items-center gap-2">
                        
                        <Link>Forgot Password</Link>
                    </div>
                    <button className="w-full bg-rose-700 text-white font-bold text-lg h-12 rounded-md hover:bg-rose-900">Sign in</button>
                </form>

            </div>
            <div className="hidden lg:block lg:w-1/2">
            <img className="object-cover w-full h-full" src={image} alt="" />

            </div>
        </div>
    )
}