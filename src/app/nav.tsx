"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function TypeformButton() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.head.appendChild(script);
        return () => { script.remove(); };
    }, []);

    return (
        <button
            data-tf-popup="01KK6VXC9VYNFQ08APDEV0YCAA"
            data-tf-size="100"
            className="text-sm uppercase tracking-widest text-black/50 underline hover:text-black transition-colors cursor-pointer"
        >
            RSVP
        </button>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} className={`underline transition-colors ${isActive ? "text-black" : "text-black/50 hover:text-black"}`}>
            {children}
        </Link>
    );
}

export function Nav() {
    return (
        <nav className="sticky top-0 z-30 bg-white flex flex-wrap justify-center gap-4 sm:gap-8 text-sm uppercase tracking-widest py-4" style={{ boxShadow: "0 8px 16px 8px white" }}>
            <NavLink href="/">Home</NavLink>
            <TypeformButton />
            <NavLink href="/wedding">Wedding</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/details">Details</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
        </nav>
    );
}
