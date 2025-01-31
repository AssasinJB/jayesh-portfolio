import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};