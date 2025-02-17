import React from "react";
import BgPolygon from '../../assets/polygon.png';
import WaveVector from '../../assets/vector-wave.png';

import { FaUser } from "react-icons/fa";

const BgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
};

const About = () => {
    return (
        <>
            <div data-aos="zoom-out" data-aos-delay="500" style={BgStyle} className="py-14">
                <div className="container min-h-[500px] relative z-10">
                    <h1 className="pt-20 tracking-wider text-4xl font-semibold
                     text-white text-center">Giới thiệu</h1>

                    {/* card section */}
                    <div className="bg-white/80 p-10 my-10">
                        Chào mừng bạn đến với <span className="text-primary">Nhà Hàng Xanh</span>, nơi mang đến những món ăn thuần tự nhiên, 
                        giàu dinh dưỡng và tốt cho sức khỏe. Chúng tôi tự hào là nhà hàng chuyên về rau củ, 
                        trái cây và các loại ngũ cốc, không chỉ phục vụ tại chỗ mà còn cung cấp dịch vụ giao hàng tận nơi, 
                        giúp bạn thưởng thức những bữa ăn lành mạnh mọi lúc, mọi nơi. Hãy để <span className="text-primary">Nhà Hàng Xanh </span>
                        đồng hành cùng bạn trên hành trình ăn sạch, sống khỏe! Đặt món ngay hôm nay và tận 
                        hưởng hương vị thuần khiết từ thiên nhiên.
                        <div className="pt-10 flex justify-center">
                            <button className="flex justify-center items-center 
                            gap-2 bg-primary text-white px-5 py-2 
                            rounded-md hover:scale-105 duration-300">
                                <FaUser />
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                </div>

                {/* wave vector */}
                <div className="absolute top-0 right-0 w-full">
                    <img src={WaveVector} alt="" className="w-[1700px] mx-auto" />
                </div>
            </div>
        </>
    );
};

export default About;
