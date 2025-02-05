'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

//components
import Nav from './nav';

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== '/404' && (
        <header className="py-8 xl:py-12 text-white">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                VELT<span className="text-accent">.</span>
              </h1>
            </Link>

            {/* desktop nav */}
            <div className="hidden xl:flex items-center gap-8">
              <Nav />
              <Button>Hire me</Button>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden"></div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
