import Link from "next/link";
import WhatsAppButton from "./whatsappIntegration";

function Navbar() {
  return (
    <>
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/page1">Page1</Link>
        <Link href="/page2">Page2</Link>
        <Link href="/page3">Page3</Link>
        <Link href="/page4">Page4</Link>
          </nav>
          
    </>
  );
}

export default Navbar;
