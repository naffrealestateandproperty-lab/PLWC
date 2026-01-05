import React, { useState } from "react";
import { Link } from "react-router"
import image from "../assets/images/image-cake-desktop.jpg"

const initialFormState = { email: "", password: ""};

export default function SignIn(){
    const [ formData, setFormData ] = useState(initialFormState)
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = ({ target:{ name, value}})=>{setFormData((prev)=>({...prev,[name]: value}));
    setErrors((prev)=>({...prev,[name]:""}));
};

    const validateForm = () =>{
        const newErrors = {};
        if (!formData.email.trim())
            newErrors.email = "Email is required";
        if (!formData.password.trim())
            newErrors.password = "password is required";
        if (formData.password && formData.password.length < 6) {
            newErrors.password = "password must be at least 6 characters";
        }
        setErrors(newErrors);
        return object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) return;
        setSubmitError("");
        setFormData(initialFormState)
        console.log("sign in Data:", formData);
        setLoading(true)
    };

    const renderInput = (label, name, type = "text")=> {
        return <div>
            <label className="block text-xl font-semibold">{label}</label>
            <input value={formData[name]} onChange={handleChange} className="w-full border rounded-md px-2 py-3" name={name} type={type} />
            {errors[name] && <p className="text-red-600 font-semibold mb-3">{errors[name]}</p>}
        </div>

    }
    return (
        <div className="flex flex-col lg:flex-row h-screen w-full">
            <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                <Link to="/signup">
                <span className="font-bold text-4xl mb-4">Desserts</span>
                </Link>
                 {submitError && <p className="text-red-600 font-semibold mb-3">{submitError}</p>}
                <form onSubmit={handleSubmit} className="space-y-5 max-w-md w-full">
                    <h1 className="text-4xl font-extrabold">Sign in</h1>
                    <p className="text-lg font-bold">welcome back! Don't have an account? <span className="underline text-rose-900"><Link to="/signup">Sign Up</Link></span></p>
                    {renderInput("Email Address", "email", "email")}
                    {renderInput("password", "password", "password")}
                    <div className="flex lg:flex-row justify-between items-center gap-2">
                        <div>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="Remember me">Remember me</label>
                        </div>
                        <Link>Forgot Password</Link>
                    </div>
                    <button className="w-full bg-rose-700 text-white font-bold text-lg h-12 rounded-md hover:bg-rose-900">{loading ? "Signing in" : "sign in"}</button>
                </form>

            </div>
            <div className="hidden lg:block lg:w-1/2">
            <img className="object-cover w-full h-full" src={image} alt="" />

            </div>
        </div>
    )
}