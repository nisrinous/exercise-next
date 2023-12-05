import SideImage from "@/components/SideImage";
import Brand from "@/components/Brand";
import Link from "next/link";

// import { useAuth } from "../stores/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  //   const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      //   await login(email, password);
      toast.success("Log in successful!");
      //   navigate("/product");
    } catch (error) {
      toast.error("" + error);
    }
  };

  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <SideImage src="/image.png" alt="Hand with watch side" />
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="h-100 max-w-sm md:w-full md:mx-5">
            <Brand />
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 ">
              Log In
            </h1>
            <form className="mt-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-[#666]">Email</label>
                <input
                  type="email"
                  value={email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                  placeholder="Your email here.."
                  className="w-full px-4 py-3 rounded-lg mt-2 border"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-[#666]">Password</label>
                <input
                  type="password"
                  value={password}
                  placeholder="Your password here.."
                  className="w-full px-4 py-3 rounded-lg mt-2 border"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="text-right mt-2">
                <a href="#" className="text-sm font-semibold text-[#666]">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full block bg-[#D84727] hover:bg-red-700 text-white font-semibold rounded-lg px-4 py-3 mt-11"
              >
                Log In
              </button>
            </form>
            <div className="my-11 ">
              <p>
                Dont have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="font-semibold cursor-pointer"
                >
                  Sign Up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
