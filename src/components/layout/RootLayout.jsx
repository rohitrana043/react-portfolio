import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

function RootLayout() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default RootLayout;
