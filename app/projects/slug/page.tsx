"use client"; // Add this line at the top

import { SpeedDial } from 'primereact/speeddial';
import Image from 'next/image';
import RootLayout from '../../layout';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { MenuItem } from 'primereact/menuitem';



const ProjectDetails: React.FC = () => {
  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-nogutter p-2 surface-0 text-800">
          <div className="p-6 text-center md:text-left flex align-items-center">
            <section>        
              <span className="block text-6xl font-bold mb-1">
               Skills
              </span>
              <div className="text-6xl text-primary font-bold mb-3">
                your visitors deserve to see
              </div>
              <p className="mt-0 mb-4 text-700 line-height-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>              
       
              <Button
                label="Learn More"
                type="button"
                className="mr-3 p-button-raised"
              />
              <Button
                label="Live Demo"
                type="button"
                className="p-button-outlined"
              />
            </section>
          </div>
          <div className="col-12 md:col-6 overflow-hidden">
            <Image
              src="/next.svg"
              alt="hero-1"
              className="md:ml-auto block md:h-full"
              style={{ clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" }}
              width={500} // Adjust width according to your image
              height={500} // Adjust height according to your image
            />
          </div>
        </div>

        <div className="w-full  surface-0 text-center">
          <div className="mb-3 font-bold text-3xl">
            <span className="text-900">One Product, </span>
            <span className="text-blue-600">Many Solutions</span>
          </div>
          <div className="text-700 mb-6">
            Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4  p-4">
            <div className=" mb-4 px-5">
              <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-desktop text-4xl text-blue-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">Built for Developers</div>
              <span className="text-700 line-height-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </span>
            </div>
            <div className="mb-4 px-5">
              <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-lock text-4xl text-blue-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">End-to-End Encryption</div>
              <span className="text-700 line-height-3">
                Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.
              </span>
            </div>
            <div className="mb-4 px-5">
              <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-check-circle text-4xl text-blue-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">Easy to Use</div>
              <span className="text-700 line-height-3">
                Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.
              </span>
            </div>     
          </div>
        </div>     
      </main>     
    </RootLayout>
  );
};

export default ProjectDetails;
