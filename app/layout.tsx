import { Inter } from "next/font/google";
import Head from 'next/head';
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { ScrollTop } from "primereact/scrolltop";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./globals.css";


interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  // const [visible, setVisible] = useState(false);

  return (
    <html>     
        <body>         
          <main>{children}</main>                   
          <ScrollTop />
        </body>         
    </html>
  );
};

export default RootLayout;
