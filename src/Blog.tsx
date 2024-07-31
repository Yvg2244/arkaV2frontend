import { useEffect, useState } from "react";
import "./App.css";
import LatestBlogList from "./customComponents/LatestBlogList";
import axios from "axios";

import TopCategoryCard from "./customComponents/HeroSection/TopCategoryCard";
import TrendingBlogList from "./customComponents/TrendingBlogList";

import { useDispatch } from "react-redux";
import { setBlog } from "./store/blogReducer";


function Blog() {
  const dispatch = useDispatch();
  const [blogData, setBlogData] = useState<any>([]);

  const [blogId, setBlogId] = useState("sdf");
  console.log(blogId);
  useEffect(() => {
    axios
      .get("https://arka-blogs-backend.onrender.com/api/v1/blog/getblogs")
      .then((response) => {
        dispatch(setBlog([response?.data?.message]));
        // console.log(response.data.message);
        setBlogData(response.data.message);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {}, [blogData]);
  return (
    <>
      <div className="lg:hidden">
        <div className=" lg:hidden HeroCard items-start p-4 justify-end flex-col flex bg-center cover h-[50vh] bg-[url('https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-[100vw]">
          <div className="text-white bg-[#AF0D0D] h-fit  text-[18px] pt-serif-bold">
            Top Stories
          </div>
          <div className="text-white mont-serif-regular font-semibold text-[20px] pt-serif-bold">
            Have you visited the Arka 2.0. Read all the services we provide.
          </div>
        </div>
        <TopCategoryCard />
        <LatestBlogList setBlogId={setBlogId} blogData={blogData} />
        <TrendingBlogList setBlogId={setBlogId} blogData={blogData} />
      </div>
      
      <div className="hidden grid-cols-12 px-[10vw] lg:grid">
        <TopCategoryCard />
        <div className="HeroCard mt-[16px] col-span-6 items-start p-4 justify-end flex-col flex bg-center cover h-[50vh] bg-[url('https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
          <div className="text-white bg-[#AF0D0D] h-fit  text-[18px] pt-serif-bold">
            Top Stories
          </div>
          <div className="text-white mont-serif-regular font-semibold text-[20px] pt-serif-bold">
            Have you visited the Arka 2.0. Read all the services we provide.
          </div>
        </div>
        <div className="flex flex-col gap-[16px] col-span-3">
          <LatestBlogList setBlogId={setBlogId} blogData={blogData} />
          <TrendingBlogList setBlogId={setBlogId} blogData={blogData} />
        </div>
      </div>
    </>
  );
}

export default Blog;
