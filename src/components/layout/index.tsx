import Navbar from "../navbar";
import Footer from "../footer";
import { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
