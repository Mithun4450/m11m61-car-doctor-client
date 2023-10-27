import banner1 from "../../assets/images/banner/1.jpg"
import banner2 from "../../assets/images/banner/2.jpg"
import banner3 from "../../assets/images/banner/3.jpg"
import banner4 from "../../assets/images/banner/4.jpg"
import banner5 from "../../assets/images/banner/5.jpg"
import banner6 from "../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[80vh] my-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-6 pl-14 ">
                            <h1 className="text-white text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="text-white text-lg ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-[#FF3811] border-none text-white">Discover More</button>
                                <button className="btn btn-outline text-white border-white">Latest Project</button>
                            </div>
                      </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide6" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-6 pl-14 ">
                            <h1 className="text-white text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="text-white text-lg ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-[#FF3811] border-none text-white">Discover More</button>
                                <button className="btn btn-outline text-white border-white">Latest Project</button>
                            </div>
                      </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-6 pl-14 ">
                            <h1 className="text-white text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="text-white text-lg ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-[#FF3811] border-none text-white">Discover More</button>
                                <button className="btn btn-outline text-white border-white">Latest Project</button>
                            </div>
                      </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-6 pl-14 ">
                            <h1 className="text-white text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="text-white text-lg ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-[#FF3811] border-none text-white">Discover More</button>
                                <button className="btn btn-outline text-white border-white">Latest Project</button>
                            </div>
                      </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-6 pl-14 ">
                            <h1 className="text-white text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="text-white text-lg ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-[#FF3811] border-none text-white">Discover More</button>
                                <button className="btn btn-outline text-white border-white">Latest Project</button>
                            </div>
                      </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide6" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                      <div className="w-1/2 space-y-6 pl-14 ">
                            <h1 className="text-white text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="text-white text-lg ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5">
                                <button className="btn  bg-[#FF3811] border-none text-white">Discover More</button>
                                <button className="btn btn-outline text-white border-white">Latest Project</button>
                            </div>
                      </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;