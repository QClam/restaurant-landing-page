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
                <div>
                    <h1 className="py-8 tracking-wider text-2xl font-semibold
                     text-dark text-center">
                        Hãy tận hưởng sự khác biệt
                    </h1>

                    {/* text content section */}
                    <div className="space-y-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
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
                    <div className="space-y-10">
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
                    <div className="flex justify-center mt-10 sm:mt-14"> 
                        <PrimaryButton />
                    </div>
                </div>
                    
                    {/* image content section */}
                    <div className="absolute top-5 right-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
                        <img src={Leaf} alt="Ảnh Banner" className="max-w-[160px]"/>
                    </div>
                    <div className="absolute bottom-16 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
                        <img src={Tomato} alt="Ảnh Banner" className="max-w-[280px]"/>
                    </div>
                    <div className="absolute top-10 right-16 sm:bottom-0 sm:right-20 opacity-50 sm:opacity-100">
                        <img src={Lemon} alt="Ảnh Banner" className="max-w-[180px]"/>
                    </div>
                    <div className="hidden sm:block absolute bottom-0 right-0">
                        <img src={Apple} alt="Ảnh Banner" className="max-w-[200px]"/>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100">
                        <img src={Kiwi} alt="Ảnh Banner" className="max-w-[180px]"/>
                    </div>
            </div>
        </>
    );
};

export default Banner;
