"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@clerk/nextjs';
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Sidebar = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/logo-text.svg"
            alt="logo" width={180} height={28} />
        </Link>

        <nav className="sidebar-nav">
          {userId && 
            <ul className="sidebar-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li 
                    key={link.route} 
                    className={cn("sidebar-nav_element text-gray-700 group", 
                    isActive && "bg-purple-gradient text-white"
                  )}>
                    <Link className='sidebar-link' href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          }
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
