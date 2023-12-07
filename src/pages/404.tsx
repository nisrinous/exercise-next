import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-[#F7F6F4] flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-[#666]">
        <div className="max-w-md">
          <h1 className="text-6xl font-dark font-bold text-[#D84727]">404</h1>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldntt find this page.{" "}
          </p>
          <div className="my-11">
            <p>
              Have an account?{" "}
              <Link href="/auth/login" className="font-semibold cursor-pointer">
                {" "}
                Log In here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
