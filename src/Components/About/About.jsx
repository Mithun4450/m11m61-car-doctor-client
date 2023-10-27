import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 relative">
                        <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className=" w-1/2 rounded-lg shadow-2xl absolute top-1/2 left-1/2 border-8 border-white" />
                    </div>
                    <div className="w-1/2">
                        <h3 className="text-2xl font-bold text-[#FF3811] mb-4 ">About Us</h3>
                        <h1 className="text-5xl font-bold mb-4">We are qualified & of experience in this field</h1>
                        <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                        <p className="py-3 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                        <button className="btn bg-[#FF3811] text-white">Get More Info</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;