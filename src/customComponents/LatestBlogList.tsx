import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
export interface BlogDataInterface {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  author: string;
  date: Date;
  image?: string;
  imageCredit?: string;
  category: string;
  relatedBlogs?: any[];
}
const LatestBlogList = (props: any) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Assuming props.blogData is initially empty or undefined, and then filled with data
    if (props.blogData && props.blogData.length > 0) {
      setLoading(false);
    }
  }, [props.blogData]);

  return (
    <div className="p-4 lg:col-span-3">
      <Table className="w-full relative ">
        <TableHeader className="">
          <TableRow className="flex w-full border-t-[10px]  border-t-[#AF0D0D] bg-white pt-4 flex-col">
            <TableHead className="w-[full] pt-2 font-bold mono-serif-bold text-[#AF0D0D] text-[24px]">
              Latest Blogs
            </TableHead>
          </TableRow>
        </TableHeader>
        <ScrollArea className="h-[200px] ">
        <TableBody>
          {loading ? (
            <>
              <Skeleton className="h-12 w-full mb-4"></Skeleton>
              <Skeleton className="h-12 w-full mb-4"></Skeleton>
              <Skeleton className="h-12 w-full mb-4"></Skeleton>
            </>
          ) : (
            props.blogData.slice().reverse().map((blog: any) => (
              <Link key={blog._id} to={`/blog/${blog._id}`} style={{ textDecoration: "none" }}>
                <TableRow
                  className="cursor-pointer"
                  onClick={() => {
                    props.setBlogId(blog);
                  }}
                >
                  <TableCell className="w-[100vw] text-[16px] font-medium">
                    <div>{blog.title}</div>
                    <div className="font-semibold mt-4 text-[#AF0D0D] text-[12px]">
                      2d Ago
                    </div>
                  </TableCell>
                </TableRow>
              </Link>
            ))
          )}
        </TableBody>
        </ScrollArea>
        {/* <button className="bg-[#AF0D0D] text-[18px] w-full text-white font-bold py-4 px-4 ">
          View All Blogs
        </button> */}
      </Table>
    </div>
  );
};

export default LatestBlogList;
