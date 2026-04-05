export default function Wedding() {
    return (
        <div className="flex flex-col justify-center items-center text-xl sm:text-2xl relative z-10 ">
            <div className="relative flex flex-col items-center max-w-xl w-full pt-8 pb-32 px-4 sm:px-8">

                <p className="italic tracking-widest z-10 opacity-0" style={{ animation: "fade-in-up 0.35s ease forwards" }}>
                    Together with their families
                </p>

                <div className="flex flex-col items-center gap-6 my-14 opacity-0" style={{ animation: "fade-in-up 0.4s ease 0.1s forwards" }}>
                    <h1 className="text-5xl sm:text-7xl z-10">Rahul</h1>
                    <img
                        src="/rings.png"
                        className="-my-8 sm:-my-12 w-48 sm:w-72"
                    />
                    <h1 className="text-5xl sm:text-7xl z-10">Sandra</h1>
                </div>

                <p className="text-center italic tracking-widest leading-10 opacity-0" style={{ animation: "fade-in-up 0.35s ease 0.25s forwards" }}>
                    invite you to join them in the celebration of their marriage
                </p>

                <p className="tracking-widest uppercase mt-12 opacity-0" style={{ animation: "fade-in-up 0.35s ease 0.35s forwards" }}>
                    {/* Sunday 3<sup className="lowercase">rd</sup> May 2026 */}
                    Date TBD
                </p>

                <p className="mt-3 tracking-widest opacity-0" style={{ animation: "fade-in-up 0.35s ease 0.42s forwards" }}>
                    {/* between 11:57am and 12:19pm */}
                    Time TBD
                </p>

                {/* Calendar links: ICS data URI for Apple Calendar, URL for Google Calendar.
                    Update the dates (DTSTART/DTEND), summary, and location for your wedding. */}
                {/* Calendar links hidden until new date is confirmed
                <div className="flex gap-4 sm:gap-8 uppercase text-sm tracking-widest mt-6 text-black/65 underline opacity-0" style={{ animation: "fade-in-up 0.35s ease 0.5s forwards" }}>
                    <a href="data:text/calendar;charset=utf-8,BEGIN%3AVCALENDAR%0AVERSION%3A2.0%0APRODID%3A-//Wedding//EN%0ABEGIN%3AVEVENT%0ADTSTART%3A20260503T062700Z%0ADTEND%3A20260503T064900Z%0ASUMMARY%3ARahul %26 Sandra's Wedding%0ALOCATION%3AHeartland Convention Center%2C Chalakudy%2C Kerala%0AEND%3AVEVENT%0AEND%3AVCALENDAR" download="rahul-sandra-wedding.ics">Apple Calendar</a>
                    <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Rahul+%26+Sandra%27s+Wedding&dates=20260503T062700Z/20260503T064900Z&location=Heartland+Convention+Center%2C+Chalakudy%2C+Kerala" target="_blank">Google Calendar</a>
                </div>
                */}

                <a href="https://maps.app.goo.gl/98ZJT5wKz2PSG6Mk7" target="_blank" className="opacity-0" style={{ animation: "fade-in-up 0.35s ease 0.6s forwards" }}>
                    <img src="/location.png" className="mt-16 w-full max-w-sm rounded-sm" alt="Heartland Convention Center location" />
                </a>
                <p className="italic text-center tracking-widest leading-relaxed mt-6 opacity-0" style={{ animation: "fade-in-up 0.35s ease 0.68s forwards" }}>
                    Heartland Convention Center, Chalakudy, Keralam
                </p>
                <div className="flex gap-4 sm:gap-8 mt-6 uppercase text-sm tracking-widest text-black/65 underline opacity-0" style={{ animation: "fade-in-up 0.35s ease 0.76s forwards" }}>
                    <a href="https://maps.app.goo.gl/98ZJT5wKz2PSG6Mk7" target="_blank">Directions</a>
                    <a href="https://www.keralatourism.org/" target="_blank">Explore Keralam</a>
                </div>


            </div>
        </div>
    );
}
