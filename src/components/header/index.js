import logo from "./../../assets/logo.png"
export default function Header() {
    return (
        <div>
            <nav className=" bg-purple-900 text-white flex justify-between">
                <img src={logo} className="h-10 pt-3 px-4 rounded-3xl"></img>
                <ul className="px-18 py-4 flex mx-4 space-x-5 justify-end">

                    <li className="cursor-pointer font-serif" ><a href="/"> Home</a></li>
                    <li className="cursor-pointer font-serif">Contact Us</li>
                </ul>
            </nav>
        </div >
    )
}


