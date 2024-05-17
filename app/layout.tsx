import { Inter } from "next/font/google";
// import Head from 'next/head';
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { ScrollTop } from "primereact/scrolltop";
import { Metadata } from "next";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Chimfwembe's Portfolio",
  description:
    "Showcasing my development and personal skills. Welcome to my portfolio.",
};

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  // const [visible, setVisible] = useState(false);

  return (
    <html>
      <div>
        <body>
          <header className="flex justify-between p-4 bg-gray-200">
            <Button icon="pi pi-bars" />
            header
          </header>
          <main>{children}</main>
          <ScrollTop />
          <footer className="bg-gray-200 p-4 text-center">
            Footer content
          </footer>
        </body>
      </div>
    </html>
  );
};

export default RootLayout;
