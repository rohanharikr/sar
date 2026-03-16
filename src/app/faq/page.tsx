export default function FAQ() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center text-xl sm:text-2xl pt-10 pb-32 px-4 sm:px-0">
            <div className="flex flex-col items-center w-full max-w-2xl mx-auto mb-10 sm:mb-14">
                <div className="w-full space-y-6">
                    <div className="opacity-0" style={{ animation: "fade-in-up 0.5s ease forwards" }}>
                        <p className="font-medium">Where can we stay?</p>
                        <p className="text-black/70 mt-1 text-lg sm:text-xl">
                            <a href="https://share.google/8l1tz1qtfcSldVZSF" target="_blank" className="underline hover:text-black transition-colors">Sky International</a>
                            <span className="text-black/40"> &middot; ~5 min from venue &middot; budget-friendly</span>
                            <br/>
                            <a href="https://maps.app.goo.gl/QLQtRva1MuA2QUvS9" target="_blank" className="underline hover:text-black transition-colors">Cochin Airport Hotel</a>
                            <span className="text-black/40"> &middot; ~45 min from venue &middot; near COK airport</span>
                        </p>
                    </div>
                    <div className="opacity-0" style={{ animation: "fade-in-up 0.5s ease 0.1s forwards" }}>
                        <p className="font-medium">How do we get there?</p>
                        <p className="text-black/70 mt-1 text-lg sm:text-xl">
                            Nearest airport: Kochi (COK) <span className="text-black/40">&middot; ~45 min drive to Chalakudy</span>
                            <br/>
                            Nearest railway: Chalakudy station <span className="text-black/40">&middot; ~5 min from venue</span>
                            <br/>
                            <span className="text-black/40">Uber &amp; Ola cabs are available in the area</span>
                        </p>
                    </div>
                    <div className="opacity-0" style={{ animation: "fade-in-up 0.5s ease 0.2s forwards" }}>
                        <p className="font-medium">Do you provide transportation from Trivandrum?</p>
                        <p className="text-black/70 mt-1 text-lg sm:text-xl">
                            Yes! We&apos;re arranging a coach from Trivandrum.
                            <br/>
                            2<sup className="text-xs align-super">nd</sup> May, 10:00 AM <span className="text-black/40">&middot; please arrive by 9:30 AM</span>
                            <br/>
                            Pickup: <a href="https://share.google/CyTsbzAzNwl7RQXHo" target="_blank" className="underline hover:text-black transition-colors">QRS Pongumoodu</a>
                            <br/>
                            <span className="text-black/40">Contact us below to reserve seats</span>
                        </p>
                    </div>
                    <div className="opacity-0" style={{ animation: "fade-in-up 0.5s ease 0.3s forwards" }}>
                        <p className="font-medium">What should we wear?</p>
                        <p className="text-black/70 mt-1 text-lg sm:text-xl">
                            Sangeeth: Indo-western attire
                            <br/>
                            Wedding: Kerala traditional attire <span className="text-black/40">&middot; saree, mundu, or kurta</span>
                            <br/>
                            Reception: Casual
                            <br/>
                            <span className="text-black/40">May in Kerala is warm and humid (30&ndash;35&deg;C) &mdash; light, breathable fabrics recommended.</span>
                        </p>
                    </div>
                    <div className="opacity-0" style={{ animation: "fade-in-up 0.5s ease 0.4s forwards" }}>
                        <p className="font-medium">Should we bring a gift?</p>
                        <p className="text-black/70 mt-1 text-lg sm:text-xl">Your presence is the greatest gift we could ask for.</p>
                    </div>
                    <div className="opacity-0" style={{ animation: "fade-in-up 0.5s ease 0.5s forwards" }}>
                        <p className="font-medium">Is parking available at the venue?</p>
                        <p className="text-black/70 mt-1 text-lg sm:text-xl">Yes, Heartland Convention Center has ample parking.</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-2xl mx-auto opacity-0" style={{ animation: "fade-in-up 0.5s ease 0.6s forwards" }}>
                <p className="font-medium">Contact</p>
                <a href="mailto:hi@sandraandrahul.com" className="text-black/70 underline hover:text-black transition-colors mt-1 block">hi@sandraandrahul.com</a>
                <p className="text-black/70 mt-1 text-lg sm:text-xl"><a href="https://wa.me/919947888903" target="_blank" className="underline hover:text-black transition-colors">+91 9947888903</a> <span className="text-black/40">&middot; Rajalekshmi & Harikumar (Rahul&apos;s parents)</span></p>
            </div>

            {/* <img src="/hoppers.jpeg" className="mt-10 sm:mt-14 w-full max-w-xs rounded-sm opacity-80" alt="Hoppers" /> */}

        </div>
    );
}
