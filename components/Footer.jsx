import React from 'react';

export default function Footer() {
    return(
	<footer className="w-full h-28 bg-gray-200 relative flex items-center justify-between">
        <div className="mx-12 px-5 w-auto flex flex-col items-center justify-center text-gray-500">
            <div><span>&copy; 2021 - Adrian Hernandez</span></div>
            <div><span>adrianhdez929@gmail.com</span></div>
        </div>
        <div className="mx-5 px-5 inline-flex items-center w-auto">
            <div className="mx-2 text-gray-700 hover:text-gray-400">
                <a href="#">Github</a>
            </div>
            <div className="mx-2 text-gray-700 hover:text-gray-400">
                <a href="#">Twitter</a>
            </div>
            <div className="mx-2 text-gray-700 hover:text-gray-400">
                <a href="#">LinkedIn</a>
            </div>
        </div>
	</footer>
    );
}

