import React from "react";
import Header from "./components/header/header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
