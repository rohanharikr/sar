"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const TARGET = new Date("2026-05-03T11:57:00+05:30").getTime();

function getTimeLeft() {
    const diff = Math.max(0, TARGET - Date.now());
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

function RollingDigit({ digit }: { digit: number }) {
    return (
        <span className="inline-block overflow-hidden" style={{ height: "1.2em", width: "0.6em", lineHeight: "1.2" }}>
            <span
                className="inline-flex flex-col transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(${-digit * 1.2}em)` }}
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <span key={n} className="inline-block" style={{ height: "1.2em", lineHeight: "1.2" }}>
                        {n}
                    </span>
                ))}
            </span>
        </span>
    );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
    const tens = Math.floor(value / 10);
    const ones = value % 10;

    return (
        <p className="flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-4xl">
                <RollingDigit digit={tens} />
                <RollingDigit digit={ones} />
            </span>
            <span>{label}</span>
        </p>
    );
}

function TypeformButton() {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.head.appendChild(script);
        return () => { script.remove(); };
    }, []);

    return (
        <button
            ref={ref}
            data-tf-popup="01KK6VXC9VYNFQ08APDEV0YCAA"
            data-tf-size="100"
            className="text-sm uppercase tracking-widest text-black/50 underline hover:text-black transition-colors cursor-pointer"
        >
            RSVP
        </button>
    );
}

