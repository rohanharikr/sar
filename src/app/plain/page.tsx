const patternSvg = `url("data:image/svg+xml,%3Csvg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='10' fill='%23F7CE76'/%3E%3Crect x='2' width='1' height='10' fill='%23F7CE76'/%3E%3Crect x='4' width='1' height='10' fill='%23F7CE76'/%3E%3Crect x='1' width='1' height='10' fill='%23BE8E2D'/%3E%3Crect x='3' width='1' height='10' fill='%23BE8E2D'/%3E%3Crect x='5' width='1' height='10' fill='%23BE8E2D'/%3E%3Cpath d='M0 4.448H6V3H0V4.448Z' fill='%23B14328'/%3E%3Cpath d='M0.6 5.414H5.4V3.966H0.6V5.414Z' fill='%23B14328'/%3E%3Cpath d='M1.2 6.621H4.8V5.172H1.2V6.621Z' fill='%23B14328'/%3E%3Cpath d='M1.8 7.586H4.2V6.138H1.8V7.586Z' fill='%23B14328'/%3E%3Cpath d='M2.1 8.793H3.9V7.345H2.1V8.793Z' fill='%23B14328'/%3E%3Cpath d='M2.7 10H3.3V8.552H2.7V10Z' fill='%23B14328'/%3E%3C/svg%3E")`;

