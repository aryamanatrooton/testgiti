import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/whatsappIntegration";
import "../styles/globals.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
};

export default Layout;
