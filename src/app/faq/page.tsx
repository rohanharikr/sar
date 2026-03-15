export default function FAQ() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center text-xl sm:text-2xl py-8 sm:py-16 px-4 sm:px-0">
            <div className="flex flex-col items-center w-full max-w-2xl mx-auto mb-10 sm:mb-14">
<div className="w-full space-y-6">
                    <div>
                        <p className="font-medium">Can I bring a plus one?</p>
                        <p className="text-black/70 mt-1">Please refer to your invitation for details on additional guests.<br/>Feel free to reach out if you have questions.</p>
                    </div>
                    <div>
                        <p className="font-medium">Are children welcome?</p>
                        <p className="text-black/70 mt-1">Yes, children are welcome at all events.</p>
                    </div>
                    <div>
                        <p className="font-medium">What will the weather be like?</p>
                        <p className="text-black/70 mt-1">May in Kerala is warm and humid, around 30&ndash;35&deg;C.<br/>Light, breathable fabrics are recommended.</p>
                    </div>
                    <div>
                        <p className="font-medium">Is parking available at the venue?</p>
                        <p className="text-black/70 mt-1">Yes, Heartland Convention Center has ample parking.</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-2xl mx-auto">
                <p className="font-medium">Contact</p>
                <a href="mailto:hi@sandraandrahul.com" className="text-black/70 underline hover:text-black transition-colors mt-1 block">hi@sandraandrahul.com</a>
                <p className="text-black/70 mt-1"><a href="tel:+919947888903" className="underline hover:text-black transition-colors">+91 9947888903</a> <span className="text-black/40">&middot; Rajalekshmi & Harikumar (Rahul&apos;s parents)  &middot; WhatsApp available</span></p>
            </div>

            {/* <img src="/hoppers.jpeg" className="mt-10 sm:mt-14 w-full max-w-xs rounded-sm opacity-80" alt="Hoppers" /> */}

        </div>
    );
}
