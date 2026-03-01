export default function Animated() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <ul className="flex flex-col items-end gap-2 text-xl italic fixed bottom-10 right-10">
                <li><a href="/" className="text-black/65">go <span className="font-bold">home</span></a></li>
                {/* <li><a href="/rsvp" className="text-black/65"><span className="font-bold">~ RSVP ~</span></a></li> */}
                {/* <li><a href="/plain" className="text-black/65">view the <span className="font-bold">plain</span> version</a></li> */}
                {/* <li><a href="/plain" className="text-black/65">view the <span className="font-bold">plain</span> version</a></li> */}
            </ul>
            <h1>RSVP</h1>
        </div>
    );
}
