"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Events() {
    const [menuModal, setMenuModal] = useState<string | null>(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const modalBackdropRef = useRef<HTMLDivElement>(null);
    const modalCardRef = useRef<HTMLDivElement>(null);

    const openMenu = (menu: string) => {
        setMenuModal(menu);
        setMenuVisible(true);
    };

    const closeMenu = () => {
        const backdrop = modalBackdropRef.current;
        const card = modalCardRef.current;
        if (!backdrop || !card) { setMenuModal(null); setMenuVisible(false); return; }
        const tl = gsap.timeline({
            onComplete: () => { setMenuModal(null); setMenuVisible(false); },
        });
        tl.to(card, { y: 40, opacity: 0, duration: 0.25, ease: "power2.in" }, 0);
        tl.to(backdrop, { opacity: 0, duration: 0.25, ease: "power2.in" }, 0);
    };

    useEffect(() => {
        if (menuModal && menuVisible) {
            document.body.style.overflow = "hidden";
            const backdrop = modalBackdropRef.current;
            const card = modalCardRef.current;
            if (backdrop && card) {
                gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
                gsap.fromTo(card, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" });
            }
        } else if (!menuModal) {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [menuModal, menuVisible]);

    return (
        <div className="flex flex-col justify-center items-center text-xl sm:text-2xl relative z-10 min-h-screen">
            <div className="relative flex flex-col items-center max-w-xl w-full py-16 sm:py-24 px-4 sm:px-8">

                <div className="flex flex-col items-center w-full z-10">
                    <h2 className="tracking-widest font-bold uppercase mb-10">Events</h2>

                    {/* 1st May group */}
                    <div className="relative w-full max-w-xs">
                        <div className="absolute left-1/2 -translate-x-1/2 top-[166px] bottom-[60px] w-px bg-black" />

                        <div className="relative flex pb-4">
                            <p className="absolute whitespace-nowrap top-[40px] left-0">1<sup className="text-xs">st</sup> May</p>
                            <svg className="absolute left-[80px] top-[52px]" width="80" height="114" fill="none">
                                <line x1="0" y1="0" x2="80" y2="114" stroke="black" strokeOpacity="1" strokeDasharray="4 4" strokeWidth="2" />
                            </svg>
                            <div className="w-1/2" />
                            <div className="absolute left-1/2 -translate-x-1/2 top-[156px] w-5 h-5 rounded-full bg-black z-10 border-4 border-white" />
                            <div className="w-1/2 pl-5 flex flex-col items-center pt-[50px]">
                                <img src="/sangeeth.png" className="w-auto h-16 sm:h-24 mb-1" />
                                <p className="font-medium italic">Sangeeth</p>
                                <p className="text-xl text-black/50">5:30pm</p>
                            </div>
                        </div>

                        <div className="relative flex">
                            <div className="w-1/2 pr-5 flex flex-col items-center">
                                <img src="/first-dinner.png" className="w-auto h-16 sm:h-24 mb-1" />
                                <p className="font-medium italic">Dinner</p>
                                <p className="text-xl text-black/50">7:30pm</p>
                                <button onClick={() => openMenu("Sangeeth")} className="mt-2 text-xs uppercase tracking-widest text-black/50 underline hover:text-black transition-colors cursor-pointer">Menu</button>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-black z-10 border-4 border-white" />
                            <div className="w-1/2" />
                        </div>
                    </div>

                    {/* 3rd May group */}
                    <div className="relative w-full max-w-xs mt-16">
                        <div className="absolute left-1/2 -translate-x-1/2 top-[166px] bottom-[60px] w-px bg-black" />

                        <div className="relative flex pb-4">
                            <p className="absolute whitespace-nowrap top-[40px] left-0">3<sup className="text-xs">rd</sup> May</p>
                            <svg className="absolute left-[80px] top-[52px]" width="80" height="114" fill="none">
                                <line x1="0" y1="0" x2="80" y2="114" stroke="black" strokeOpacity="1" strokeDasharray="4 4" strokeWidth="2" />
                            </svg>
                            <div className="w-1/2" />
                            <div className="absolute left-1/2 -translate-x-1/2 top-[156px] w-5 h-5 rounded-full bg-black z-10 border-4 border-white" />
                            <div className="w-1/2 pl-5 flex flex-col items-center pt-[50px]">
                                <img src="/muhurtham.png" className="w-auto h-16 sm:h-24 mb-1" />
                                <p className="font-medium italic">Muhurtham</p>
                                <p className="text-xl text-black/50">11:57am</p>
                            </div>
                        </div>

                        <div className="relative flex pb-4">
                            <div className="w-1/2 pr-5 flex flex-col items-center">
                                <img src="/lunch.png" className="w-auto h-14 sm:h-20 mb-1" />
                                <p className="font-medium italic">Lunch</p>
                                <p className="text-xl text-black/50">12:45pm</p>
                                <button onClick={() => openMenu("Sadya")} className="mt-2 text-xs uppercase tracking-widest text-black/50 underline hover:text-black transition-colors cursor-pointer">Menu</button>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-black z-10 border-4 border-white" />
                            <div className="w-1/2" />
                        </div>

                        <div className="relative flex pb-4">
                            <div className="w-1/2" />
                            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-black z-10 border-4 border-white" />
                            <div className="w-1/2 pl-5 flex flex-col items-center">
                                <img src="/photos.png" className="w-auto h-16 sm:h-24 mb-1" />
                                <p className="font-medium italic">Photos</p>
                                <p className="text-xl text-black/50">1:30pm</p>
                            </div>
                        </div>

                        <div className="relative flex pb-4">
                            <div className="w-1/2 pr-5 flex flex-col items-center">
                                <img src="/reception.png" className="w-auto h-24 sm:h-32 mb-1" />
                                <p className="font-medium italic">Reception</p>
                                <p className="text-xl text-black/50">7:30pm</p>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-black z-10 border-4 border-white" />
                            <div className="w-1/2" />
                        </div>

                        <div className="relative flex">
                            <div className="w-1/2" />
                            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-black z-10 border-4 border-white" />
                            <div className="w-1/2 pl-5 flex flex-col items-center">
                                <img src="/second-dinner.png" className="w-auto h-16 sm:h-24 mb-1" />
                                <p className="font-medium italic">Dinner</p>
                                <p className="text-xl text-black/50">8pm</p>
                                <button onClick={() => openMenu("Reception Dinner")} className="mt-2 text-xs uppercase tracking-widest text-black/50 underline hover:text-black transition-colors cursor-pointer">Menu</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Link href="/" className="mt-16 text-sm uppercase tracking-widest text-black/50 underline hover:text-black transition-colors">
                    Back
                </Link>
            </div>

            {/* Menu Modal */}
            {menuModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={closeMenu}>
                    <div ref={modalBackdropRef} className="absolute inset-0 bg-black/40" />
                    <div ref={modalCardRef} className="relative bg-white max-w-sm w-full mx-4 max-h-[80vh] rounded-sm flex flex-col" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-center p-6 pb-4 border-b border-black/10 shrink-0">
                            <h3 className="font-medium italic text-xl text-center">~ {menuModal} ~</h3>
                            <button onClick={closeMenu} className="absolute right-4 text-black/40 hover:text-black text-xl leading-none cursor-pointer">&times;</button>
                        </div>
                        <div className="overflow-y-auto p-4 sm:p-8 pt-4 sm:pt-6">

                        {menuModal === "Sangeeth" && (
                            <>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Welcome Drink</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Passion Fruit Juice</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Soup</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Hot &amp; Sour Chicken Soup</li>
                                    <li>Hot &amp; Sour Veg Soup</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Starters</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Chicken Kabab</li>
                                    <li>Veg Corn Cheese</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Mains</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Nool Porotta</li>
                                    <li>Veg Pulao</li>
                                    <li>Chicken Roast</li>
                                    <li>Paneer Butter Masala</li>
                                    <li>Salad</li>
                                    <li>Raitha</li>
                                    <li>Pickles</li>
                                    <li>Pappad</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Dessert</p>
                                <ul className="text-base text-center leading-7 text-black/70">
                                    <li>Ice Cream</li>
                                </ul>
                            </>
                        )}

                        {menuModal === "Sadya" && (
                            <>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Rice &amp; Accompaniments</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Boiled Rice</li>
                                    <li>Parippu Curry</li>
                                    <li>Sambar</li>
                                    <li>Rasam</li>
                                    <li>Ghee</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Curries</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Avial</li>
                                    <li>Olan</li>
                                    <li>Kalan</li>
                                    <li>Erissery</li>
                                    <li>Koottukari</li>
                                    <li>Pachadi</li>
                                    <li>Kichadi</li>
                                    <li>Pulissery</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Sides</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Thoran</li>
                                    <li>Mezhukkupuratti</li>
                                    <li>Inji Curry</li>
                                    <li>Naranga Achar</li>
                                    <li>Upperi / Chips</li>
                                    <li>Pappadam</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Payasam</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Semiya Payasam</li>
                                    <li>Palada Pradhaman</li>
                                    <li>Ada Pradhaman</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Sweets</p>
                                <ul className="text-base text-center leading-7 text-black/70">
                                    <li>Boli</li>
                                    <li>Banana</li>
                                </ul>
                            </>
                        )}

                        {menuModal === "Reception Dinner" && (
                            <>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Welcome Drinks</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Pineapple Juice</li>
                                    <li>Watermelon Juice</li>
                                    <li>Grape Juice</li>
                                    <li>Guava Juice</li>
                                    <li>Mint Lime</li>
                                    <li>Mojitos</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Soup</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Sweet Corn Chicken Soup</li>
                                    <li>Sweet Corn Veg Soup</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Starters</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Chicken Lollypop</li>
                                    <li>Fish Finger</li>
                                    <li>Veg Spring Rolls</li>
                                    <li>French Fries</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Mains</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Appam</li>
                                    <li>Rumal Roti</li>
                                    <li>Chicken Dum Biryani</li>
                                    <li>Boiled Rice</li>
                                    <li>Duck Roast</li>
                                    <li>Beef Fry</li>
                                    <li>Fish Vattichathu</li>
                                    <li>Pork Fry</li>
                                    <li>Mango Curry</li>
                                    <li>Kalan</li>
                                    <li>Thoran</li>
                                    <li>Chamanthi</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Salads &amp; Sides</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Salads</li>
                                    <li>Pickles</li>
                                    <li>Uppilitta</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Veg Counter</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Veg Stew</li>
                                    <li>Veg Pulao</li>
                                    <li>Paneer Butter Masala</li>
                                    <li>Gobi Manchurian</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Dessert</p>
                                <ul className="text-base text-center leading-7 text-black/70 mb-4">
                                    <li>Ice Cream</li>
                                    <li>Chocolate Pastry</li>
                                    <li>Cut Fruits</li>
                                    <li>Gulab Jamun</li>
                                    <li>Carrot Halwa</li>
                                </ul>
                                <p className="text-sm uppercase tracking-widest text-black/40 mb-2 text-center">Beverages</p>
                                <ul className="text-base text-center leading-7 text-black/70">
                                    <li>Tea &amp; Coffee</li>
                                </ul>
                            </>
                        )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
