import Link from "next/link";

export default function FAQ() {
    return (
        <div className="flex flex-col items-center min-h-screen text-xl sm:text-2xl py-16 sm:py-24 px-4 sm:px-0">
            <div className="flex flex-col items-center w-full max-w-2xl mx-auto mb-16 sm:mb-20">
                <h2 className="tracking-widest font-bold uppercase mb-8">FAQ</h2>
                <div className="w-full space-y-6">
                    <div>
                        <p className="font-medium">Can I bring a plus one?</p>
                        <p className="text-black/70 mt-1">Please refer to your invitation for details on additional guests. Feel free to reach out if you have questions.</p>
                    </div>
                    <div>
                        <p className="font-medium">Are children welcome?</p>
                        <p className="text-black/70 mt-1">Yes, children are welcome at all events.</p>
                    </div>
                    <div>
                        <p className="font-medium">What will the weather be like?</p>
                        <p className="text-black/70 mt-1">May in Kerala is warm and humid, around 30&ndash;35&deg;C. Light, breathable fabrics are recommended.</p>
                    </div>
                    <div>
                        <p className="font-medium">Is parking available at the venue?</p>
                        <p className="text-black/70 mt-1">Yes, Heartland Convention Center has ample parking.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center mb-16 sm:mb-20">
                <h2 className="tracking-widest font-bold uppercase mb-4">Contact</h2>
                <a href="mailto:contact@sandraandrahul.com" className="text-black/70 underline hover:text-black transition-colors">contact@sandraandrahul.com</a>
                <a href="tel:+919947888903" className="text-black/70 underline hover:text-black transition-colors mt-1">+91 9947888903</a>
                <p className="text-black/40 mt-1">Harikumar (Rahul&apos;s dad) &middot; WhatsApp available</p>
            </div>

            <div className="relative flex flex-col items-center justify-center w-full mb-12">
                <img src="/temple.png" className="w-full max-w-2xl absolute z-0 opacity-10 pointer-events-none" />
                <p className="text-center text-[#B14328] leading-relaxed z-10 mt-16 px-4 sm:px-0">
                    &ldquo;Sam&#257;no mantra&#7717; samiti&#7717; sam&#257;n&#299;&hellip;&rdquo;
                </p>
                <p className="text-center text-[#B14328] mt-2 z-10 mb-16">
                    &mdash; Rig Veda 10.191.2
                </p>
            </div>

            <Link href="/" className="text-sm uppercase tracking-widest text-black/50 underline hover:text-black transition-colors">
                Back
            </Link>
        </div>
    );
}
