import React from "react";
import { FaBus } from "react-icons/fa";

const WhyChooseUs = () => {
    return (
        <>
            <div className="py-14 md:py-28 bg-gray-50">
                <div className="container">
                    <h1 data-aos="fade-down" data-aos-delay="500" className="pb-16 tracking-wider text-2xl font-semibold
                     text-dark text-center">Tại sao lại chọn Chúng tôi</h1>

                    {/* card section */}
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap4">

                            {/* 1st card */}
                            <div data-aos="fade-right" data-aos-delay="500" className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <p className="text-dark/70 font-semibold">Thực phẩm tươi sạch – Chúng tôi tuyển chọn nguyên liệu từ các nông trại đạt chuẩn, đảm bảo không hóa chất độc hại.</p>
                                <p className="text-5xl rotate-90 text-primary text-center translate-x-[18px]">....</p>
                                <FaBus className="text-5xl text-primary" />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="500" className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <FaBus className="text-5xl text-secondary" />
                                <p className="text-5xl rotate-90 text-secondary text-center translate-x-[18px]">....</p>
                                <p className="text-dark/70 font-semibold">Thực đơn đa dạng – Các món ăn sáng tạo, kết hợp hoàn hảo giữa rau củ, trái cây và ngũ cốc, mang lại hương vị tuyệt vời.</p>
                            </div>
                            <div data-aos="fade-down" data-aos-delay="500" className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <p className="text-dark/70 font-semibold">Dịch vụ giao hàng nhanh chóng – Dù bạn ở đâu, chúng tôi vẫn mang đến tận tay bạn những bữa ăn bổ dưỡng, chất lượng.</p>
                                <p className="text-5xl rotate-90 text-primary text-center translate-x-[18px]">....</p>
                                <FaBus className="text-5xl text-primary" />
                            </div>
                            <div data-aos="fade-left" data-aos-delay="500" className="text-center flex justify-center items-center flex-col gap-2 px-2">
                                <FaBus className="text-5xl text-secondary" />
                                <p className="text-5xl rotate-90 text-secondary text-center translate-x-[18px]">....</p>
                                <p className="text-dark/70 font-semibold"> Cam kết sức khỏe và môi trường – Hướng đến phong cách sống xanh, bền vững, tốt cho cơ thể và Trái Đất.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseUs;
