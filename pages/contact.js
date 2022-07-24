import ContactForm from "../components/ContactForm"


const contact = () => {
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                <ContactForm />
            </div>
        </section>
    )
}

export default contact