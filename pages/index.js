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
                  Hello! I'm a Cuban Full Stack Developer with 
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
              <span class="sm:ml-3">
                <Link href='/projects' passHref>
                  <button type="button" class="appearance-none inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
          <div className="flex w-full h-1/2 md:w-1/2 md:h-full">
            <span>CV</span>
          </div>
          <div className="flex w-full h-1/2 md:w-1/2 md:h-full">
            <img src='/images/undraw_online_cv_qy9w.svg' className="w-full" />
          </div>
        </div>
        <div className="block md:flex items-center h-screen">
          <div className="flex w-full h-1/2 md:w-1/2 md:h-full">
            <img src='/images/undraw_contact_us_15o2.svg' className="w-full" />
          </div>
          <div className="flex w-full h-1/2 md:w-1/2 md:h-full">
            <span>Contact</span>
          </div>          
        </div>
      </>
    </Layout>
  )
};
