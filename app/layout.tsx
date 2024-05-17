
import { Inter } from 'next/font/google';
// import Head from 'next/head';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { ScrollTop } from 'primereact/scrolltop';
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

const metadata: Metadata = {
  title: "Chimfwembe's Portfolio",
  description: "Showcasing my development and personal skills. Welcome to my portfolio.",
  icon: "/favicon.ico"
};

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  // const [visible, setVisible] = useState(false);

  return (
    <html>
         <div>
      {/* <Head> */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icon} />
      {/* </Head> */}
     
    
      
        <body>
        <header className="flex justify-between p-4 bg-gray-200">
        <Button icon="pi pi-bars"  />
        header
      </header>
          <main>{children}</main>
          <ScrollTop />
          <footer className="bg-gray-200 p-4 text-center">Footer content</footer>
        </body>        
    </div>
    </html>
  );
};

export default RootLayout;
