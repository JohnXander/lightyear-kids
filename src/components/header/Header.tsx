import Image from "next/image"
import Logo from "../../../assets/img/lk-logo.png"

export const Header = () => {
    return (
        <div className="border-2 flex items-center lg:px-32 bg-gray-100">
            <Image
                src={Logo}
                width={50}
                height={50}
                alt={"Logo"}
            />
            <h1 className="text-2xl">Lightyear<b style={{color: "#3f20b1"}}>Kids</b></h1>
        </div>
    )
}