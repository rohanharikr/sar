"use client";

import { useEffect, useState } from "react";

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
            <span className="text-4xl">
                <RollingDigit digit={tens} />
                <RollingDigit digit={ones} />
            </span>
            <span>{label}</span>
        </p>
    );
}

export default function Home() {
    const [time, setTime] = useState(getTimeLeft);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const id = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 1000);
        return () => clearTimeout(t);
    }, []);

    const patternSvg = `url("data:image/svg+xml,%3Csvg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='10' fill='%23F7CE76'/%3E%3Crect x='2' width='1' height='10' fill='%23F7CE76'/%3E%3Crect x='4' width='1' height='10' fill='%23F7CE76'/%3E%3Crect x='1' width='1' height='10' fill='%23BE8E2D'/%3E%3Crect x='3' width='1' height='10' fill='%23BE8E2D'/%3E%3Crect x='5' width='1' height='10' fill='%23BE8E2D'/%3E%3Cpath d='M0 4.448H6V3H0V4.448Z' fill='%23B14328'/%3E%3Cpath d='M0.6 5.414H5.4V3.966H0.6V5.414Z' fill='%23B14328'/%3E%3Cpath d='M1.2 6.621H4.8V5.172H1.2V6.621Z' fill='%23B14328'/%3E%3Cpath d='M1.8 7.586H4.2V6.138H1.8V7.586Z' fill='%23B14328'/%3E%3Cpath d='M2.1 8.793H3.9V7.345H2.1V8.793Z' fill='%23B14328'/%3E%3Cpath d='M2.7 10H3.3V8.552H2.7V10Z' fill='%23B14328'/%3E%3C/svg%3E")`;

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="absolute top-0 left-0 w-full z-20 overflow-hidden" style={{ height: 20 }}>
                <div
                    style={{ width: "calc(100% + 48px)", marginLeft: -24, height: 20, backgroundImage: patternSvg, backgroundRepeat: "repeat-x", backgroundSize: "12px 20px", animation: "scroll-right 3s linear infinite", willChange: "transform" }}
                />
            </div>
            <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden" style={{ height: 20 }}>
                <div
                    style={{ width: "calc(100% + 48px)", marginLeft: -24, height: 20, backgroundImage: patternSvg, backgroundRepeat: "repeat-x", backgroundSize: "12px 20px", animation: "scroll-left 3s linear infinite", willChange: "transform" }}
                />
            </div>
            <main className="flex flex-col min-h-screen w-full items-center justify-center relative">
                <img
                    src="main.png"
                    className="w-5xl absolute pointer-events-none transition-opacity duration-2000 ease-in-out"
                    style={{ opacity: loaded ? 0.1 : 1 }}
                />
                <div
                    className="flex flex-col items-center justify-center transition-opacity duration-2000 ease-in-out z-10"
                    style={{ opacity: loaded ? 1 : 0 }}
                >
                    <span className="text-xl italic tracking-widest text-black/65 -mt-10">the wedding of</span>
                    <h1 className="text-7xl mt-6">Rahul&nbsp;&nbsp;&nbsp;&&nbsp;&nbsp;&nbsp;Sandra</h1>
                    <div className="my-16 flex flex-row gap-10">
                        <CountdownUnit value={time.days} label="days" />
                        <CountdownUnit value={time.hours} label="hours" />
                        <CountdownUnit value={time.minutes} label="minutes" />
                        <CountdownUnit value={time.seconds} label="seconds" />
                    </div>
                    <ul className="flex flex-row gap-8 text-xl italic">
                        <li><a href="/animated" className="text-black/65">view the <span className="font-bold">animated</span> version</a></li>
                        <li><a href="/plain" className="text-black/65">view the <span className="font-bold">plain</span> version</a></li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
