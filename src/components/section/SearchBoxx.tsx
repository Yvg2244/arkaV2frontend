import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "../ui/use-toast"; // Adjust the path if needed
import { Input } from "../ui/input";
import Search from "../../assets/search.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

// interface SearchBoxProps {
//   setBlogId: (blog: any) => void;
// }

const SearchBoxx = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [options, setOptions] = useState<any[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get(
          `https://arka-blogs-backend.onrender.com/api/v1/blog/search/${searchQuery}`
        );
        const exactData = response.data.message.exactMatch;
        const relatedData = response.data.message.similarBlogs;
        const relevantBlogs = [exactData, ...relatedData].filter(Boolean);
        
        setOptions(relevantBlogs);
        console.log(options);
        setDropdownVisible(true);

        // toast({
        //   description: "Results Displayed",
        // });
      } catch (error) {
        console.error(error);
        toast({
          description: "An error occurred, please try again",
        });
      }
    };

    if (searchQuery.length > 0) {
      fetchOptions();
    } else {
      setOptions([]);
    }
  }, [searchQuery]);

  const handleOptionClick = () => {
    setDropdownVisible(false);
    setSearchQuery("");
  };

  return (
    <div className="relative w-full right-[10px] border-[2px] rounded-[5px] border-white ">
      <Input
        className="pl-10 pr-4 py-2 text-white  border-none placeholder:text-white bg-transparent rounded-lg"
        type="text"
        id="default-search"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <img
        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white"
        src={Search}
      />

      {options.length > 0 && (
        <div
          className={`absolute top-full left-0 w-full max-h-52 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-50 ${
            isDropdownVisible ? "block" : "hidden"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <ScrollArea className="h-72 w-full">
            {options.map((option) => (
              <>
                <div key={option._id} className="border-b border-gray-200 ">
                  <Link
                    to={`/blog/${option._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      onClick={() => handleOptionClick()}
                      className="text-sm px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-all duration-200 ease-in-out text-black"
                    >
                      {option.title.length > 10
                        ? `${option.title}`
                        : option.title}
                    </div>
                  </Link>
                </div>
                <Separator className="bg-red-100" />
              </>
            ))}
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

export default SearchBoxx;
