import  { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "../App.css";
import "quill/dist/quill.snow.css";
// import { Typography } from "@mui/material";
import TrendingBlogList from "./TrendingBlogList";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBlog } from "@/store/blogReducer";
import { Skeleton } from "@/components/ui/skeleton";

const BlogCard = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<any>(null);
  const [blogData, setBlogData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  function formatDate(isoString:any) {
    const date = new Date(isoString);
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    // const hours = String(date.getHours()).padStart(2, '0');
    // const minutes = String(date.getMinutes()).padStart(2, '0');
    // const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://arka-blogs-backend.onrender.com/api/v1/blog/getblogs")
      .then((response) => {
        dispatch(setBlog(response.data.message));
        setBlogData(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    axios
      .get(`https://arka-blogs-backend.onrender.com/api/v1/blog/getblog/${id}`)
      .then((response) => {
        setData(response.data.message);
        console.log(response.data.message);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="col-span-8 grid justify-center">
      <Card className='max-w-[800px] w-[100vw]'>
        <CardHeader className="grid grid-cols-2">
          {loading ? (
            <>
              <Skeleton className="h-4 w-20 mb-4" />
              <Skeleton className="h-4 w-20 mb-4" />
              <Skeleton className="h-8 w-full mb-4" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-4 w-20 mb-4" />
            </>
          ) : (
            <>
              <CardDescription className="w-fit text-left text-muted-foreground border-b-2 border-[#AF0D0D]  pb-1">
                {data?.category}
              </CardDescription>
              <CardDescription className=" w-full text-right text-muted-foreground   pb-1">
                {data?.date?formatDate(data.date):"Fetching Date"}
              </CardDescription>
              <CardTitle className="col-span-2 text-[32px] mont-serif-bold font-bold">
                {data?.title}
              </CardTitle>
              <CardDescription className="col-span-2 text-[24px] mont-serif-regular font-semibold">
                {data?.subtitle}
              </CardDescription>
              <CardDescription className="col-span-2 text-[14px] pt-serif-regular font-semibold text-[#AF0D0D]">
                By <br/>
                {data?.author}
              </CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <Skeleton className="h-64 w-full mb-4" />
          ) : (
            <>
              <img
                className="max-w-[100%] w-[100vw]"
                src={data?.image}
                alt="Blog visual"
              />
              <div className="px-4 py-2 pb-4 border-b-2 border-2 border-b-gray-200 text-[14px] text-gray-400">
                {data?.imageCredit}
              </div>
              <div
                className="content leading-[30px]"
                dangerouslySetInnerHTML={{ __html: data?.content }}
              />
            </>
          )}
        </CardContent>
        <CardFooter>
          <br />
        </CardFooter>
      </Card>
      <TrendingBlogList blogData={blogData} />
    </div>
  );
};

export default BlogCard;
