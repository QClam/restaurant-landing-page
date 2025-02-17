import React from "react";
import { BiSolidPhone } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className="text-white mt-20">
                <div data-aos="fade-down" data-aos-delay="500"  className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
                    <h1 className="py-10 text-3xl font-bold text-center">Liên hệ với Chúng tôi</h1>

                    {/* grid section  */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">

                        {/* Address section  */}
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <IoLocationSharp className="text-5xl" />
                            </div>
                            <p>Tổ 22, Ấp Bắc 2, Xã Hòa Long, Thành phố Bà Rịa, Tỉnh Bà Rịa Vũng Tàu</p>
                        </div>

                        {/* Email section  */}
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <MdEmail className="text-5xl" />
                            </div>
                            <p>quyhxse1911@gmail.com</p>
                            <p>hoangxuanquy.dev.fe@gmail.com</p>
                        </div>

                        {/* Phone number section  */}
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <BiSolidPhone className="text-5xl" />
                            </div>
                            <p>+84 979926542 - Hoàng Xuân Quý</p>
                            <p>+84 653281039 - Xuân Quý</p>
                            <p>+84 927118123 -  Quý</p>
                        </div>
                    </div>

                    {/* copyright */}
                    <div className="flex justify-between p-4 items-center">
                        &copy; {new Date().getFullYear()} Nhà Hàng Xanh. All rights reserved.
                        <div className="flex space-x-4">
                            <a href="#">Chính sách bảo mật</a>
                            <a href="#">Nội dung và Điều khoản</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
