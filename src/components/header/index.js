export default function Header() {
    return (
        <div>
            <nav className=" bg-purple-900 text-white flex justify-between">
                <img src="https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png" className="h-10 pt-3 px-4 rounded-3xl"></img>
                <ul className="px-18 py-4 flex mx-4 space-x-5 justify-end">

                    <li className="cursor-pointer font-serif">Home</li>
                    <li className="cursor-pointer font-serif">Contact Us</li>
                </ul>
            </nav>
        </div>
    )
}

