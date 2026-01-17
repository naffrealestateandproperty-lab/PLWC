import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import image from "../assets/images/image-cake-desktop.jpg";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

export default function SignUp() {
  const [user, setUser] = useState({ email: "", fullName: "", password: "", confirmPassword: "" });
  const [error, setError] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    setError({ ...error, [event.target.name]: "" });
  };

  const formValidation = () => {
    const { email, fullName, password, confirmPassword } = user;
    const newErrors = {};

    if (!email) newErrors.email = "Please provide an email";
    if (!fullName) newErrors.fullName = "Please provide your full name";
    if (!password) newErrors.password = "Please provide a password";
    if (!confirmPassword) newErrors.confirmPassword = "Please confirm your password";
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formValidation()) return;

    setError({});
    setSubmitError("");
    setLoading(true);

    try {
      const { fullName, email, password } = user;
      await signUp({ fullName, email, Password: password });
      toast.success("Signup successful");
      setUser({ email: "", fullName: "", password: "", confirmPassword: "" });
      navigate("/");
    } catch (error) {
      setSubmitError(error.message || "Signup failed");
      toast.error("Signup failed, try again");
    } finally {
      setLoading(false);
    }
  };

  const renderInput = (label, name, type = "text") => (
    <div>
      <label className="block text-xl font-semibold">{label}</label>
      <input
        id={name}
        onChange={handleChange}
        value={user[name]}
        className="w-full border rounded-md px-2 py-3"
        name={name}
        type={type}
      />
      {error[name] && <p className="text-red-600 mt-1">{error[name]}</p>}
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
        <Link to="/">
          <span className="font-bold text-4xl mb-4">Desserts</span>
        </Link>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-md w-full">
          <h1 className="text-4xl font-extrabold">REGISTER</h1>
          <p className="text-lg font-bold">
            Already have an account{" "}
            <span className="underline text-rose-900">
              <Link to="/signin">Sign in</Link>
            </span>
          </p>
          {renderInput("Full Name", "fullName")}
          {renderInput("Email Address", "email", "email")}
          {renderInput("Password", "password", "password")}
          {renderInput("Confirm Password", "confirmPassword", "password")}
          <div className="flex lg:flex-row justify-between items-center gap-2">
            <Link>Forgot Password</Link>
          </div>
          <button className="w-full bg-rose-700 text-white font-bold text-lg h-12 rounded-md hover:bg-rose-900">
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <img className="object-cover w-full h-full" src={image} alt="" />
      </div>
    </div>
  );
}