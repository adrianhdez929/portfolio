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
          <div className="flex w-full h-1/2 md:w-1/2 md:h-full">
            <span>About</span>
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
