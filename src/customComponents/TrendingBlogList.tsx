import { useEffect, useState } from "react";
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

const TrendingBlogList = (props: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.blogData && props.blogData.length > 0) {
      setLoading(false);
    }
  }, [props.blogData]);

  return (
    <div className="p-4">
      <Table className="w-full border-t-[10px] border-t-[#AF0D0D]">
        <TableHeader>
          <TableRow className="flex w-full pt-4 flex-col">
            <TableHead className="w-[full] h-fit leading-8 pt-2 font-bold mono-serif-bold text-[#AF0D0D] text-[22px]">
              Other Blogs that may help
            </TableHead>
          </TableRow>
        </TableHeader>
        <ScrollArea className="h-[200px] ">
          <TableBody>
            {loading ? (
              <>
                <Skeleton className="h-[100px] w-full mb-4"></Skeleton>
                <Skeleton className="h-[100px] w-full mb-4"></Skeleton>
                <Skeleton className="h-[100px] w-full mb-4"></Skeleton>
              </>
            ) : (
              props.blogData
                .slice()
                .reverse()
                .map((blog: any, index: number) => (
                  <TableRow className="cursor-pointer" key={blog._id}>
                    <Link
                      to={`/blog/${blog._id}`}
                      style={{ textDecoration: "none" }}
                      onClick={(e) => {
                        // Prevent default behavior of Link
                        e.preventDefault();
                        // Trigger a full page reload
                        window.location.href = `/blog/${blog._id}`;
                      }}
                    >
                      <TableCell className="w-[90%] h-[100px] text-[16px] font-medium">
                        <div className="flex h-[50px]">
                          <div className="h-[100%] border-r-1 mont-serif-regular border-r-black text-[30px] text-[#AF0D0D] aspect-square flex items-center justify-center ">
                            {index + 1}.
                          </div>
                          <div className="px-4 py-1 overflow-hidden h-full flex font-serif-regular">
                            {blog.title}
                          </div>
                        </div>
                      </TableCell>
                    </Link>
                  </TableRow>
                ))
            )}
          </TableBody>
        </ScrollArea>
        {/* <button className="bg-[#AF0D0D] text-[18px] w-full text-white font-bold py-4 px-4">
          View All Blogs
        </button> */}
      </Table>
    </div>
  );
};

export default TrendingBlogList;
