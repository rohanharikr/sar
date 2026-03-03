"use client";

import { useEffect, useRef, useState } from "react";

export default function Animated() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.volume = 0.5;
        audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }, []);

    const toggle = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (audio.paused) {
            audio.play().then(() => setPlaying(true));
        } else {
            audio.pause();
            setPlaying(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <audio ref={audioRef} src="/aaraadhike.mp3" loop />
            <button
                onClick={toggle}
                className="fixed top-5 right-5 z-50 p-2 text-black/65 hover:text-black transition-colors"
                aria-label={playing ? "Pause music" : "Play music"}
            >
                {playing ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </button>
            <ul className="flex flex-col items-end gap-2 text-xl italic fixed bottom-10 right-10">
                {/* <li><a href="/" className="text-black/65">go <span className="font-bold">home</span></a></li> */}
                {/* <li><a href="/rsvp" className="text-black/65"><span className="font-bold">~ RSVP ~</span></a></li> */}
                {/* <li><a href="/plain" className="text-black/65">view the <span className="font-bold">plain</span> version</a></li> */}
                <li><a href="/plain" className="text-black/65">view the <span className="font-bold">plain</span> version</a></li>
            </ul>
            <h1>Animated</h1>
        </div>
    );
}
