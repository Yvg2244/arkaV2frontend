import {
  useEffect,
  useState,
} from "react";

import LatestBlogList from "../customComponents/LatestBlogList";
import axios from "axios";

import TopCategoryCard from "../customComponents/HeroSection/TopCategoryCard";
import TrendingBlogList from "../customComponents/TrendingBlogList";

import { useDispatch } from "react-redux";
import { setBlog } from "../store/blogReducer";
import { Link, useParams } from "react-router-dom";
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
// import { ScrollArea } from "@radix-ui/react-scroll-area";
// import { Skeleton } from "primereact/skeleton";
// import {  useParams } from "react-router-dom";

function CategoryCard() {
  const dispatch = useDispatch();
  const { category } = useParams<{ category: string }>();

  const [blogData, setBlogData] = useState<any>([]);
  const [categoryList, setCategoryList] = useState<any>([]);
  const [blogId, setBlogId] = useState(""); //
  useEffect(() => {
    axios
      .get("https://arka-blogs-backend.onrender.com/api/v1/blog/getblogs")
      .then((response) => {
        dispatch(setBlog([response?.data?.message]));
        // console.log(response.data.message);
        setBlogData(response.data.message);
      })

      .catch((error) => {
        console.log(error, blogId);
      });
  }, []);
  useEffect(() => {
    console.log(category);
    axios
      .get(
        `https://arka-blogs-backend.onrender.com/api/v1/blog/getBlogByCategory/${category}`
      )
      .then((response) => {
        // console.log(response);
        setCategoryList(response.data.data.listOfBlogs);
        console.log("list", categoryList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);
  return (
    <>
      <div className="lg:hidden">
        <div className="overflow-auto h-[50vh]">
          {categoryList.length > 0 &&
            categoryList.map(
              (blogItem: {
                _id: any;
                title: any;
                image: any;
                subtitle: any;
              }) => {
                return (
                  <Link
                    key={blogItem._id}
                    to={`/blog/${blogItem._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      key={blogItem.title} // Adding a unique key for each item
                      className="lg:hidden HeroCard items-start p-4 justify-end flex-col flex bg-center cover h-[50vh] w-[100vw] mb-4"
                      onClick={() => {
                        return;
                      }}
                    >
                      <div className="relative w-full h-[30vh]">
                        <img
                          className="absolute inset-0 object-contain w-full h-full"
                          src={blogItem?.image}
                          alt="Blog visual"
                        />
                      </div>
                      <div className="text-white bg-[#AF0D0D] h-fit text-[18px] pt-serif-bold">
                        {blogItem?.title}
                      </div>
                      <div className="text-black mont-serif-regular font-semibold text-[20px] pt-serif-bold">
                        {blogItem?.subtitle}
                      </div>
                    </div>
                  </Link>
                );
              }
            )}
        </div>

        <TopCategoryCard />
        <LatestBlogList setBlogId={setBlogId} blogData={blogData} />
        <TrendingBlogList setBlogId={setBlogId} blogData={blogData} />
      </div>

      <div className="hidden grid-cols-12 px-[10vw] lg:grid">
        {/* Top Category Card */}
        <div className="col-span-12 lg:col-span-3 h-full">
          <TopCategoryCard />
        </div>

        {/* Overflow Container for Blog Items */}
        <div className="col-span-12 lg:col-span-6 overflow-y-auto h-[70vh] flex flex-col">
          {categoryList.length > 0 &&
            categoryList.map(
              (blogItem: {
                _id: any;
                title: any;
                image: any;
                subtitle: any;
              }) => {
                return (
                  <Link
                    key={blogItem._id}
                    to={`/blog/${blogItem._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="HeroCard mt-[16px] col-span-6 items-start p-4 justify-end flex-col flex bg-center cover h-[50vh]">
                      <div className="relative w-[30vw] h-[30vh]">
                        <img
                          className="absolute inset-0 object-contain w-full h-full"
                          src={blogItem?.image}
                          alt="Blog visual"
                        />
                      </div>
                      <div className="text-white bg-[#AF0D0D] h-fit  text-[18px] pt-serif-bold">
                        {blogItem?.title}
                      </div>
                      <div className="text-black mont-serif-regular font-semibold text-[20px] pt-serif-bold">
                        {blogItem?.subtitle}
                      </div>
                    </div>
                  </Link>
                );
              }
            )}
        </div>
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-[16px] h-full">
          <LatestBlogList setBlogId={setBlogId} blogData={blogData} />
          <TrendingBlogList setBlogId={setBlogId} blogData={blogData} />
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
