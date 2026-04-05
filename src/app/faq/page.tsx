export default function FAQ() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center text-xl sm:text-2xl pt-10 pb-32 px-4 sm:px-0">
            <div className="flex flex-col items-center w-full max-w-2xl mx-auto mb-10 sm:mb-14">
                <div className="w-full space-y-6">
                    <div className="opacity-0" style={{ animation: "fade-in-up 0.35s ease forwards" }}>
                        <p className="font-medium">Where can we stay?</p>
                        <p className="text-black/70 mt-1 text-lg sm:text-xl">
                            <a href="https://share.google/8l1tz1qtfcSldVZSF" target="_blank" className="underline hover:text-black transition-colors">Sky International</a>
                            <span className="text-black/40"> &middot; ~5 min from venue &middot; budget-friendly</span>
                            <br/>
                            <a href="https://maps.app.goo.gl/QLQtRva1MuA2QUvS9" target="_blank" className="underline hover:text-black transition-colors">Cochin Airport Hotel</a>
                            <span className="text-black/40"> &middot; ~45 min from venue &middot; near COK airport</span>
                        </p>
                    </div>
                    <div className="opacity-0" style={{ animation: "fade-in-up 0.35s ease 0.07s forwards" }}>
                        <p className="font-medium">How do we get there?</p>
                        <p className="text-black/70 mt-1 text-lg sm:text-xl">
                            Nearest airport: Kochi (COK) <span className="text-black/40">&middot; ~45 min drive to Chalakudy</span>
                            <br/>
                            Nearest railway: Chalakudy station <span className="text-black/40">&middot; ~5 min from venue</span>
                            <br/>
                            <span className="text-black/40">Uber &amp; Ola cabs are available in the area</span>
                        </p>
                    </div>
                    <div className="opacity-0" style={{ animation: "fade-in-up 0.35s ease 0.14s forwards" }}>
                        <p className="font-medium">Do you provide transportation from Trivandrum?</p>
                        <div className="text-black/70 mt-1 text-lg sm:text-xl">
                            Yes! We&apos;re arranging coaches.
                            <ul className="list-disc list-inside mt-1">
                                {/* <li>From Trivandrum (<a href="https://share.google/CyTsbzAzNwl7RQXHo" target="_blank" className="underline hover:text-black transition-colors">QRS Pongumoodu</a>) &middot; 2<sup className="text-xs align-super">nd</sup> May, 10:00 AM</li> */}
                                <li>From Trivandrum (<a href="https://share.google/CyTsbzAzNwl7RQXHo" target="_blank" className="underline hover:text-black transition-colors">QRS Pongumoodu</a>) &middot; Date &amp; time TBD</li>
                                {/* <li>From Mavelikara &middot; 3<sup className="text-xs align-super">rd</sup> May, 5:30 AM</li> */}
                                <li>From Mavelikara &middot; Date &amp; time TBD</li>
                            </ul>
                            <span className="text-black/40">Please arrive 15 minutes before departure &middot; Contact us below to reserve seats</span>
                        </div>
                    </div>
                    <div className="opacity-0" style={{ animation: "fade-in-up 0.35s ease 0.21s forwards" }}>
                        <p className="font-medium">What should we wear?</p>
                        <p className="text-black/70 mt-1 text-lg sm:text-xl">
                            Sangeeth: Indo-western attire
                            <br/>
                            Wedding: Kerala traditional attire <span className="text-black/40">&middot; saree, mundu, or kurta</span>
                            <br/>
                            Reception: Casual
                            <br/>
                            <span className="text-black/40">May in Kerala is warm and humid (30&ndash;35&deg;C) &mdash; light,<br/>breathable fabrics recommended.</span>
                        </p>
                    </div>
                    <div className="opacity-0" style={{ animation: "fade-in-up 0.35s ease 0.28s forwards" }}>
                        <p className="font-medium">Should we bring a gift?</p>
                        <p className="text-black/70 mt-1 text-lg sm:text-xl">No, your presence is the greatest gift we could ask for!</p>
                    </div>
                    <div className="opacity-0" style={{ animation: "fade-in-up 0.35s ease 0.35s forwards" }}>
                        <p className="font-medium">Is parking available at the venue?</p>
                        <p className="text-black/70 mt-1 text-lg sm:text-xl">Yes, Heartland Convention Center has ample parking.</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-2xl mx-auto opacity-0" style={{ animation: "fade-in-up 0.35s ease 0.42s forwards" }}>
                <p className="font-medium">Contact</p>
                <a href="mailto:hi@sandraandrahul.com" className="text-black/70 underline hover:text-black transition-colors mt-1 block">hi@sandraandrahul.com</a>
                <p className="text-black/70 mt-1 text-lg sm:text-xl"><a href="https://wa.me/919947888903" target="_blank" className="inline-flex items-center gap-1.5 underline hover:text-black transition-colors cursor-pointer"><svg className="w-4 h-4 inline-block" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>+91 9947888903</a> <span className="text-black/40">&middot; Rajalekshmi & Harikumar (Rahul&apos;s parents)</span></p>
            </div>

            <div className="w-full max-w-2xl mx-auto mt-10 sm:mt-14 opacity-0" style={{ animation: "fade-in-up 0.35s ease 0.49s forwards" }}>
                <a href="/wedding-card.pdf" download className="inline-flex items-center gap-1.5 px-6 pt-2.5 pb-1.5 border border-black/20 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300" style={{ fontSize: "22px" }}>Download Wedding Card</a>
            </div>


        </div>
    );
}
