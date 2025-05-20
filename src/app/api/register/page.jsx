"use client";
import axios from "axios";
import { Eye, EyeOff, Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [images, setImages] = useState(null);
  const route = useRouter();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImages(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    setLoginLoading(true);
    const formData = new FormData();
    if (images) {
      formData.append("image", images);
    } else {
      console.error("No image selected!");
      return;
    }

    const response = await axios.post(
      "https://api.imgbb.com/1/upload",
      formData,
      {
        params: {
          key: process.env.NEXT_PUBLIC_ImageBB_API_Key,
        },
      }
    );

    const image = await response.data.data.url;
    try {
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/User`,
        {
          name,
          email,
          password,
          image,
        }
      );
      // console.log(resp);
      if (resp.data.status === 409) {
        toast.error("You already have an account, please log in.");
      }
      if (resp.data.status === 200) {
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        if (res.status === 200) {
          route.push("/");
          toast.success("Register Success");
        }
      }
      setLoginLoading(false);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center my-[20px] md:my-[100px]">
      <div className="border-2 border-[#e5e5e5] rounded-md">
        <div className="md:px-[60px] px-[20px] pb-[20px] md:pb-14">
          <h1 className="text-center text-lg md:text-2xl my-4 md:my-10 uppercase">
            Register
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-500">Username *</label>
              <br />
              <input
                type="text"
                name="name"
                required
                className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px] border-[#e5e5e5] outline-none rounded-none"
              />
            </div>
            <div className="mb-2">
              <label className="text-gray-500">Select Photo *</label>
              <br />
              <input
                onChange={handleImageChange}
                type="file"
                required
                className="file-input w-full bg-[#f3f4f7] border-[#e5e5e5] text-gray-500 rounded-none py-[6px] outline-none px-5"
              />
            </div>
            <div>
              <label className="text-gray-500">Email address *</label>
              <br />
              <input
                type="text"
                name="email"
                required
                className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none border-[#e5e5e5]"
              />
            </div>
            <div className="relative">
              <label className="text-gray-500">Password *</label>
              <br />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                className="md:py-[10px] py-2 mt-2 border-[#e5e5e5] px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
              />
              {showPassword ? (
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[45px] right-[10px] cursor-pointer"
                >
                  <Eye size={20} className="text-gray-500" />
                </span>
              ) : (
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[45px] right-[10px] cursor-pointer"
                >
                  <EyeOff size={20} className="text-gray-500" />
                </span>
              )}
            </div>
            {loginLoading ? (
              <h2 className="bg-[#074c3e] text-white flex items-center justify-center text-lg w-full py-[10px] mt-4">
                <Loader className="animate-spin" size={25} />
              </h2>
            ) : (
              <button className="bg-[#074c3e] text-white cursor-pointer text-lg w-full py-[10px] mt-4">
                Register
              </button>
            )}
          </form>
          <div>
            <h2 className="mt-4 text-gray-500">
              You Have Already Account ?{" "}
              <Link href="/api/login" className="text-[#074c3e]">
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
