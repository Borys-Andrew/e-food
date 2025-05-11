import { Outlet } from "react-router-dom";

import { Footer } from "./footer";
import { Header } from "./header";

export const AppLayout = () => {
  return (
    <body>
      <Header />
      <main className="container w-screen border border-teal-500 py-5">
        <Outlet />
      </main>
      <div className="container w-screen">
        <div className="h-10 bg-sky-400" />
      </div>
      <Footer />
    </body>
  );
};
