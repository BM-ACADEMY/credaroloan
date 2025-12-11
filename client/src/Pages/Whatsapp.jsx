import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../assets/logo.png"; // Make sure to import your logo here

export default function WhatsAppBtn() {
  return (
    <FloatingWhatsApp
      phoneNumber="919791663671" 
      accountName="Credaro" // Your Company Name
      avatar={logo} // Your Logo URL or import
      statusMessage="online"
      chatMessage="Hello! How can we help you!!"
      placeholder="Type a message..."
      
      // Styling
      darkMode={true} // Matches your dark website theme
      allowEsc={true}
      allowClickAway={true}
      notification={true}
      
      // Positioning (Default is bottom-right, but you can adjust inline if needed)
      // style={{ bottom: '30px', right: '30px' }} 
    />
  );
}