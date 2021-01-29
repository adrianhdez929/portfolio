import Head from 'next/head';

import Layout from '../components/Layout';


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className="block md:flex items-center h-screen">
          <div className="flex justify-center w-full h-1/2 md:w-1/2 md:h-full">
            <div className="text-center md:text-left">
              <div className="text-center font-extrabold mt-24">
                <span className="block text-4xl sm:text-5xl md:text-6xl">About Me </span>
                <span className="block text-blue-900 text-3xl sm:text-4xl md:text-5xl">Full Stack Developer</span>
              </div>
              <div className="text-center font-bold mt-12">
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
          <div className="flex w-full h-1/2 md:w-1/2 md:h-full">
            <img src='/images/undraw_coding_6mjf.svg' className="w-full" />
          </div>
        </div>
        <div className="block md:flex items-center h-screen">
          <div className="flex w-full h-1/2 md:w-1/2 md:h-full">
            <img src='/images/undraw_project_completed_w0oq.svg' className="w-full" />
          </div>
          <div className="flex w-full h-1/2 md:w-1/2 md:h-full">
            <span>Projects</span>
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
