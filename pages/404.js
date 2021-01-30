import Link from "next/link";


export default function Page404() {
    return(
        <>
            <div className="flex items-center justify-center w-full mt-24">
                <img src="/images/undraw_page_not_found_su7k.svg" className="w-1/2 h-1/2" />
            </div>
            <div className="text-center font-bold text-4xl mt-12">
                <span className="block mb-2">Sorry, we can't find what you are looking for</span>
                <span className="text-indigo-600 hover:text-indigo-900"><Link href="/">Go to Home</Link></span>
            </div>
        </> 
    );
}