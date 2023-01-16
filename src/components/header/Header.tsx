import Image from "next/image"
import Logo from "../../../assets/img/lk-logo.png"

const navLink = "cursor-pointer px-2 py-1 rounded hover:bg-gray-100"

export const Header = () => {
    return (
        <div className="border-2 flex items-center gap-8 lg:px-32 pt-8 justify-between">
            <div className="flex items-center gap-4">
                <Image
                    src={Logo}
                    width={50}
                    height={50}
                    alt={"Logo"}
                />
                <h1 className="text-2xl">Lightyear<b className="text-blue-800">Kids</b></h1>
                <ul className="flex gap-8 px-8">
                    <li className={navLink}>Features</li>
                    <li className={navLink}>Testimonials</li>
                    <li className={navLink}>Pricing</li>
                </ul>
            </div>
            <button className=" bg-blue-800 text-white py-2 px-4 rounded-full hover:bg-blue-700">Get Started</button>
        </div>
    )
}