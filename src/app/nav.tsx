"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} className={`underline transition-colors ${isActive ? "text-black" : "text-black/50 hover:text-black"}`}>
            {children}
        </Link>
    );
}

export function ScrollReset() {
    const pathname = usePathname();
    useEffect(() => {
        const scrollContainer = document.querySelector(".overflow-y-scroll");
        if (scrollContainer) scrollContainer.scrollTop = 0;
    }, [pathname]);
    return null;
}

export function Nav() {
    return (
        <nav className="sticky top-0 z-30 bg-white flex flex-wrap justify-center gap-4 sm:gap-8 text-sm uppercase tracking-widest pt-6 pb-8" style={{ boxShadow: "0 16px 32px 16px white" }}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/wedding">Wedding</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
        </nav>
    );
}
