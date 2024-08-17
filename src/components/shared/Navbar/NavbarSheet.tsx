"use client";

import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { routes } from './routes';
import NavLink from './NavLink';

export const NavbarSheet = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Hamburger size={32} toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div
          className='fixed top-0 left-0 px-4 w-full flex flex-col gap-7 h-[90vh] mt-[5.5rem] bg-white z-50'
        >
          {routes.map((route) => (
            <NavLink key={route.id} nav={route}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      )}
    </div>
  )
}