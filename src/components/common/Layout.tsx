import React from 'react';
import Header from '../header/header';
import { Footer } from '../footer/Footer';


interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow flex flex-col">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10 flex-grow">
          <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
            {children}
          </div>
        </div>
      </main>
      <footer className="mt-auto">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          <div className='py-5'>
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
