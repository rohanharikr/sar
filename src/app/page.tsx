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

    useEffect(() => {
        const id = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <main className="flex flex-col min-h-screen w-full items-center justify-center relative">
                {/* <img src="main.png" className="w-md absolute -mt-[30rem]"/> */}
                <span className="text-xl italic tracking-widest text-black/65 -mt-10">the wedding of</span>
                <h1 className="text-7xl z-10 mt-6">Rahul&nbsp;&nbsp;&nbsp;&&nbsp;&nbsp;&nbsp;Sandra</h1>
                <div className="my-16 flex flex-row gap-10">
                    <CountdownUnit value={time.days} label="days" />
                    <CountdownUnit value={time.hours} label="hours" />
                    <CountdownUnit value={time.minutes} label="minutes" />
                    <CountdownUnit value={time.seconds} label="seconds" />
                </div>
                <ul className="flex flex-row gap-8 text-xl italic">
                    <li><a href="/" className="text-black/65">view the <span className="font-bold">animated</span> version</a></li>
                    <li><a href="/" className="text-black/65">view the <span className="font-bold">plain</span> version</a></li>
                </ul>
            </main>
        </div>
    );
}
