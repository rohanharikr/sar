import Link from "next/link";

export default function Details() {
    return (
        <div className="flex flex-col items-center min-h-screen text-xl sm:text-2xl py-16 sm:py-24 px-4 sm:px-0">
            <div className="flex flex-col items-center w-full gap-16 sm:gap-20">
                <div className="flex flex-col items-center">
                    <h2 className="tracking-widest font-bold uppercase mb-4">Accommodation</h2>
                    <a href="https://share.google/8l1tz1qtfcSldVZSF" target="_blank" className="text-center leading-relaxed text-black/70 underline hover:text-black transition-colors">Sky International</a>
                    <p className="text-center text-black/40 mb-2">~5 min from venue &middot; budget-friendly</p>
                    <a href="https://maps.app.goo.gl/QLQtRva1MuA2QUvS9" target="_blank" className="text-center leading-relaxed text-black/70 underline hover:text-black transition-colors">Cochin Airport Hotel</a>
                    <p className="text-center text-black/40">~45 min from venue &middot; near COK airport</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="tracking-widest font-bold uppercase mb-4">Travel</h2>
                    <p className="text-center leading-relaxed text-black/70">Nearest airport: Kochi (COK)</p>
                    <p className="text-center leading-relaxed text-black/70">~45 min drive to Chalakudy</p>
                    <p className="text-center leading-relaxed text-black/70 mt-2">Nearest railway: Chalakudy station</p>
                    <p className="text-center leading-relaxed text-black/70">~5 min from venue</p>
                    <p className="text-center leading-relaxed text-black/40 mt-3 italic">Cabs available via Uber &amp; Ola</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="tracking-widest font-bold uppercase mb-4">Dress Code</h2>
                    <p className="text-center leading-relaxed text-black/70">Traditional or semi-formal</p>
                    <p className="text-center leading-relaxed text-black/70">Saree, mundu, or kurta preferred</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="tracking-widest font-bold uppercase mb-4">Gifts</h2>
                    <p className="text-center leading-relaxed text-black/70 italic">Your presence is the greatest gift we could ask for</p>
                </div>
            </div>

            <Link href="/" className="mt-16 text-sm uppercase tracking-widest text-black/50 underline hover:text-black transition-colors">
                Back
            </Link>
        </div>
    );
}
