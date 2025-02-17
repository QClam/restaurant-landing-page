import React from "react";
import Apple from "../../assets/png/apple.png";
import Kiwi from "../../assets/png/kiwi.png";
import Leaf from "../../assets/png/leaf.png";
import Lemon from "../../assets/png/lemon.png";
import Tomato from "../../assets/png/tomato.png";

import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
    return (
        <>
            <div className="container py-14 relative">
                <div className="relative z-20">
                    <h1 data-aos="fade-down" data-aos-delay="500" className="py-8 tracking-wider text-2xl font-semibold
                     text-dark text-center">
                        Hãy tận hưởng sự khác biệt
                    </h1>

                    {/* text content section */}
                    <div className="space-y-10">
                        <div data-aos="fade-right" data-aos-delay="500" className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                            <p>Chúng tôi hiểu được rằng <span
                                className="text-primary">thời gian </span>
                                là thứ quý giá nhất trên cuộc đời này.
                                Và dịch vụ giao đồ ăn
                                <span className="text-secondary"> Oách xà lách vô cùng </span>
                                chính là câu trả lời,
                                đảm bảo sẽ đem đến những thực đơn
                                cho những ai muốn ăn uống một cách
                                ngon lành những vẫn lành mạnh,
                                giúp tiết kiệm thời gian mua và chuẩn bị thực phẩm.</p>
                        </div>

                        <div></div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="500" className="space-y-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                            <div></div>

                            <p>Chúng tôi hiểu được rằng <span
                                className="text-primary">thời gian </span>
                                là thứ quý giá nhất trên cuộc đời này.
                                Và dịch vụ giao đồ ăn
                                <span className="text-secondary"> Oách xà lách vô cùng </span>
                                chính là câu trả lời,
                                đảm bảo sẽ đem đến những thực đơn
                                cho những ai muốn ăn uống một cách
                                ngon lành những vẫn lành mạnh,
                                giúp tiết kiệm thời gian mua và chuẩn bị thực phẩm.</p>
                        </div>
                    </div>

                    {/* button section */}
                    <div data-aos="fade-up" data-aos-delay="500"  className="flex justify-center mt-10 sm:mt-14 relative z-10"> 
                        <PrimaryButton />
                    </div>
                </div>
                    
                    {/* image content section */}
                    <div data-aos="zoom-in" data-aos-delay="500" className="absolute top-5 right-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
                        <img src={Leaf} alt="Ảnh Banner" className="max-w-[160px]"/>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="500" className="absolute bottom-16 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
                        <img src={Tomato} alt="Ảnh Banner" className="max-w-[280px]"/>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="500" className="absolute top-10 right-16 sm:bottom-0 sm:right-20 opacity-50 sm:opacity-100">
                        <img src={Lemon} alt="Ảnh Banner" className="max-w-[180px]"/>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="500" className="absolute hidden sm:block bottom-0 right-0">
                        <img src={Apple} alt="Ảnh Banner" className="max-w-[200px]"/>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="500" className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100">
                        <img src={Kiwi} alt="Ảnh Banner" className="max-w-[180px]"/>
                    </div>
            </div>
        </>
    );
};

export default Banner;
