import data from "../../../data/data.json"

export const Testimonials = () => {
    return (
        <div className="mt-80 w-screen flex flex-col gap-8 justify-center lg:px-96 lg:py-32" id="testimonials">
            <h2 className="text-4xl text-center">LightyearKids is loved by students and parents alike.</h2>
            <div className="flex gap-8">
                {data.testimonials.map(t => {
                    return (
                        <div className="shadow-lg rounded-md w-64 flex flex-col items-center" key={t.id}>
                            <img
                                className="object-cover rounded-t-md w-full h-48"
                                src={t.image}
                                alt={t.name}
                            />
                            <div className="flex flex-col gap-2 p-4">
                                <h3 className="text-3xl">{t.name}</h3>
                                <p>{t.testimonial}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}