import React, { createRef, useEffect, useState } from 'react';
import { Transition } from '@tailwindui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Navbar(props) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return(
    <>
        <nav className="relative w-full flex items-center bg-gray-100 h-16">
            <div className="flex items-center justify-between mx-3 w-full md:w-auto">
                <div className="text-indigo-700 px-5 text-2xl font-bold">
                    <Link href="/">Portfolio</Link>
                </div>
                <div className="md:hidden">
                    <div className="-mr-2 flex items-center md:hidden">
                        <button type="button" className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true"
                            onClick={ () => setIsOpen(!isOpen) }
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>         
            <div className="hidden md:flex items-center justify-center px-3 mx-5">
                <div 
                    className={ (router.pathname === '/projects' ? "text-indigo-700" : "text-gray-900 hover:text-indigo-700") + " px-5 text-lg font-bold" }                    
                >
                    <Link href="/projects">Projects</Link>
                </div>
                <div 
                    className={ (router.pathname === '/cv' ? "text-indigo-700" : "text-gray-900 hover:text-indigo-700") + " px-5 text-lg font-bold" }                    
                >
                    <Link href="/cv">Curriculum</Link>
                </div>
                <div 
                    className={ (router.pathname === '/blog' ? "text-indigo-700" : "text-gray-900 hover:text-indigo-700") + " px-5 text-lg font-bold" }                    
                >
                    <Link href="/blog">Blog</Link>
                </div>
            </div>
            <Transition
                show={ isOpen }
            >
                <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div></div>
                            <div className="-mr-2">
                                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    onClick={ () => setIsOpen(!isOpen) }
                                >
                                <span className="sr-only">Close main menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                                <div className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">
                                    <Link href="/projects">Projects</Link>
                                </div>
                                <div className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">
                                    <Link href="/cv">Curriculum</Link>
                                </div>
                                <div className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">
                                    <Link href="/blog">Blog</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </nav>
    </>
    );
};
