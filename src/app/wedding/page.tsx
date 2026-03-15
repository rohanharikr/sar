import Link from "next/link";

export default function Wedding() {
    return (
        <div className="flex flex-col justify-center items-center text-xl sm:text-2xl relative z-10 min-h-screen">
            <div className="relative flex flex-col items-center max-w-xl w-full py-16 sm:py-24 px-4 sm:px-8">

                <p className="italic tracking-widest z-10">
                    Together with their families
                </p>

                <div className="flex flex-col items-center gap-6 my-14">
                    <h1 className="text-5xl sm:text-7xl z-10">Rahul</h1>
                    <img
                        src="/rings.png"
                        className="-my-8 sm:-my-12 w-48 sm:w-72"
                    />
                    <h1 className="text-5xl sm:text-7xl z-10">Sandra</h1>
                </div>

                <p className="text-center italic tracking-widest leading-10">
                    invite you to join them in the celebration of their marriage
                </p>

                <p className="tracking-widest uppercase mt-12">
                    Sunday 3<sup className="lowercase">rd</sup> May 2026
                </p>

                <p className="mt-3 tracking-widest">
                    between 11:57am and 12:19pm
                </p>

                <div className="flex gap-4 sm:gap-8 uppercase text-sm tracking-widest mt-6 text-black/65 underline">
                    <a href="data:text/calendar;charset=utf-8,BEGIN%3AVCALENDAR%0AVERSION%3A2.0%0APRODID%3A-//Wedding//EN%0ABEGIN%3AVEVENT%0ADTSTART%3A20260503T062700Z%0ADTEND%3A20260503T064900Z%0ASUMMARY%3ARahul %26 Sandra's Wedding%0ALOCATION%3AHeartland Convention Center%2C Chalakudy%2C Kerala%0AEND%3AVEVENT%0AEND%3AVCALENDAR" download="rahul-sandra-wedding.ics">Apple Calendar</a>
                    <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Rahul+%26+Sandra%27s+Wedding&dates=20260503T062700Z/20260503T064900Z&location=Heartland+Convention+Center%2C+Chalakudy%2C+Kerala" target="_blank">Google Calendar</a>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.!2d76.33!3d10.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHeartland+Convention+Center!5e0!3m2!1sen!2sin!4v1"
                    className="mt-16 w-full max-w-md h-56 rounded-sm border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <p className="italic text-center tracking-widest leading-relaxed mt-6">
                    Heartland Convention Center, Chalakudy, Keralam
                </p>
                <div className="flex gap-4 sm:gap-8 mt-6 uppercase text-sm tracking-widest text-black/65 underline">
                    <a href="https://maps.app.goo.gl/98ZJT5wKz2PSG6Mk7" target="_blank">Directions</a>
                    <a href="https://www.keralatourism.org/" target="_blank">Explore Keralam</a>
                </div>

                <Link href="/" className="mt-16 text-sm uppercase tracking-widest text-black/50 underline hover:text-black transition-colors">
                    Back
                </Link>
            </div>
        </div>
    );
}
