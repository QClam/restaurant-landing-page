import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Popup = ({ showPopup, setShowPopup }) => {

    const [user, setUser] = useState(null);

    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: {
                        Authorization: `Bearer ${response.access_token}`,
                    }
                })
                setUser(res.data)
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        },
    });


    const logout = () => {
        setUser(null); // Xóa thông tin user khi đăng xuất
    };

    return (
        <>
            {
                showPopup && (
                    <div>
                        <div className="h-screen w-screen fixed top-0 left-0 bg-black-50 z-50 backdrop-blur-sm">
                            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md
                            duration-200 w-[300px]">
                                {/* header-section  */}
                                <div className="flex items-center justify-between">
                                    <div><h1 className='text-2xl font-bold text-dark'>Login</h1></div>
                                    <div><IoCloseOutline className='text-2xl cursor-pointer' onClick={() => setShowPopup(false)} /></div>
                                </div>
                                <div className='mt-4'>
                                    {/* <GoogleLogin
                                        onSuccess={credentialResponse => {
                                            const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
                                            console.log(credentialResponseDecoded);
                                        }}
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}
                                    /> */}
                                    {user ? (
                                        <div className="text-center">
                                            <p className="text-lg font-semibold">Xin chào, {user.name} 👋</p>
                                            <button className="mt-4 bg-secondary text-white p-2 rounded-md hover:bg-primaryDark" onClick={logout}>
                                                Đăng xuất
                                            </button>
                                        </div>
                                    ) : (
                                        <button className='bg-primary rounded-md text-white p-4 cursor-pointer hover:bg-secondary' onClick={() => login()}>
                                            Đăng nhập bằng Google 🚀
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Popup