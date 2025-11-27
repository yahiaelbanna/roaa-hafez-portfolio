export default function Nav() {
    return (
        <>
            <nav className="fixed left-1/2 top-5 -translate-x-1/2 rounded-xl bg-(--main-light) text-4xl p-1.5 border border-(--main-text) shadow-[0_0_10px_-5px_var(--main-text)] z-999">
                <ul className="flex">
                    <li>
                        <a href="#" className="px-6 py-1.5 bg-(--main-text) text-(--main-light) rounded-md block">Home</a>
                    </li>
                    <li>
                        <a href="#"  className="px-6 py-1.5 rounded-md block">About</a>
                    </li>
                    <li>
                        <a href="#"  className="px-6 py-1.5 rounded-md block">Projects</a>
                    </li>
                    <li>
                        <a href="#"  className="px-6 py-1.5 rounded-md block">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}