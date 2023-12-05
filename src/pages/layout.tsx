import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

type Layout = {
  children: ReactNode;
};

export default function Layout({ children }: Layout) {
  const router = useRouter();

  if (router.pathname.includes("/auth/login")) return children;
  if (router.pathname.includes("/auth/signup")) return children;

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
