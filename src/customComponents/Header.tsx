// import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import "../App.css";
// import { noScrollbarsClassName } from "react-remove-scroll-bar";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Ham from "../assets/hamburger.png";
import Logo from "../assets/arkaLight.png";
// type Props = {};
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import SearchBoxx from "@/components/section/SearchBoxx";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useSelector } from "react-redux";
// interface Blog {
//   views: number;
//   _id: string;
//   title: string;
//   subtitle: string;
//   content: string;
//   author: string;
//   date: string;
//   image: string;
//   imageCredit: string;
//   category: string;
//   relatedBlogs: string[];
//   __v: number;
// }
const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://arka-blogs-backend.onrender.com/api/v1/blog/getCategories")
      .then((response) => {
        console.log(response);
        setCategories(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="p-2 w-[100vw] bg-[#AF0D0D] items-center text-white flex justify-between">
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <img className="h-[30px] aspect-square" src={Ham} />
          </SheetTrigger>
          <SheetContent
            className=" lg:none bg-[#AF0D0D] text-white"
            side={"top"}
          >
            <SheetHeader>
              <SheetTitle>
                {/* <MagnifyingGlassIcon className="text-white" /> */}
                <SearchBoxx />
              </SheetTitle>
              <SheetDescription className="text-white flex flex-col  mont-serif-regular py-[20px] gap-[20px] font-bold text-[18px]">
                <div className="border-b-2 border-[gray-100] py-[10px]">
                  Category 1
                </div>
                <div className="border-b-2 border-[gray-100] py-[10px]">
                  Category 1
                </div>
                <div className="border-b-2 border-[gray-100] py-[10px]">
                  Category 1
                </div>
                <div className="border-b-2 border-[gray-100] py-[10px]">
                  Category 1
                </div>
                <div className="border-b-2 border-[gray-100] py-[10px]">
                  Category 1
                </div>
                <div className="flex mt-[20px] w-[100vw] justify-center gap-[40px]">
                  <div>
                    <Link to="https://www.facebook.com/people/Arka-Consultancy/61561972474059/">
                      <FaFacebook />
                    </Link>
                  </div>
                  <div>
                    <Link to="https://wa.me/+917087843059">
                      <FaWhatsapp />
                    </Link>
                  </div>
                  <div>
                    <SiGmail to="https://www.instagram.com/arkaconsultancyandco/" />
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block h-[50px]">
          <Link to="/">
            <img src={Logo} className="h-full aspect-square" alt="" />
          </Link>
        </div>
        <div className="text-[32px]  w-full text-center pt-serif-bold">
          <Link to="/">Arka Blogs</Link>
        </div>
        <div className="hidden lg:block">
          <SearchBoxx />
        </div>
      </div>
      <div className="w-[100vw] noScrollbarsClassName py-2 bg-[#AF0D0D] text-white mont-serif-regular">
        <ScrollArea className="noScrollbarsClassName w-[full]">
          <div className="flex noScrollbarsClassName justify-between space-x-4 p-2 lg:p-4">
            {categories?.map((categorie: any) => (
              <div className=" noScrollbarsClassName overflow-hidden text-center text-[14px] lg:text-[18px] min-w-[100px] lg:min-w-[200px] w-fit rounded-md">
                {/* <Link to={`/`}> */}
                <Link
                  to={`/category/${encodeURIComponent(categorie?.category)}`}
                >
                  {categorie?.category}
                </Link>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};

export default Header;
