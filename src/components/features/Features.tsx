import Image from "next/image"
import Kid from "../../../assets/img/kid.jpg"

export const Features = () => {
    return (
        <div className="mt-80 w-screen bg-blue-800 flex flex-col items-center lg:px-96 lg:py-32" id="features">
            <h2 className="text-5xl text-white leading-snug text-center">
                An educational platform which provides online learning and educational services.
            </h2>
            <p className="text-white mt-8">
                Our multi-disciplinary system targets the overall development of the students.
            </p>
            <Image
                className="mt-12 rounded-lg"
                src={Kid}
                width={500}
                height={500}
                alt={"Kid"}
            />
        </div>
    )
}
