import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <main className="flex flex-col min-h-screen w-full items-center justify-center relative">
                {/* <img src="main.png" className="w-md absolute -mt-[30rem]"/> */}
                <span className="text-xl italic tracking-widest text-black/65 -mt-10">the wedding of</span>
                <h1 className="text-7xl z-10 mt-6">Rahul&nbsp;&nbsp;&nbsp;&&nbsp;&nbsp;&nbsp;Sandra</h1>
                <div className="my-16 flex flex-row gap-10">
                    <p className="flex flex-col items-center justify-center">
                        <span className="text-4xl">32</span>
                        <span>days</span>
                    </p>
                    <p className="flex flex-col items-center justify-center">
                        <span className="text-4xl">12</span>
                        <span>hours</span>
                    </p>
                    <p className="flex flex-col items-center justify-center">
                        <span className="text-4xl">2</span>
                        <span>minutes</span>
                    </p>
                    <p className="flex flex-col items-center justify-center">
                        <span className="text-4xl">59</span>
                        <span>seconds</span>
                    </p>
                </div>
                <ul className="flex flex-row gap-8 text-xl italic">
                    <li><a href="/" className="text-black/65">view the <span className="font-bold">animated</span> version</a></li>
                    <li><a href="/" className="text-black/65">view the <span className="font-bold">plain</span> version</a></li>
                </ul>
            </main>
        </div>
    );
}
