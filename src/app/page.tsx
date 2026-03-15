"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import confetti from "canvas-confetti";

const DISABLE_ANIMATIONS = false;

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

export default function Home() {
    const [time, setTime] = useState(getTimeLeft);
    const confettiFired = useRef(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        const id = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        if (DISABLE_ANIMATIONS) return;
        const isZero = time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0;
        if (isZero && !confettiFired.current) {
            confettiFired.current = true;
            const duration = 5000;
            const end = Date.now() + duration;
            const frame = () => {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0, y: 0 },
                    colors: ['#F7CE76', '#BE8E2D', '#B14328'],
                });
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1, y: 0 },
                    colors: ['#F7CE76', '#BE8E2D', '#B14328'],
                });
                if (Date.now() < end) requestAnimationFrame(frame);
            };
            frame();
        }
    }, [time]);

    useEffect(() => {
        if (DISABLE_ANIMATIONS) return;
        const canvas = canvasRef.current;
        const img = imgRef.current;
        const text = textRef.current;
        if (!canvas || !img || !text) return;

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
                delay: i * 0.08,
                duration: 2 + rand() * 1,
            }));
            drops[0] = { x: 0.45 + rand() * 0.1, y: 0.45 + rand() * 0.1, r: 0, delay: 0, duration: 2.5 + rand() * 0.5 };

            const maxR = Math.sqrt(w * w + h * h) * 0.7;

            function render() {
                ctx.clearRect(0, 0, w, h);
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

            tl.to(canvas, { opacity: 0.1, duration: 1, ease: 'power2.inOut' }, 1.2);
            tl.to(text, { opacity: 1, duration: 1, ease: 'power2.inOut' }, 1.2);

            tlRef.current = tl;
        };

        return () => {
            tlRef.current?.kill();
        };
    }, []);

    return (
        <div className="flex flex-col flex-1">
            <main className="flex flex-col flex-1 w-full items-center justify-center relative">
                <img
                    ref={imgRef}
                    src="main.png"
                    className="w-full max-w-3xl absolute pointer-events-none invisible"
                />
                <canvas
                    ref={canvasRef}
                    className="w-full max-w-3xl absolute pointer-events-none"
                    style={DISABLE_ANIMATIONS ? { display: 'none' } : undefined}
                />
                <div
                    ref={textRef}
                    className="flex flex-col items-center justify-center z-10"
                    style={{ opacity: DISABLE_ANIMATIONS ? 1 : 0 }}
                >
                    <span className="text-base sm:text-xl italic tracking-widest text-black/65">the wedding of</span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl mt-4 sm:mt-6">Rahul&nbsp;&nbsp;&nbsp;<span className="italic">&</span>&nbsp;&nbsp;&nbsp;Sandra</h1>
                    <div className="my-8 sm:my-16 flex flex-row gap-4 sm:gap-10">
                        <CountdownUnit value={time.days} label="days" />
                        <CountdownUnit value={time.hours} label="hours" />
                        <CountdownUnit value={time.minutes} label="minutes" />
                        <CountdownUnit value={time.seconds} label="seconds" />
                    </div>
                </div>
            </main>
        </div>
    );
}
