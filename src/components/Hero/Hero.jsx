import React from "react";
import HeroImg from "../../assets/hero.png";
import HeroBg from "../../assets/heroBg.png";
import PrimaryButton from "../Shared/PrimaryButton";

const BgStyle = { 
    backgroundImage: `url(${HeroBg})`, 
    backgroundRepeat: "no-repeat", 
    backgroundPosition: "center", 
    backgroundSize: "cover", 
    width: "100%",
    height: "100%", 
    };

const Hero = () => {
    return (
        <>
            <div style={BgStyle} className="relative z-[-1]">
                <div className="container py-16 sm:py-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-screen">
                        {/* text content section */}
                        <div className="space-y-7 text-dark order-2 sm:order-1">
                            <h1 className="text-6xl">
                                Thực đơn cho bữa ăn <br />
                                <span className="text-secondary font-cursive text-7xl">
                                    Tươi Ngon & Lành Mạnh
                                </span>
                            </h1>
                            <p className="lg:pr-64">
                                Bữa ăn ngon sẽ được giao đến cho bạn chỉ từ 49.000đ
                            </p>

                            {/* button section */}
                            <div>
                                <PrimaryButton />
                            </div>
                        </div>

                        {/* image content section */}
                        <div className="order-1 sm:order-2 relative z-30">
                            <img
                                src={HeroImg}
                                alt="Ảnh Banner"
                                className="w-full sm:scale-100 sm:translate-y-16"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
