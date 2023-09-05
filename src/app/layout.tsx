import React from "react";
import Header from "../components/header/header";
import 'react-phone-number-input/style.css'

import { Providers } from "@/store/provider";
import Footer from "@/components/footer";



const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Providers>
      <Header />
        {children}
        </Providers>
        <Footer/>
      </body>
    </html>
  );
};

export default RootLayout;
