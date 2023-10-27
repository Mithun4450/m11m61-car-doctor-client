import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {

    const {_id, title, img, price} = service;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img  src={img} alt="" className="rounded-xl h-56" />
                </figure>
                <div className="card-body   ">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between items-center text-[#FF3811]">
                        <p>Price: {price}</p>

                        <Link to={`/checkout/${_id}`}>
                            <button className="btn text-[#FF3811] text-2xl bg-white border-none  ">
                            <RiArrowRightLine></RiArrowRightLine>
                            </button>
                        </Link>
                       
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceCard;