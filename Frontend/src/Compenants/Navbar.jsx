export default function Navbar() {
    return (
        <>
            <header className="bg-white sticky z-50 w-full  ">
            {/* Container */}
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">  
                <nav className="flex h-16 items-center justify-between ">
                    <div className="flex items-center">Logo</div>
                    <div className="flex items-center">
                        <ul className=" flex gap-6">
                            <li>Home</li>
                            <li>Category</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className=" z-5 ">
                        <button className="flex items-center  gap-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 120 120"
                                className="fill-current text-gray-500"
                            >
                                <g>
                                    <path d="M60 120C26.9 120 0 93.1 0 60S26.9 0 60 0s60 26.9 60 60-26.9 60-60 60zM60 5C29.7 5 5 29.7 5 60s24.7 55 55 55 55-24.7 55-55S90.3 5 60 5z" />
                                    <path d="M60 120c-19.3 0-34.4-26.4-34.4-60S40.7 0 60 0s34.4 26.4 34.4 60-15.1 60-34.4 60zM60 5C43.8 5 30.5 29.7 30.5 60s13.2 55 29.5 55 29.5-24.7 29.5-55S76.2 5 60 5z" />
                                    <path d="M12.2 25.6h95.6v5H12.2zM12.2 89.5h95.6v5H12.2zM2.5 57.5h115v5H2.5z" />
                                    <path d="M57.5 2.5h5v115h-5z" />
                                </g>
                            </svg>
                            {/* {i18n.language.toUpperCase()} */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
                </div>
            </header>
        </>
    );
}
