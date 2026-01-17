import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async ({fullName,email,Password}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://plwc-auth-1tbo.onrender.com/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({fullName,email,Password}),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem("token", data.token);
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://plwc-auth-1tbo.onrender.com/api/user/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem("token", data.token);
      } else {
        setError(data.message || "Signin failed");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, error, signUp, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};