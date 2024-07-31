import  { useEffect,useState } from "react";
import { useSelector } from "react-redux";

// type Props = {};
const TopCategoryCard = () => {
  const [blogData, setBlogData] = useState<any>(useSelector((state:any) => {
    state.updateSelectedBlog.allBlogs;
  }));

  useEffect(() => {
    setBlogData(blogData);
    console.log(blogData)
  },[blogData])
  return (
    <div className="flex gap-3 xs:gap-[10px] py-3 flex-col w-full lg:col-span-3">
      {blogData?.map(() => (
        <div className="px-4 lg:w-full h-[80px] xs:h-[100px] sm:h-fit gap-2 w-[100vw] items-center grid grid-cols-12 lg:grid-cols-1">
        <div className="col-span-3 lg:col-span-1 msm:h-[150px] md:h-[200px] aspect-square">
          <img
            className="h-full w-full object-cover"
            src={
              "https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
        <div className="flex h-[80%]  lg:col-span-1 overflow-hidden py-2 flex-col pt-serif-regular text-black col-span-9">
          <div className="border-b-[#AF0D0D] border-b-2 uppercase font-thin text-[18px]">
            
          </div>
          <div className="w-full mont-serif-regular ">
            {" "}
            Barbra Streisand, Cardi B, Cher & More Musicians React to Joe Biden
            Dropping Out of 2024 Presidential Race is the blog heading for t
          </div>
        </div>
      </div>
      ))}
      <div className="px-4 lg:w-full h-[80px] xs:h-[100px] sm:h-fit gap-2 w-[100vw] items-center grid grid-cols-12 lg:grid-cols-1">
        <div className="col-span-3 lg:col-span-1 msm:h-[150px] md:h-[200px] aspect-square">
          <img
            className="h-full w-full object-cover"
            src={
              "https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
        <div className="flex h-[80%]  lg:col-span-1 overflow-hidden py-2 flex-col pt-serif-regular text-black col-span-9">
          <div className="border-b-[#AF0D0D] border-b-2 uppercase font-thin text-[18px]">
            Category
          </div>
          <div className="w-full mont-serif-regular ">
            {" "}
            Barbra Streisand, Cardi B, Cher & More Musicians React to Joe Biden
            Dropping Out of 2024 Presidential Race is the blog heading for t
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TopCategoryCard;
