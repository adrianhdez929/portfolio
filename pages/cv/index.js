import Head from 'next/head';

import Layout from "../../components/Layout";
import Skill from "../../components/Skill";


export default function Curriculum() {
    return(
        <Layout>
            <Head>
                <title>CV | Adrian Hernandez</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full">
                <div className="flex flex-col w-full items-center justify-center">
                    <div className="my-3 font-bold text-4xl">
                        <span>Adrian Hernandez</span>    
                    </div>
                    <div className="my-3 font-bold text-4xl">
                        <span>Full Stack Developer</span>
                    </div>
                    <div className="inline-flex my-3">
                        <div className="mx-2">
                            <span>Location: </span>
                            <span>Havana, Cuba</span>                            
                        </div>
                        <div className="mx-2">
                            <span>Age: </span>
                            <span>20</span>
                        </div>
                        <div className="mx-2">
                            <span>Gender: </span>
                            <span>Male</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row border-t w-full">
                    <div className="flex flex-col md:w-1/4 border-r">
                        <div className="mx-2 my-2 text-xl font-bold">
                            <span>Professional Skills</span>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>React</span>
                                <Skill stars={ 3 } color='indigo-600' />
                            </div>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>Redux</span>
                                <Skill stars={ 2 } color='indigo-600' />
                            </div>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>NextJS</span>
                                <Skill stars={ 2 } color='indigo-600' />
                            </div>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>Django</span>
                                <Skill stars={ 4 } color='indigo-600' />
                            </div>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>TailwindCSS</span>
                                <Skill stars={ 3 } color='indigo-600' />
                            </div>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>Scrum</span>
                                <Skill stars={ 2 } color='indigo-600' />
                            </div>
                        </div>
                        <div className="mx-2 my-2 text-xl font-bold">
                            <span>Personal Skills</span>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>Teamwork</span>
                                <Skill stars={ 4 } color='indigo-600' />
                            </div>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>Will to learn</span>
                                <Skill stars={ 5 } color='indigo-600' />
                            </div>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>Empathy</span>
                                <Skill stars={ 4 } color='indigo-600' />
                            </div>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>Commitment</span>
                                <Skill stars={ 4 } color='indigo-600' />
                            </div>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>Problem solving</span>
                                <Skill stars={ 5 } color='indigo-600' />
                            </div>
                        </div>
                        <div className="mx-2 text-xl font-bold">
                            <span>Hobbies</span>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>Gaming</span>
                            </div>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>Reading</span>
                            </div>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>Cooking</span>
                            </div>
                            <div className="flex justify-between ml-3 my-1 text-md font-light">
                                <span>Watch SitComs</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="my-3 mx-5">
                            <div className="font-bold text-3xl my-5">
                                <span>Education</span>
                            </div>
                            <div className="text-xl border rounded-lg mx-4 my-2">
                                <div className="my-1 mx-3">
                                    <span>Bachelor's Degree</span>
                                    <div className="font-ligh text-sm text-gray-400 my-1 mx-5">
                                        <span>2015 - 2018</span>
                                    </div>
                                </div>
                                <div className="inline-flex items-center mx-2 px-2 my-1 py-1">
                                    <div className="text-md text-gray-400 my-1 px-2">
                                        <span>School:</span>
                                    </div>
                                    <div className="mx-2">
                                        <span>
                                            Exact Sciences Vocational Institute - Vladimir I. Lenin
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xl border rounded-lg mx-4 my-2">
                                <div className="my-1 mx-3">
                                    <span>Computer Science Degree</span>
                                    <div className="font-ligh text-sm text-gray-400 my-1 mx-5">
                                        <span>2020 - present</span>
                                    </div>
                                </div>
                                <div className="inline-flex items-center mx-2 px-2 my-1 py-1">
                                    <div className="text-md text-gray-400 my-1 px-2">
                                        <span>School:</span>
                                    </div>
                                    <div className="mx-2">
                                        <span>
                                            University of Havana, School of Maths and Computation
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-3 mx-5">
                            <div className="font-bold text-3xl my-5">
                                <span>Experience</span>
                            </div>
                            <div className="text-xl border rounded-lg mx-4 my-2">
                                <div className="my-1 mx-3">
                                    <span>Junior Developer</span>
                                    <div className="font-ligh text-sm text-gray-400 my-1 mx-5">
                                        <span>2020 - present</span>
                                    </div>
                                </div>
                                <div className="inline-flex items-center mx-2 px-2 my-1 py-1">
                                    <div className="text-md text-gray-400 my-1 px-2">
                                        <span>Organization:</span>
                                    </div>
                                    <div className="mx-2">
                                        <span>
                                            Community cryptocurrency project CrownPlatform
                                        </span>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        <div className="my-3 mx-5">
                            <div className="font-bold text-3xl my-5">
                                <span>Certificates</span>
                            </div>
                            <div className="text-xl border rounded-lg mx-4 my-2">
                                <div className="my-1 mx-3">
                                    <span>Scrum Foundation Professional Certificate</span>
                                    <div className="font-ligh text-sm text-gray-400 my-1 mx-5">
                                        <span>January 2020</span>
                                    </div>
                                </div>
                                <div className="inline-flex items-center mx-2 px-2 my-1 py-1">
                                    <div className="text-md text-gray-400 my-1 px-2">
                                        <span>Given by:</span>
                                    </div>
                                    <div className="mx-2">
                                        <span>
                                            CertiProf
                                        </span>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
