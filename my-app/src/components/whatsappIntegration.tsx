"use client";
import Image from "next/image";
import whatsappImg from "../images/whatsapp-icon-seeklogo.com.jpg";
function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      "https://wa.me/8200826363",
      "_blank",
      "width=600,height=400,left=200,top=200"
    ); // Replace '1234567890' with your phone number
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "10px",
        bottom: "10px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Image
        src={whatsappImg}
        alt="WhatsApp"
        width={50}
        height={50}
      />{" "}
      {/* Adjust path and dimensions accordingly */}
    </div>
  );
}

export default WhatsAppButton;
