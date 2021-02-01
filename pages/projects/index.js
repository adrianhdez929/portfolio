import Head from 'next/head';

import Layout from '../../components/Layout';


export default function Projects() {
    return(
        <Layout>
            <Head>
                <title>Projects | Adrian Hernandez</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            { /* TODO: Fix screen heights after page finished */ }
            <div className="flex w-full">
                <div className="flex w-1/4">
                </div>
                <div className="flex flex-col w-full">
                    <div className="my-5">
                        <div className="font-bold text-3xl my-5">
                            <span>Full Stack</span>
                        </div>
                        <div className="text-xl border rounded-lg mx-4">
                            <div className="my-2 mx-3">
                                <a href="https://github.com/adrianhdez929/portfolio/" className="font-bold text-blue-400">
                                    <span>Portfolio / Blog</span>
                                </a>
                            </div>
                            <div className="mx-2 px-2 my-2 py-2">
                                <div className="text-md text-gray-400 my-1">
                                    <span>Description:</span>
                                </div>
                                <span>
                                    My Portfolio website, written using NodeJS, ReactJS and TailwindCSS.
                                    The website also has a blog, with a simple API written in Django.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="font-bold text-3xl my-5">
                            <span>Python</span>
                        </div>
                        <div className="text-xl border rounded-lg mx-4 my-3">
                            <div className="my-2 mx-3">
                                <a href="https://github.com/adrianhdez929/crw-sweeper/" className="font-bold text-blue-400">
                                    <span>Node Rewards Sweeper</span>
                                </a>
                            </div>
                            <div className="mx-2 px-2 my-2 py-2">
                                <div className="text-md text-gray-400 my-1">
                                    <span>Description:</span>
                                </div>
                                <span>
                                    A SystemNodes/Masternodes reward sweeper for the cryptocurrency project CrownPlatform, written
                                    in Python using the PyQt framework for the UI, and PyInstaller to bundle the project on a single
                                    file multiplatform executable. 
                                </span>
                            </div>
                        </div>
                        <div className="text-xl border rounded-lg mx-4 my-3">
                            <div className="my-2 mx-3">
                                <a href="https://github.com/adrianhdez929/crw-sweeper/" className="font-bold text-blue-400">
                                    <span>Network Crawler</span>
                                </a>
                            </div>
                            <div className="mx-2 px-2 my-2 py-2">
                                <div className="text-md text-gray-400 my-1">
                                    <span>Description:</span>
                                </div>
                                <span>
                                    A crawler for the cryptocurrency project CrownPlatform's network. Written in Python, using
                                    built-in concurrency. It is a fork of the Bitcoin network crawler project 
                                    <a href="https://bitnodes.io/" className="font-bold text-blue-400"> Bitnodes</a>. 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