export default function Home() {
    const [time, setTime] = useState(getTimeLeft);
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
    const imgRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const floralCanvasRef = useRef<HTMLCanvasElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const familiesRef = useRef<HTMLParagraphElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        const id = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const floralCanvas = floralCanvasRef.current;
        const img = imgRef.current;
        const text = textRef.current;
        const families = familiesRef.current;
        if (!canvas || !floralCanvas || !img || !text || !families) return;

        const imgEl = new Image();
        imgEl.src = 'main.png';
        imgEl.onload = () => {
            const w = img.offsetWidth;
            const h = img.offsetHeight;
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d')!;

            const rand = () => Math.random();
            const dropCount = 14;
            const drops = Array.from({ length: dropCount }, (_, i) => ({
                x: 0.05 + rand() * 0.9,
                y: 0.05 + rand() * 0.9,
                r: 0,
                delay: i * 0.15,
                duration: 4 + rand() * 2,
            }));
            // Always have one near center for a solid start
            drops[0] = { x: 0.45 + rand() * 0.1, y: 0.45 + rand() * 0.1, r: 0, delay: 0, duration: 5 + rand() * 1 };

            const maxR = Math.sqrt(w * w + h * h) * 0.7;

            function render() {
                ctx.clearRect(0, 0, w, h);
                // Draw ink drop shapes
                drops.forEach(d => {
                    if (d.r <= 0) return;
                    const r = d.r * maxR;
                    const grad = ctx.createRadialGradient(d.x * w, d.y * h, 0, d.x * w, d.y * h, r);
                    grad.addColorStop(0, 'rgba(255,255,255,0.9)');
                    grad.addColorStop(0.3, 'rgba(255,255,255,0.6)');
                    grad.addColorStop(0.6, 'rgba(255,255,255,0.25)');
                    grad.addColorStop(1, 'rgba(255,255,255,0)');
                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.arc(d.x * w, d.y * h, r, 0, Math.PI * 2);
                    ctx.fill();
                });
                // Composite: only draw image where ink drops are
                ctx.globalCompositeOperation = 'source-in';
                ctx.drawImage(imgEl, 0, 0, w, h);
                ctx.globalCompositeOperation = 'source-over';
            }

            const tl = gsap.timeline({ delay: 0.15 });

            drops.forEach(d => {
                tl.to(d, {
                    r: 1,
                    duration: d.duration,
                    ease: 'power2.out',
                    onUpdate: render,
                }, d.delay);
            });

            // Fade canvas to 0.1 + text from 0 to 1
            tl.to(canvas, { opacity: 0.1, duration: 2, ease: 'power2.inOut' }, 2.5);
            tl.to(text, { opacity: 1, duration: 2, ease: 'power2.inOut' }, 2.5);

            tlRef.current = tl;
        };

        // Set up floral canvas with ink drop reveal driven by scroll
        const floralImgEl = new window.Image();
        floralImgEl.src = 'floral.png';
        let floralReady = false;
        let floralCtx: CanvasRenderingContext2D;
        const floralRand = () => Math.random();
        const floralDropCount = 12;
        const floralDrops = Array.from({ length: floralDropCount }, (_, i) => ({
            x: 0.05 + floralRand() * 0.9,
            y: 0.05 + floralRand() * 0.9,
            r: 0,
        }));
        floralDrops[0] = { x: 0.45 + floralRand() * 0.1, y: 0.45 + floralRand() * 0.1, r: 0 };
        let floralMaxR = 0;

        floralImgEl.onload = () => {
            const w = img.offsetWidth;
            const h = img.offsetHeight;
            floralCanvas.width = w;
            floralCanvas.height = h;
            floralCtx = floralCanvas.getContext('2d')!;
            floralMaxR = Math.sqrt(w * w + h * h) * 0.7;
            floralReady = true;
        };

        function renderFloral(progress: number) {
            if (!floralReady || !floralCanvas) return;
            const w = floralCanvas.width;
            const h = floralCanvas.height;
            floralCtx.clearRect(0, 0, w, h);

            floralDrops.forEach((d, i) => {
                // Stagger each drop's reveal based on progress
                const dropStart = i / floralDropCount;
                const dropProgress = Math.max(0, Math.min(1, (progress - dropStart * 0.5) / 0.7));
                if (dropProgress <= 0) return;
                const r = dropProgress * floralMaxR;
                const grad = floralCtx.createRadialGradient(d.x * w, d.y * h, 0, d.x * w, d.y * h, r);
                grad.addColorStop(0, 'rgba(255,255,255,0.9)');
                grad.addColorStop(0.3, 'rgba(255,255,255,0.6)');
                grad.addColorStop(0.6, 'rgba(255,255,255,0.25)');
                grad.addColorStop(1, 'rgba(255,255,255,0)');
                floralCtx.fillStyle = grad;
                floralCtx.beginPath();
                floralCtx.arc(d.x * w, d.y * h, r, 0, Math.PI * 2);
                floralCtx.fill();
            });

            floralCtx.globalCompositeOperation = 'source-in';
            floralCtx.drawImage(floralImgEl, 0, 0, w, h);
            floralCtx.globalCompositeOperation = 'source-over';
        }

        // Sticky scroll behavior for canvas

        let canvasDocTop = 0;
        let scrollHandler: (() => void) | null = null;

        const setupSticky = () => {
            // Calculate the canvas's original position in the document
            canvasDocTop = canvas.getBoundingClientRect().top + window.scrollY;
            const canvasH = canvas.offsetHeight;
            const canvasLeft = canvas.getBoundingClientRect().left;

            const stickyTop = 40;

            // Total scroll distance from sticky start to families text
            const stickyStart = canvasDocTop - stickyTop;
            const familiesDocTop = families.getBoundingClientRect().top + window.scrollY;
            const totalStickyDistance = familiesDocTop - stickyStart - canvasH - stickyTop;

            // Floral centering: offset to center the smaller floral canvas over main canvas
            const mainW = canvas.offsetWidth;
            const floralW = floralCanvas.offsetWidth;
            const floralLeftOffset = (mainW - floralW) / 2;

            // The scroll point where main progress hits 1
            const mainAnimEnd = stickyStart + totalStickyDistance * 2.25;
            // Additional scroll for floral reveal after main anim ends
            const floralScrollRange = totalStickyDistance * 0.75;

            scrollHandler = () => {
                const familiesRect = families.getBoundingClientRect();
                const scrollY = window.scrollY;

                // Calculate scroll progress (0 = just became sticky, 1 = about to release)
                const progress = Math.min(1, Math.max(0, (scrollY - stickyStart) / (totalStickyDistance * 2.25)));
                // Opacity: 0.1 → 1
                const opacity = 0.1 + progress * 0.9;
                // Scale: 1 → 0.55
                const scale = 1 - progress * 0.45;

                const scaledH = canvasH * scale;

                canvas.style.transformOrigin = 'top center';

                // Floral reveal: starts only after main scaling completes
                const floralProgress = Math.min(1, Math.max(0, (scrollY - mainAnimEnd) / floralScrollRange));
                renderFloral(floralProgress);
                floralCanvas.style.opacity = floralProgress > 0 ? '1' : '0';
                floralCanvas.style.transformOrigin = 'top center';
                const floralLeft = canvasLeft + floralLeftOffset;

                if (familiesRect.top <= scaledH + stickyTop) {
                    // State 3: "Together" text reached canvas bottom — scroll canvas up with it
                    canvas.style.position = 'fixed';
                    canvas.style.top = `${familiesRect.top - scaledH}px`;
                    canvas.style.left = `${canvasLeft}px`;
                    canvas.style.zIndex = '0';
                    canvas.style.opacity = '1';
                    canvas.style.transform = `scale(${scale})`;
                    floralCanvas.style.position = 'fixed';
                    floralCanvas.style.top = `${familiesRect.top - scaledH}px`;
                    floralCanvas.style.left = `${floralLeft}px`;
                    floralCanvas.style.transform = `scale(${scale})`;
                } else if (scrollY >= stickyStart) {
                    // State 2: Stuck at top with padding
                    canvas.style.position = 'fixed';
                    canvas.style.top = `${stickyTop}px`;
                    canvas.style.left = `${canvasLeft}px`;
                    canvas.style.zIndex = '0';
                    canvas.style.opacity = `${opacity}`;
                    canvas.style.transform = `scale(${scale})`;
                    text.style.opacity = `${1 - progress}`;
                    floralCanvas.style.position = 'fixed';
                    floralCanvas.style.top = `${stickyTop}px`;
                    floralCanvas.style.left = `${floralLeft}px`;
                    floralCanvas.style.transform = `scale(${scale})`;
                } else {
                    // State 1: Normal scroll (original absolute position in hero)
                    canvas.style.position = 'absolute';
                    canvas.style.top = '';
                    canvas.style.left = '';
                    canvas.style.zIndex = '';
                    canvas.style.opacity = '0.1';
                    canvas.style.transform = 'scale(1)';
                    canvas.style.transformOrigin = '';
                    text.style.opacity = '1';
                    floralCanvas.style.position = 'absolute';
                    floralCanvas.style.top = '';
                    floralCanvas.style.left = '';
                    floralCanvas.style.transform = '';
                    floralCanvas.style.transformOrigin = '';
                }
            };

            window.addEventListener('scroll', scrollHandler, { passive: true });
        };

        // Wait for intro animation to be far enough along before enabling sticky
        const timer = setTimeout(setupSticky, 2500);

        const handleResize = () => {
            if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
            setupSticky();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            tlRef.current?.kill();
            clearTimeout(timer);
            if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const patternSvg = `url("data:image/svg+xml,%3Csvg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='10' fill='%23F7CE76'/%3E%3Crect x='2' width='1' height='10' fill='%23F7CE76'/%3E%3Crect x='4' width='1' height='10' fill='%23F7CE76'/%3E%3Crect x='1' width='1' height='10' fill='%23BE8E2D'/%3E%3Crect x='3' width='1' height='10' fill='%23BE8E2D'/%3E%3Crect x='5' width='1' height='10' fill='%23BE8E2D'/%3E%3Cpath d='M0 4.448H6V3H0V4.448Z' fill='%23B14328'/%3E%3Cpath d='M0.6 5.414H5.4V3.966H0.6V5.414Z' fill='%23B14328'/%3E%3Cpath d='M1.2 6.621H4.8V5.172H1.2V6.621Z' fill='%23B14328'/%3E%3Cpath d='M1.8 7.586H4.2V6.138H1.8V7.586Z' fill='%23B14328'/%3E%3Cpath d='M2.1 8.793H3.9V7.345H2.1V8.793Z' fill='%23B14328'/%3E%3Cpath d='M2.7 10H3.3V8.552H2.7V10Z' fill='%23B14328'/%3E%3C/svg%3E")`;

    return (
        <div className="flex flex-col">
            <div className="fixed top-0 left-0 w-full z-20 overflow-hidden" style={{ height: 20 }}>
                <div
                    style={{ width: "calc(100% + 48px)", marginLeft: -24, height: 20, backgroundImage: patternSvg, backgroundRepeat: "repeat-x", backgroundSize: "12px 20px", animation: "scroll-right 3s linear infinite", willChange: "transform" }}
                />
            </div>
            <div className="fixed bottom-0 left-0 w-full z-20 overflow-hidden" style={{ height: 20 }}>
                <div
                    style={{ width: "calc(100% + 48px)", marginLeft: -24, height: 20, backgroundImage: patternSvg, backgroundRepeat: "repeat-x", backgroundSize: "12px 20px", animation: "scroll-left 3s linear infinite", willChange: "transform" }}
                />
            </div>
            <main className="flex flex-col min-h-screen w-full items-center justify-center relative">
                <img
                    ref={imgRef}
                    src="main.png"
                    className="w-full max-w-3xl absolute pointer-events-none invisible"
                />
                <canvas
                    ref={floralCanvasRef}
                    className="absolute pointer-events-none"
                    style={{ opacity: 0, width: '100%', maxWidth: '45.6rem', marginTop: '-65px' }}
                />
                <canvas
                    ref={canvasRef}
                    className="w-full max-w-3xl absolute pointer-events-none"
                />
                <div
                    ref={textRef}
                    className="flex flex-col items-center justify-center z-10"
                    style={{ opacity: 0 }}
                >
                    <span className="text-base sm:text-xl italic tracking-widest text-black/65">the wedding of</span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl mt-4 sm:mt-6">Rahul&nbsp;&nbsp;&nbsp;<span className="italic">&</span>&nbsp;&nbsp;&nbsp;Sandra</h1>
                    <div className="my-8 sm:my-16 flex flex-row gap-4 sm:gap-10">
                        <CountdownUnit value={time.days} label="days" />
                        <CountdownUnit value={time.hours} label="hours" />
                        <CountdownUnit value={time.minutes} label="minutes" />
                        <CountdownUnit value={time.seconds} label="seconds" />
                    </div>
                    <TypeformButton />
                </div>
            </main>

            {/* Wedding details */}
            <div className="flex flex-col justify-center items-center text-xl sm:text-2xl relative z-10">
                <div className="relative flex flex-col items-center max-w-xl w-full py-10 sm:py-16 px-4 sm:px-8">
                    {/* <img
                        src="plain-main.png"
                        className="-mt-20"
                    /> */}

                    <p ref={familiesRef} className="italic tracking-widest -mt-6 z-10">
                        Together with their families
                    </p>

                    <div className="flex flex-col items-center gap-6 my-14">
                        <h1 className="text-5xl sm:text-7xl z-10">Rahul</h1>
                        <img
                            src="rings.png"
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

                    <img
                        src="location.png"
                        className="mt-16"
                    />
                    <p className="italic text-center tracking-widest leading-relaxed mt-6">
                        Heartland Convention Center, Chalakudy, Keralam
                    </p>
                    <div className="flex gap-4 sm:gap-8 mt-6 uppercase text-sm tracking-widest text-black/65 underline">
                        <a href="https://maps.app.goo.gl/98ZJT5wKz2PSG6Mk7" target="_blank">Directions</a>
                        <a href="https://www.keralatourism.org/" target="_blank">Explore Keralam</a>
                    </div>

                    {/* Events Timeline */}
                    <div className="mt-24 flex flex-col items-center w-full z-10">
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
                                    <img src="sangeeth.png" className="w-auto h-16 sm:h-24 mb-1" />
                                    <p className="font-medium italic">Sangeeth</p>
                                    <p className="text-xl text-black/50">5:30pm</p>
                                </div>
                            </div>

                            <div className="relative flex">
                                <div className="w-1/2 pr-5 flex flex-col items-center">
                                    <img src="first-dinner.png" className="w-auto h-16 sm:h-24 mb-1" />
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
                                    <img src="muhurtham.png" className="w-auto h-16 sm:h-24 mb-1" />
                                    <p className="font-medium italic">Muhurtham</p>
                                    <p className="text-xl text-black/50">11:57am</p>
                                </div>
                            </div>

                            <div className="relative flex pb-4">
                                <div className="w-1/2 pr-5 flex flex-col items-center">
                                    <img src="lunch.png" className="w-auto h-14 sm:h-20 mb-1" />
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
                                    <img src="photos.png" className="w-auto h-16 sm:h-24 mb-1" />
                                    <p className="font-medium italic">Photos</p>
                                    <p className="text-xl text-black/50">1:30pm</p>
                                </div>
                            </div>

                            <div className="relative flex pb-4">
                                <div className="w-1/2 pr-5 flex flex-col items-center">
                                    <img src="reception.png" className="w-auto h-24 sm:h-32 mb-1" />
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
                                    <img src="second-dinner.png" className="w-auto h-16 sm:h-24 mb-1" />
                                    <p className="font-medium italic">Dinner</p>
                                    <p className="text-xl text-black/50">8pm</p>
                                    <button onClick={() => openMenu("Reception Dinner")} className="mt-2 text-xs uppercase tracking-widest text-black/50 underline hover:text-black transition-colors cursor-pointer">Menu</button>
                                </div>
                            </div>
                        </div>
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

                    {/* <div className="mt-24 mb-14 z-10">
                        <span className="italic">With best compliments from</span>
                        <p className="text-center mt-4 leading-10">Aatmika, Abhinav, Abhishek,<br />Rohan, Sanjay</p>
                    </div> */}

                </div>
            </div>

            <div className="mt-16 sm:mt-24 mb-16 sm:mb-24 flex flex-col sm:flex-row items-center sm:items-start justify-center w-full gap-8 sm:gap-0 px-4 sm:px-0">
                <div className="flex-1 max-w-xs flex flex-col items-center">
                    <h2 className="tracking-widest font-bold uppercase mb-4 text-sm">Accommodation</h2>
                    <a href="https://share.google/8l1tz1qtfcSldVZSF" target="_blank" className="text-center leading-relaxed text-black/70 text-base underline hover:text-black transition-colors">Sky International</a>
                    <a href="https://maps.app.goo.gl/QLQtRva1MuA2QUvS9" target="_blank" className="text-center leading-relaxed text-black/70 text-base underline hover:text-black transition-colors">Cochin Airport Hotel</a>
                </div>
                <span className="hidden sm:block text-black/20 self-center">&bull;</span>
                <div className="flex-1 max-w-xs flex flex-col items-center">
                    <h2 className="tracking-widest font-bold uppercase mb-4 text-sm">Travel</h2>
                    <p className="text-center italic leading-relaxed text-black/70 text-base">Details coming soon</p>
                </div>
                <span className="hidden sm:block text-black/20 self-center">&bull;</span>
                <div className="flex-1 max-w-xs flex flex-col items-center">
                    <h2 className="tracking-widest font-bold uppercase mb-4 text-sm">Dress Code</h2>
                    <p className="text-center leading-relaxed text-black/70 text-base">Traditional or semi-formal</p>
                    <p className="text-center leading-relaxed text-black/70 text-base">Saree, mundu, or kurta preferred</p>
                </div>
            </div>

            <div className="mb-16 sm:mb-24 flex flex-col items-center px-4 sm:px-0">
                <h2 className="tracking-widest font-bold uppercase mb-4 text-sm">Contact</h2>
                <a href="mailto:contact@sandraandrahul.com" className="text-base text-black/70 underline hover:text-black transition-colors">contact@sandraandrahul.com</a>
                <a href="tel:+919947888903" className="text-base text-black/70 underline hover:text-black transition-colors mt-1">+91 9947888903</a>
            </div>

            <div className="relative flex flex-col items-center justify-center w-full mb-12">
                <img src="temple.png" className="w-full max-w-2xl absolute z-0 opacity-10 pointer-events-none" />
                <p className="text-center text-[#B14328] text-lg sm:text-2xl leading-relaxed z-10 mt-16 px-4 sm:px-0">
                    "Samāno mantraḥ samitiḥ samānī…"
                </p>
                <p className="text-center text-[#B14328] text-lg sm:text-2xl mt-2 z-10 mb-16">
                    — Rig Veda 10.191.2
                </p>
            </div>

        </div>
    );
}
