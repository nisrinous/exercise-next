import SideImage from "@/components/SideImage";
import Brand from "@/components/Brand";
import Link from "next/link";

// import { useAuth } from "../stores/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        // await register(name, email, password);
        toast.success("Log in successful!");
        // navigate("/auth/login");
      } else {
        throw new Error("Password doesn't match");
      }
    } catch (error) {
      toast.error("" + error);
    }
  };

  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <SideImage src="/image.png" alt="Hand with watch side" />
        <div className="bg-white px-0 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 h-screen flex items-center justify-center">
          <div className="h-100 max-w-sm md:w-full md:mx-5">
            <Brand />
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Sign Up
            </h1>
            <form className="mt-6" onSubmit={handleRegister}>
              <div className="mt-6">
                <label className="block ">Full Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Your full name here.."
                  className="w-full px-4 py-3 rounded-lg mt-2 border"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mt-6">
                <label className="block ">Email</label>
                <input
                  type="email"
                  value={email}
                  placeholder="Your email here.."
                  className="w-full px-4 py-3 rounded-lg mt-2 border"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mt-6">
                <label className="block ">Password</label>
                <input
                  type="password"
                  value={password}
                  placeholder="Your password here.."
                  className="w-full px-4 py-3 rounded-lg mt-2 border"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mt-6">
                <label className="block ">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  placeholder="Confirmation password.."
                  className="w-full px-4 py-3 rounded-lg mt-2 border"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full block bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-4 py-3 mt-11"
              >
                Sign Up
              </button>
            </form>
            <div className="my-11">
              <p>
                Have an account?{" "}
                <Link
                  href="/auth/login"
                  className="font-semibold cursor-pointer"
                >
                  {" "}
                  Log In here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
