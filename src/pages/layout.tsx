import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "@/store/store";

type Layout = {
  children: React.ReactNode;
};

export default function Layout({ children }: Layout) {
  const router = useRouter();

  if (router.pathname.includes("/auth/login")) return children;
  if (router.pathname.includes("/auth/signup")) return children;

  return (
    <Provider store={store}>
      <div className="flex flex-col items-center justify-center">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </Provider>
  );
}