export default function Plain() {
    return (
        <div className="relative flex flex-col justify-center items-center text-2xl">
            <div className="w-full z-20" style={{ height: 20, backgroundImage: patternSvg, backgroundRepeat: "repeat-x", backgroundSize: "12px 20px" }} />
            <ul className="flex flex-col items-end gap-2 text-xl italic fixed bottom-10 right-10">
                {/* <li><a href="/" className="text-black/65"><span className="font-bold">rsvp</span></a></li> */}
                {/* <li><a href="/" className="text-black/65">go <span className="font-bold">home</span></a></li> */}
                {/* <li><a href="/rsvp" className="text-black/65"><span className="font-bold">~ RSVP ~</span></a></li> */}
                <li><a href="/animated" className="text-black/65">view the <span className="font-bold">animated</span> version</a></li>
                {/* <li><a href="/" className="text-black/65">download <span className="font-bold">wedding invitation pdf</span></a></li>
                <li><a href="/plain" className="text-black/65">view the <span className="font-bold">plain</span> version</a></li> */}
            </ul>
            <div className="flex flex-col items-center max-w-xl w-full py-16 px-8">
                {/* Couple illustration */}
                <img
                    src="plain-main.png"
                    className="-mt-20"
                />

                {/* Together with their families */}
                <p className="italic tracking-widest -mt-6 z-10">
                    Together with their families
                </p>

                {/* Names */}
                <div className="flex flex-col items-center gap-6 my-14">
                    <h1 className="text-7xl z-10">Rahul</h1>
                    <img
                        src="rings.png"
                        className="-my-12 w-72"
                    />
                    <h1 className="text-7xl z-10">Sandra</h1>
                </div>

                {/* Invitation line */}
                <p className="text-center italic tracking-widest leading-10">
                    invite you to join them in the celebration of their marriage
                </p>

                {/* Date */}
                <p className="tracking-widest uppercase mt-12">
                    Sunday 3<sup className="lowercase">rd</sup> May 2026
                </p>

                {/* Time */}
                <p className="mt-3 tracking-widest">
                    between 11:57am and 12:19pm
                </p>

                <div className="flex gap-8 uppercase text-sm tracking-widest mt-6 text-black/65 underline">
                    <a href="data:text/calendar;charset=utf-8,BEGIN%3AVCALENDAR%0AVERSION%3A2.0%0APRODID%3A-//Wedding//EN%0ABEGIN%3AVEVENT%0ADTSTART%3A20260503T062700Z%0ADTEND%3A20260503T064900Z%0ASUMMARY%3ARahul %26 Sandra's Wedding%0ALOCATION%3AHeartland Convention Center%2C Chalakudy%2C Kerala%0AEND%3AVEVENT%0AEND%3AVCALENDAR" download="rahul-sandra-wedding.ics">Apple Calendar</a>
                    <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Rahul+%26+Sandra%27s+Wedding&dates=20260503T062700Z/20260503T064900Z&location=Heartland+Convention+Center%2C+Chalakudy%2C+Kerala" target="_blank">Google Calendar</a>
                </div>

                <img
                    src="location.png"
                    className="mt-16"
                />
                {/* Venue */}
                <p className="italic text-center tracking-widest leading-relaxed mt-6">
                    Heartland Convention Center, Chalakudy, Keralam
                </p>
                <div className="flex gap-8 mt-6 uppercase text-sm tracking-widest text-black/65 underline">
                    <a href="https://maps.app.goo.gl/98ZJT5wKz2PSG6Mk7" target="_blank">Directions</a>
                    <a href="https://www.keralatourism.org/" target="_blank">Explore Keralam</a>
                </div>

                {/* Events Timeline */}
                <div className="mt-24 flex flex-col items-center w-full z-10">
                    <h2 className="tracking-widest font-bold uppercase mb-10">Events</h2>

                    {/* 1st May group */}
                    <div className="relative w-full max-w-xs">
                        <div className="absolute left-1/2 -translate-x-1/2 top-[166px] bottom-[36px] w-px bg-black" />

                        {/* Sangeeth - Right */}
                        <div className="relative flex pb-10">
                            {/* 1st May diagonal label */}
                            <p className="absolute whitespace-nowrap top-[40px] left-0">1<sup className="text-xs">st</sup> May</p>
                            <svg className="absolute left-[80px] top-[52px]" width="80" height="114" fill="none">
                                <line x1="0" y1="0" x2="80" y2="114" stroke="black" strokeOpacity="1" strokeDasharray="4 4" strokeWidth="2" />
                            </svg>
                            <div className="w-1/2" />
                            <div className="absolute left-1/2 -translate-x-1/2 top-[156px] w-5 h-5 rounded-full bg-black z-10 border-4 border-white" />
                            <div className="w-1/2 pl-5 flex flex-col items-center pt-[50px]">
                                <img src="sangeeth.png" className="w-auto h-24 mb-1" />
                                <p className="font-medium italic">Sangeeth</p>
                                <p className="text-xl text-black/50">5:30pm</p>
                            </div>
                        </div>

                        {/* Dinner - Left */}
                        <div className="relative flex">
                            <div className="w-1/2 pr-5 flex flex-col items-center">
                                <img src="first-dinner.png" className="w-auto h-24 mb-1" />
                                <p className="font-medium italic">Dinner</p>
                                <p className="text-xl text-black/50">7:30pm</p>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 top-[106px] w-5 h-5 rounded-full bg-black z-10 border-4 border-white" />
                            <div className="w-1/2" />
                        </div>
                    </div>

                    {/* 3rd May group */}
                    <div className="relative w-full max-w-xs mt-16">
                        <div className="absolute left-1/2 -translate-x-1/2 top-[166px] bottom-[36px] w-px bg-black" />

                        {/* Muhurtham - Right */}
                        <div className="relative flex pb-10">
                            {/* 3rd May diagonal label */}
                            <p className="absolute whitespace-nowrap top-[40px] left-0">3<sup className="text-xs">rd</sup> May</p>
                            <svg className="absolute left-[80px] top-[52px]" width="80" height="114" fill="none">
                                <line x1="0" y1="0" x2="80" y2="114" stroke="black" strokeOpacity="1" strokeDasharray="4 4" strokeWidth="2" />
                            </svg>
                            <div className="w-1/2" />
                            <div className="absolute left-1/2 -translate-x-1/2 top-[156px] w-5 h-5 rounded-full bg-black z-10 border-4 border-white" />
                            <div className="w-1/2 pl-5 flex flex-col items-center pt-[50px]">
                                <img src="muhurtham.png" className="w-auto h-24 mb-1" />
                                <p className="font-medium italic">Muhurtham</p>
                                <p className="text-xl text-black/50">11:57am</p>
                            </div>
                        </div>

                        {/* Lunch - Left */}
                        <div className="relative flex pb-10">
                            <div className="w-1/2 pr-5 flex flex-col items-center">
                                <img src="lunch.png" className="w-auto h-20 mb-1" />
                                <p className="font-medium italic">Lunch</p>
                                <p className="text-xl text-black/50">12:45pm</p>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 top-[106px] w-5 h-5 rounded-full bg-black z-10 border-4 border-white" />
                            <div className="w-1/2" />
                        </div>

                        {/* Photos - Right */}
                        <div className="relative flex pb-10">
                            <div className="w-1/2" />
                            <div className="absolute left-1/2 -translate-x-1/2 top-[106px] w-5 h-5 rounded-full bg-black z-10 border-4 border-white" />
                            <div className="w-1/2 pl-5 flex flex-col items-center">
                                <img src="photos.png" className="w-auto h-24 mb-1" />
                                <p className="font-medium italic">Photos</p>
                                <p className="text-xl text-black/50">1:30pm</p>
                            </div>
                        </div>

                        {/* Reception - Left */}
                        <div className="relative flex pb-10">
                            <div className="w-1/2 pr-5 flex flex-col items-center">
                                <img src="reception.png" className="w-auto h-32 mb-1" />
                                <p className="font-medium italic">Reception</p>
                                <p className="text-xl text-black/50">7:30pm</p>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 top-[106px] w-5 h-5 rounded-full bg-black z-10 border-4 border-white" />
                            <div className="w-1/2" />
                        </div>

                        {/* Dinner - Right */}
                        <div className="relative flex">
                            <div className="w-1/2" />
                            <div className="absolute left-1/2 -translate-x-1/2 top-[106px] w-5 h-5 rounded-full bg-black z-10 border-4 border-white" />
                            <div className="w-1/2 pl-5 flex flex-col items-center">
                                <img src="second-dinner.png" className="w-auto h-24 mb-1" />
                                <p className="font-medium italic">Dinner</p>
                                <p className="text-xl text-black/50">8pm</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 mb-14 z-10">
                    <span className="italic">With best compliments from</span>
                    <p className="text-center mt-4 leading-10">Aatmika, Abhinav, Abhishek,<br />Rohan, Sanjay</p>
                </div>

                {/* Sanskrit verse */}
                <img src="temple.png" className="w-2xl absolute bottom-12 z-0 opacity-10 ml-3 pointer-events-none" />
                <p className="text-center text-[#B14328] leading-relaxed z-10 mt-32">
                    "Samāno mantraḥ samitiḥ samānī…"
                </p>
                <p className="text-center text-[#B14328] mt-2 z-10 mb-32">
                    — Rig Veda 10.191.2
                </p>
            </div>
            <div className="w-full rotate-180" style={{ height: 20, backgroundImage: patternSvg, backgroundRepeat: "repeat-x", backgroundSize: "12px 20px" }} />
        </div>
    );
}
