import React from "react";
import Header from "../components/header/header";
// import 'bootstrap/dist/css/bootstrap.css';
import { Providers } from "@/store/provider";



const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Header />
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
