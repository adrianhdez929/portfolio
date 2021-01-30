import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className="block md:flex items-center h-screen mb-5">
          <div className="flex justify-center w-full lg:absolute lg:left-0 h-1/2 md:w-1/2 md:h-full">
            <div className="text-center md:text-left">
              <div className="text-center font-extrabold mt-5 md:mt-24">
                <span className="block text-4xl sm:text-5xl md:text-6xl">About Me</span>
                <span className="block text-blue-900 text-3xl sm:text-4xl md:text-5xl">Full Stack Developer</span>
              </div>
              <div className="text-center font-bold mt-4 mb-3 mx-5">
                <span className="block text-gray-400 text-xl sm:text-2xl md:text-3xl">
                  Hello! I'm 
                  <span className="text-gray-700"> Adrian Hernandez</span>
                  , a Cuban Full Stack Developer with 
                  <span className="text-blue-400"> ReactJS</span>, 
                  <span className="text-gray-900"> NextJS</span> and 
                  <span className="text-green-600"> Django</span>,
                  that loves constant learning and self-improvement. 
                </span>
                <span className="block text-gray-400 text-xl sm:text-2xl md:text-3xl">
                  I also like reading, cryptocurrencies and cooking, but generally everything that represents
                   a challenge to me.
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:absolute lg:right-0 h-1/2 md:w-1/2 md:h-full">
            <img src='/images/undraw_coding_6mjf.svg' className="w-full" />
          </div>
        </div>
        <div className="block md:flex items-center h-screen">
          <div className="flex w-full items-center justify-center lg:absolute lg:right-0 h-1/2 md:w-1/2 md:h-full">
            <div className="text-center md:text-left">
              <div className="text-center font-extrabold md:mt-24">
                <span className="block text-4xl sm:text-5xl md:text-6xl">Come and see</span>
                <span className="block text-blue-900 text-3xl sm:text-4xl md:text-5xl">my projects so far</span>
              </div>
              <div className="text-center font-bold mt-24 mb-3 mx-5">
                <span className="sm:ml-3">
                  <Link href='/projects' passHref>
                    <button type="button" className="appearance-none inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      My Projects
                    </button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:absolute lg:left-0 h-1/2 md:w-1/2 md:h-full">
            <img src='/images/undraw_project_completed_w0oq.svg' className="w-full" />
          </div>          
        </div>
        <div className="block md:flex items-center h-screen">
          <div className="flex w-full items-center justify-center lg:absolute lg:left-0 h-1/2 md:w-1/2 md:h-full">
            <div className="text-center md:text-left">
              <div className="text-center font-extrabold md:mt-24">
                <span className="block text-4xl sm:text-5xl md:text-6xl">Take a look</span>
                <span className="block text-blue-900 text-3xl sm:text-4xl md:text-5xl">to my Curriculum</span>
              </div>
              <div className="text-center font-bold mt-24 mb-3 mx-5">
                <span className="sm:ml-3">
                  <Link href='/cv' passHref>
                    <button type="button" className="appearance-none inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      My CV
                    </button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full h-1/2 lg:absolute lg:right-0 md:w-1/2 md:h-full">
            <img src='/images/undraw_online_cv_qy9w.svg' className="w-full" />
          </div>
        </div>
        <div className="block md:flex items-center h-screen">          
          <div className="flex w-full items-center justify-center h-1/2 lg:absolute lg:right-0 md:w-1/2 md:h-full">
          <div className="text-center md:text-left">
              <div className="text-center font-extrabold md:mt-24">
                <span className="block text-4xl sm:text-5xl md:text-6xl">Contact me</span>
              </div>
              <div className="text-center font-bold mt-12 mx-5">
                <span className="sm:ml-3 mx-2">
                  <a href="https://twitter.com/ahdez929" passHref>
                    <button type="button" className="appearance-none inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                      </svg>
                    </button>
                  </a>
                </span>
                <span className="sm:ml-3 mx-2">
                  <a href="https://www.linkedin.com/in/adrian-hernandez-719271175/" passHref>
                    <button type="button" className="appearance-none inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </button>
                  </a>
                </span>
                <span className="sm:ml-3 mx-2">
                  <a href="https://github.com/adrianhdez929" passHref>
                    <button type="button" className="appearance-none inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                      </svg>
                    </button>
                  </a>
                </span>
                <span className="sm:ml-3 mx-2">
                  <a href="mailto:adrianhdez929@gmail.com">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full h-1/2 lg:absolute lg:left-0 md:w-1/2 md:h-full">
            <img src='/images/undraw_contact_us_15o2.svg' className="w-full" />
          </div>
        </div>
      </>
    </Layout>
  )
};
