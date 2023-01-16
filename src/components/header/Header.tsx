import Image from "next/image"
import Link from "next/link"
import Logo from "../../../assets/img/lk-logo.png"

const navLink = "cursor-pointer px-2 py-1 rounded hover:bg-gray-100"

export const Header = () => {
    return (
        <div className="bg-white w-screen flex items-center gap-8 lg:px-32 py-8 justify-between fixed">
            <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center gap-4 cursor-pointer">
                    <Image
                        src={Logo}
                        width={50}
                        height={50}
                        alt={"Logo"}
                    />
                    <h1 className="text-2xl">Lightyear<b className="text-blue-800">Kids</b></h1>
                </Link>
                <ul className="flex gap-8 px-8">
                    <Link className={navLink} href="/#features">Features</Link>
                    <Link className={navLink} href="/#testimonials">Testimonials</Link>
                    <Link className={navLink} href="/#pricing">Pricing</Link>
                </ul>
            </div>
            <button className=" bg-blue-800 text-white py-2 px-4 rounded-full hover:bg-blue-700">Get Started</button>
        </div>
    )
}