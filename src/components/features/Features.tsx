import Image from "next/image"
import Kid from "../../../assets/img/kid.jpg"

export const Features = () => {
    return (
        <div className="mt-80 w-screen bg-blue-800 flex flex-col items-center lg:px-96 lg:py-32" id="features">
            <h2 className="text-5xl text-white leading-snug text-center">
                An educational platform which provides online learning and educational services.
            </h2>
            <p className="text-white mt-8">
                Lightyear Kids is a rapidly growing educational platform which provides online learning.
                We aim to be an institution of excellence, providing educational services. Our multi-disciplinary
                system targets the overall development of the students. Our vision is to provide high quality education at
                economic prices. What makes us different from others is our live interactive sessions with the students.
                Join us and become a part of a global educational revolution.
            </p>
            <Image
                className="mt-16 rounded-lg"
                src={Kid}
                width={700}
                height={700}
                alt={"Kid"}
            />
        </div>
    )
}