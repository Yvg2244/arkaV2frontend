import { useEffect, useState } from "react";
import Twitter from "./assets/TwitterX.png";
import { InlineWidget } from "react-calendly";
import { MdEmail } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import "./landingpage.css";
import s1 from "./assets/s(1).png";
import s2 from "./assets/s(2).png";
import s3 from "./assets/s(3).png";
import s4 from "./assets/s(4).png";
import s5 from "./assets/s(5).png";
import s6 from "./assets/s(6).png";
import s7 from "./assets/s(7).png";

import { ScrollArea } from "@radix-ui/react-scroll-area";
const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const content: any = document.querySelector(".hero .content");
    const illustration: any = document.querySelector(".hero .illustration");
    const section: any = document.querySelector(".section");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (content) {
        content.style.transform = `translateX(${scrollPosition * -0.5}px)`;
      }
      if (illustration) {
        illustration.style.transform = `translateX(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("visible");
          section.classList.remove("hidden");
        }
      });
    }, observerOptions);

    if (section) {
      observer.observe(section);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      const cards = document.querySelectorAll(".card");

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, observerOptions);

      cards.forEach((card) => {
        observer.observe(card);
      });
    });
  }, []);

  return (
    <div className="">
      <header className="relative mont-serif-regular">
        <div className="navbar flex items-center justify-between px-8 py-4 bg-[#7b0505] text-white">
          <div className="logo  h-16 md:h-24 w-auto bg-white rounded-full p-2">
            <img src="./assets/logo.png" alt="Logo" className="h-full w-auto" />
          </div>
          <nav className="hidden md:block md:flex">
            <ul className="flex space-x-8">
              <li>
                <a className="font-medium hover:text-blue-300" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="font-medium hover:text-blue-300" href="#about">
                  About us
                </a>
              </li>
              <li>
                <a className="font-medium hover:text-blue-300" href="#service">
                  Services
                </a>
              </li>
              <li>
                <a className="font-medium hover:text-blue-300" href="#work">
                  Work
                </a>
              </li>
              <li>
                <a className="font-medium hover:text-blue-300" href="#contact">
                  Contact us
                </a>
              </li>
              <li>
                <a className="font-medium hover:text-blue-300" href="/blog">
                  Blogs
                </a>
              </li>
            </ul>
          </nav>

          <div className="social-icons hidden md:flex space-x-4">
            <a href="https://www.facebook.com/people/Arka-Consultancy/61561972474059/">
              <img src="./assets/Facebook.png" alt="Facebook" className="h-6" />
            </a>
            <a href="https://wa.me/+917087843059">
              <img src="./assets/WhatsApp.png" alt="WhatsApp" className="h-6" />
            </a>
            <a href="https://www.instagram.com/arkaconsultancyandco/">
              <img
                src="./assets/Instagram.png"
                alt="Instagram"
                className="h-6"
              />
            </a>
            <a href="https://x.com/ConsultancyArka">
              <img src={Twitter} alt="Twitter" className="h-6" />
            </a>
          </div>
        </div>

        <div
          className={`hamburger z-[100] absolute top-[5vw] right-[5vw] cursor-pointer md:hidden ${
            isMenuOpen ? "open" : ""
          }`}
          onClick={handleHamburgerClick}
        >
          <div className="bar bg-white h-1 my-1 w-6"></div>
          <div className="bar bg-white h-1 my-1 w-6"></div>
          <div className="bar bg-white h-1 my-1 w-6"></div>
        </div>

        <div
          className={`side-window glass fixed top-10 mont-serif-regular right-0 w-[60vw] bg-red-700 text-white h-[100vh] z-[50] transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          <div className="nav-links flex flex-col justify-between px-4 py-8">
            <a
              className="block py-2 px-4 hover:bg-red-600"
              href="#home"
              onClick={handleLinkClick}
            >
              Home
            </a>
            <a
              className="block py-2 px-4 hover:bg-red-600"
              href="#about"
              onClick={handleLinkClick}
            >
              About us
            </a>
            <a
              className="block py-2 px-4 hover:bg-red-600"
              href="#service"
              onClick={handleLinkClick}
            >
              Services
            </a>
            <a
              className="block py-2 px-4 hover:bg-red-600"
              href="#work"
              onClick={handleLinkClick}
            >
              Work
            </a>
            <a
              className="block py-2 px-4 hover:bg-red-600"
              href="#contact"
              onClick={handleLinkClick}
            >
              Contact us
            </a>
            <a className="font-medium hover:text-blue-300" href="/blog">
              Blogs
            </a>
          </div>
          <div className="social-icons flex justify-between space-x-4 p-4">
            <a href="https://www.facebook.com/people/Arka-Consultancy/61561972474059/">
              <img src="./assets/Facebook.png" alt="Facebook" className="h-6" />
            </a>
            <a href="https://wa.me/+917087843059">
              <img src="./assets/WhatsApp.png" alt="WhatsApp" className="h-6" />
            </a>
            <a href="https://www.instagram.com/arkaconsultancyandco/">
              <img
                src="./assets/Instagram.png"
                alt="Instagram"
                className="h-6"
              />
            </a>
            <a href="https://x.com/ConsultancyArka">
              <img src={Twitter} alt="Twitter" className="h-6" />
            </a>
          </div>
        </div>
      </header>
      <section
        id="home"
        className="relative overflow-hidden bg-[#7b0505] flex flex-col lg:flex-row items-center justify-between  h-fit min-h-[100vh] p-8 lg:p-16 hero"
      >
        <div className="content max-w-2xl pt-serif-regular text-center lg:text-left mb-8 lg:mb-0 animate-slideInFromLeft">
          <div className="text-8xl text-white mb-4">ARKA</div>
          <h1 className="text-4xl lg:text-5xl uppercase mont-serif-regular text-white mb-4 ">
            Consultancy And Co.
          </h1>
          <p className="text-lg text-justify mont-serif-regular text-gray-200 mb-6">
            Our goal is to be a one-stop solution for all your business needs.
            Our team of experts in every department is dedicated to
            understanding and fulfilling your requirements. With Arka
            Consultancy, you can enjoy peace of mind knowing that we handle the
            complexities, allowing you to focus on what you do best.
          </p>
          <Link
            to="#clients"
            className="lightbtn mont-serif-regular border-white border-2 hover:bg-[#7b0505] hover:text-white"
          >
            See Work
          </Link>
        </div>
        <div className="illustration max-w-sm lg:max-w-md animate-slideInFromRight">
          <img
            src="./assets/new logo.webp"
            alt="Illustration of team"
            className="w-full h-auto"
          />
        </div>
      </section>
      <section className="section lg:px-32 flex flex-col items-center mont-serif-regular relative py-16 sm:px-20 ">
        <div className="text-lg mb-4 text-[#7b0505] mont-serif-bold">
          Who we are?
        </div>
        <h2 className="text-3xl text-center pop font-extrabold mb-4">
          We're built for Creative teams
        </h2>
        <p className="mb-4 text-justify">
          At Review Academy, we began our journey in May 2021 by managing social
          media for companies and teaching digital marketing basics. As we grew,
          we recognized the many challenges businesses often face in finding
          diverse talent for various needs, leading to management issues and
          inefficiencies.
        </p>
        <p className="mb-6 text-justify">
          To address this, we founded Arka Consultancy. Our goal is to be a
          one-stop solution for all your business needs. Our team of experts in
          every department is dedicated to understanding and fulfilling your
          requirements. With Arka Consultancy, you can enjoy peace of mind
          knowing that we handle the complexities, allowing you to focus on what
          you do best.
        </p>
        <a href="#contact" className=" lightbtn font-bold">
          Contact Us
        </a>
        <div className="scroll-container">
          <div className="scroll-images mt-8 overflow-hidden w-[100vw]">
            <div className="flex-shrink-0 p-2">
              <img src={s1} alt={`Client`} className="w-32 h-32 object-cover" />
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s2}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center font-semibold">AI</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s3}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center font-semibold">Marketing</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s4}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Content Creation
              </div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s5}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">SEO</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s6}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Email Marketing
              </div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s7}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Social Media
              </div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img src={s1} alt={`Client`} className="w-32 h-32 object-cover" />
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s2}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center font-semibold">AI</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s3}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center font-semibold">Marketing</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s4}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Content Creation
              </div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s5}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">SEO</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s6}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Email Marketing
              </div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s7}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Social Media
              </div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img src={s1} alt={`Client`} className="w-32 h-32 object-cover" />
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s2}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center font-semibold">AI</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s3}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center font-semibold">Marketing</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s4}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Content Creation
              </div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s5}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">SEO</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s6}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Email Marketing
              </div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s7}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Social Media
              </div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img src={s1} alt={`Client`} className="w-32 h-32 object-cover" />
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s2}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center font-semibold">AI</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s3}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center font-semibold">Marketing</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s4}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Content Creation
              </div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s5}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">SEO</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s6}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Email Marketing
              </div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s7}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Social Media
              </div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img src={s1} alt={`Client`} className="w-32 h-32 object-cover" />
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s2}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center font-semibold">AI</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s3}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center font-semibold">Marketing</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s4}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Content Creation
              </div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s5}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">SEO</div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s6}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Email Marketing
              </div>
            </div>
            <div className="flex-shrink-0 p-2">
              <img
                src={s7}
                alt={`Client`}
                className="w-32 h-32 object-cover rounded-[100%]"
              />
              <div className="text-center w-[100%] font-semibold">
                Social Media
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container w-[100vw] max-w-none bg-[#7b0505] p-0 px-4 lg:px-32 m-0">
        <div className="sub-heading">
          <div
            className="text-lg text-center font-bold py-4 text-red-600 mont-serif-regular"
            style={{ color: "white" }}
          >
            OUR EXPERTISE
          </div>
          <h2
            className="text-3xl text-center poppins-black font-serif mb-12"
            style={{ color: "white" }}
          >
            Explore More About Expertise
          </h2>
        </div>
        <div
          id="service"
          className="get-unstuck lg:flex lg:text-[16px] lg:px-[64px] mont-serif-regular  h-fit"
        >
          <div className="lg:w-[40%] text-xl lg:text-[56px] leading-[60px] text-white mb-8 get-unstuck-text p-4 md:p-8 lg:p-12 mont-serif-bold font-black">
            GET
            <br />
            UNSTUCK.
          </div>
          <div className="lg:w-[60%] text-white flex flex-col gap-8 p-4 md:p-8 lg:p-12 bg-[#7b0505] get-unstuck-section">
            <p>
              An outdated website means you’re not engaging your customers and
              driving sales. It’s time to get unstuck.
            </p>
            <a href="#contact" className="btn-redwhite w-fit my-4">
              Ready To Get Started?
            </a>
          </div>
        </div>

        <ul className="p-0 bg-[#7b0505]" id="cards">
          <li  className="card " id="card1">
            <div  id="service" className="card-body flex flex-col md:flex-row items-center relative service-card">
              <div className="SecImg h-[200px] md:h-[400px] lg:h-[500px] z-[10] aspect-square client">
                <img src="./assets/marketing.png" alt="Advertising" />
              </div>
              <div className="SecText flex flex-col items-center text-white max-w-[480px]">
                <span className=" SecText-num otlline text-shadow-outline-white rale absolute top-0 left-0 ">
                  01
                </span>
                <div className="blur-text lg:text-[200px] mont-serif-bold text-[50px]">
                  CREATE
                </div>
                <span className="cardTitle SecText-head mont-serif-bold text-[30px] lg:text-[40px] uppercase">
                  Advertising
                </span>
                <span className="cardDescription mont-serif-regular text-justify text-[20px]">
                  Arka boosts brand visibility and sales through strategic paid
                  ads on search engines, social media, and websites. We ensure
                  success with precise targeting, compelling ad creatives, and
                  continuous optimization to maximize ROI and achieve marketing
                  goals.
                </span>
              </div>
            </div>
          </li>
          <li className="card " id="card2">
            <div className="card-body items-center md:flex-row-reverse relative service-card">
              <div className="SecImg h-[200px] md:h-[400px] lg:h-[500px] z-[10] aspect-square client">
                <img src="./assets/contentCreation.png" alt="Advertising" />
              </div>
              <div className="SecText flex flex-col items-center text-white max-w-[480px] df">
                <span className=" SecText-num otlline text-shadow-outline-white rale absolute top-0 left-0 max-w-[480px]">
                  02
                </span>
                <div className="blur-text lg:text-[200px] mont-serif-bold text-[50px]">
                  EXPLORE
                </div>
                <span className="cardTitle SecText-head mont-serif-bold text-[30px] lg:text-[40px] uppercase">
                  Content Creation
                </span>
                <span className="cardDescription mont-serif-regular text-justify text-[20px]">
                  Arka crafts engaging articles, blogs, videos, and social media
                  posts tailored to target audiences. We enhance brand
                  visibility and authority through creative storytelling,
                  meticulous research, and optimization for search engines and
                  social media algorithms, driving meaningful engagement and
                  aligning with business goals
                </span>
              </div>
            </div>
          </li>

          <li className="card " id="card3">
            <div className="card-body flex flex-col md:flex-row items-center relative service-card">
              <div className="SecImg h-[200px] md:h-[400px] lg:h-[500px] z-[10] aspect-square client">
                <img src="./assets/SalesSecton.png" alt="Advertising" />
              </div>
              <div className="SecText flex flex-col items-center text-white max-w-[480px] df ">
                <span className=" SecText-num otlline text-shadow-outline-white rale absolute top-0 left-0 max-w-[480px]">
                  03
                </span>
                <div className="blur-text lg:text-[200px] mont-serif-bold text-[50px]">
                  GROW
                </div>
                <span className="cardTitle SecText-head mont-serif-bold text-[30px] lg:text-[40px] uppercase">
                  Sales
                </span>
                <span className="cardDescription mont-serif-regular text-justify text-[20px]">
                  Arka optimizes the sales journey from lead generation to
                  closing deals. Our tailored strategies, personalized outreach,
                  compelling presentations, and strategic follow-up enhance
                  conversion rates, increase revenue, and build long-lasting
                  customer relationships using data-driven insights and
                  innovative techniques.
                </span>
              </div>
            </div>
          </li>
          <li className="card " id="card4">
            <div className="card-body flex flex-col md:flex-row-reverse items-center relative service-card">
              <div className="SecImg h-[200px] md:h-[400px] lg:h-[500px] z-[10] aspect-square client">
                <img src="./assets/social.png" alt="Advertising" />
              </div>
              <div className="SecText flex flex-col items-center text-white max-w-[480px]">
                <span className=" SecText-num otlline text-shadow-outline-white rale absolute top-0 left-0 max-w-[480px]">
                  04
                </span>
                <div className="blur-text lg:text-[200px] mont-serif-bold text-[50px]">
                  BOOST
                </div>
                <span className="cardTitle SecText-head mont-serif-bold text-[30px] lg:text-[40px] uppercase">
                  Social Media
                </span>
                <span className="cardDescription mont-serif-regular text-justify text-[20px]">
                  Arka amplifies brand presence and drives engagement on
                  platforms like Facebook, Instagram, Twitter, and LinkedIn. We
                  craft tailored social media strategies to launch viral
                  campaigns, manage online reputation, and optimize performance
                  using data-driven insights. Arka helps businesses navigate the
                  digital landscape and achieve measurable success.
                </span>
              </div>
            </div>
          </li>
          <li className="card " id="card5">
            <div className="card-body flex flex-col md:flex-row items-center relative service-card">
              <div className="SecImg h-[200px] md:h-[400px] lg:h-[500px] z-[10] aspect-square client">
                <img src="./assets/se.png" alt="Advertising" />
              </div>
              <div className="SecText flex flex-col items-center text-white max-w-[480px]">
                <span className=" SecText-num otlline text-shadow-outline-white rale absolute top-0 left-0 max-w-[480px]">
                  05
                </span>
                <div className="blur-text lg:text-[200px] mont-serif-bold text-[50px]">
                  CREATE
                </div>
                <span className="cardTitle SecText-head mont-serif-bold text-[30px] lg:text-[40px] uppercase">
                  SEO
                </span>
                <span className="cardDescription mont-serif-regular text-justify text-[20px]">
                  Arka improves website visibility and rankings with tailored
                  SEO strategies. We conduct keyword research, on-page
                  optimization, technical audits, and link building to enhance
                  organic search traffic. By staying updated with search engine
                  trends, Arka boosts rankings, drives qualified traffic, and
                  increases conversions, helping businesses achieve sustainable
                  online growth and credibility.
                </span>
              </div>
            </div>
          </li>
          <li className="card " id="card2">
            <div className="card-body flex flex-col md:flex-row-reverse items-center relative service-card">
              <div className="SecImg h-[200px] md:h-[400px] lg:h-[500px] z-[10] aspect-square client">
                <img src="./assets/image.png" alt="Advertising" />
              </div>
              <div className="SecText flex flex-col items-center text-white max-w-[480px]">
                <span className=" SecText-num otlline text-shadow-outline-white rale absolute top-0 left-0 max-w-[480px]">
                  06
                </span>
                <div className="blur-text lg:text-[200px] mont-serif-bold text-[50px]">
                  EXPLORE
                </div>
                <span className="cardTitle SecText-head mont-serif-bold text-[30px] lg:text-[40px] uppercase">
                  Content Creation
                </span>
                <span className="cardDescription mont-serif-regular text-justify text-[20px]">
                  Arka crafts engaging articles, blogs, videos, and social media
                  posts tailored to target audiences. We enhance brand
                  visibility and authority through creative storytelling,
                  meticulous research, and optimization for search engines and
                  social media algorithms, driving meaningful engagement and
                  aligning with business goals
                </span>
              </div>
            </div>
          </li>

          <li className="card " id="card3">
            <div className="card-body flex flex-col md:flex-row items-center relative service-card">
              <div className="SecImg h-[200px] md:h-[400px] lg:h-[500px] z-[10] aspect-square client">
                <img src="./assets/SalesSecton.png" alt="Advertising" />
              </div>
              <div className="SecText flex flex-col items-center text-white max-w-[480px]">
                <span className=" SecText-num otlline text-shadow-outline-white rale absolute top-0 left-0 max-w-[480px]">
                  07
                </span>
                <div className="blur-text lg:text-[200px] mont-serif-bold text-[50px]">
                  GROW
                </div>
                <span className="cardTitle SecText-head mont-serif-bold text-[30px] lg:text-[40px] uppercase">
                  Branding
                </span>
                <span className="cardDescription mont-serif-regular text-justify text-[20px]">
                  Arka helps startups and businesses establish a unique identity
                  with tailored branding strategies, including compelling brand
                  stories, logo design, and consistent messaging. We enable
                  businesses to differentiate themselves, build credibility, and
                  foster lasting customer relationships.
                </span>
              </div>
            </div>
          </li>
          <li className="card " id="card4">
            <div className="card-body flex flex-col md:flex-row-reverse items-center relative service-card">
              <div className="SecImg h-[200px] md:h-[400px] lg:h-[500px] z-[10] aspect-square client">
                <img src="./assets/aiSe.png" alt="Advertising" />
              </div>
              <div className="SecText flex flex-col items-center text-white max-w-[480px]">
                <span className=" SecText-num otlline text-shadow-outline-white rale absolute top-0 left-0 max-w-[480px]">
                  08
                </span>
                <div className="blur-text lg:text-[200px] mont-serif-bold text-[50px]">
                  BOOST
                </div>
                <span className="cardTitle SecText-head mont-serif-bold text-[30px] lg:text-[40px] uppercase">
                  AI Development
                </span>
                <span className="cardDescription mont-serif-regular text-justify text-[20px]">
                  Arka guides startups in AI development, offering tailored
                  solutions from defining use cases to developing custom
                  algorithms. We enable businesses to leverage AI for
                  automation, predictive analytics, and personalized
                  experiences, enhancing decision-making and operational
                  efficiency.
                </span>
              </div>
            </div>
          </li>
          <li className="card " id="card1">
            <div className="card-body flex flex-col md:flex-row items-center relative service-card">
              <div className="SecImg h-[200px] md:h-[400px] lg:h-[500px] z-[10] aspect-square client">
                <img src="./assets/devlopement.png" alt="Advertising" />
              </div>
              <div className="SecText flex flex-col items-center text-white max-w-[480px]">
                <span className=" SecText-num otlline text-shadow-outline-white rale absolute top-0 left-0">
                  09
                </span>
                <div className="blur-text lg:text-[200px] mont-serif-bold text-[50px]">
                  CREATE
                </div>
                <span className="cardTitle SecText-head mont-serif-bold text-[30px] lg:text-[40px] uppercase">
                  Developement
                </span>
                <span className="cardDescription mont-serif-regular text-justify text-[20px]">
                  Arka supports startups through the entire application
                  development lifecycle, from concept to deployment. Using agile
                  methodologies, we create scalable, feature-rich applications
                  with a focus on UX/UI, helping businesses deliver innovative
                  solutions and enhance user experiences.
                </span>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id="about" className="py-4 px-2 bg-white">
        <div className="sub-heading">
          <div
            className="text-xl text-center font-bold py-4 text-red-600 mont-serif-regular"
            style={{ color: "#7b0505" }}
          >
            What is our foundation?
          </div>
          <h2
            className="text-3xl text-center font-bold mb-12"
            style={{ color: "black" }}
          >
            Know Us How Arka Works
          </h2>
        </div>
        <div
          id="work"
          className="vision-container mont-serif-regular flex flex-col flex-wrap justify-center gap-8  rounded-lg text-[#AF0D0D]"
        >
          <div className="vision-card p-6 rounded-lgb border-2 border-[#AF0D0D] rounded-md  w-full ">
            <div className="vision-card-num raleway text-4xl font-bold mb-4">
              01
            </div>
            <div className="mb-4">
              <img
                src="./assets/Diamond.png"
                alt="Vision"
                className="mx-auto"
              />
            </div>
            <div className="text-xl font-semibold mb-2">VISION</div>
            <div className="text-base text-black text-justify">
              Our vision is to become the leading one-stop solution provider and
              partner of choice for startups and businesses, empowering them to
              scale new heights of success through comprehensive and effective
              marketing, technical and business development services delivered
              seamlessly through our integrated platform.
            </div>
          </div>
          <div className="vision-card p-6 rounded-lgb border-2 border-[#AF0D0D] rounded-md  w-full ">
            <div className="vision-card-num raleway text-4xl font-bold mb-4">
              02
            </div>
            <div className="mb-4">
              <img src="./assets/Rocket.png" alt="Vision" className="mx-auto" />
            </div>
            <div className="text-xl font-semibold mb-2">MISSION</div>
            <div className="text-base text-black text-justify">
              We aim to revolutionize how entrepreneurs access support by
              helping clients overcome challenges, and optimize operations and
              growth revenues. Equally committed to our employees, we strive to
              cultivate a culture of continuous learning, and recognition in a
              flexible and empowering environment where they can do their best
              work and explore new growth opportunities
            </div>
          </div>
          <div className="vision-card p-6 rounded-lgb border-2 border-[#AF0D0D] rounded-md  w-full ">
            <div className="vision-card-num raleway text-4xl font-bold mb-4">
              03
            </div>
            <div className="mb-4">
              <img src="./assets/Crown.png" alt="Vision" className="mx-auto" />
            </div>
            <div className="text-xl font-semibold mb-2">LEGACY</div>
            <div className="text-base text-black text-justify">
              We started 4 years ago and now in June 2024, Arka Consultancy
              switched from Freelance Model to Full Time Model. Now we have 30+
              people working full time in the company. We have various experts
              and interns working under them. We have particular departments set
              up for all needs of clients.
            </div>
          </div>
        </div>

        <div
          className="text-xl text-center font-bold py-4 text-red-600 mont-serif-regular"
          style={{ color: "#7b0505" }}
        >
          Our Clients
        </div>
        <ul className="p-0 bg-[#7b0505]" id="cards">
          <li className="card clientcard" id="card1">
            <div className="card-body   bg-white flex flex-col md:flex-row items-center relative service-card clientcardbody">
              <div className="SecImg h-[200px] md:h-[400px] lg:h-[500px] z-[10] aspect-square client">
                <img src="./assets/elite.png" alt="Advertising" />
              </div>
              <div className="SecText flex flex-col items-center text-white max-w-[480px] df">
                <span className=" clietnSecText-num otlline  rale absolute top-0 left-0 text-black">
                  01
                </span>

                <span className="clietncardTitle SecText-head mont-serif-bold text-[30px] lg:text-[40px] uppercase">
                  Elite Group Finances
                </span>
                <span className="clientcardDescription mont-serif-regular text-justify text-[20px]">
                  EliteGroup Finances, originally an offline financial auditing
                  firm, partnered with Revibe Academy to transition successfully
                  into the online sphere. Challenges included limited online
                  presence and technical expertise. Revibe Academy developed a
                  professional website, implemented SEO strategies, established
                  social media presence, and conducted targeted digital
                  advertising.
                </span>
                <Dialog>
                  <DialogTrigger className="lightbtn mt-8 mont-serif-regular">
                    Read More
                  </DialogTrigger>
                  <DialogContent className="h-[90vh] [text-shadow:none]">
                    <ScrollArea className="h-[full] overflow-auto text-shadow-none drop-shadow-none w-[full] rounded-md border p-4 ">
                      <div className="case-study">
                        <h1>
                          EliteGroup Finances: Transitioning to the Digital Era
                        </h1>
                        <br />
                        <h2>Introduction:</h2>
                        <p>
                          EliteGroup Finances started with a simple but
                          in-demand service, ‘Company’s financial audits’. The
                          company had been an offline firm for quite a while and
                          they were looking for online expansion. So when we
                          received their lead, we knew we had a real opportunity
                          to showcase the skills we have acquired over a period
                          of 1.5 years. We had an opportunity to take a
                          completely off-the-grid company to the vast world of
                          digital media.
                        </p>
                        <br />
                        <h2>Challenges:</h2>
                        <p>
                          Transitioning from an offline to an online business
                          model presented several challenges for EliteGroup
                          Finances:
                        </p>
                        <ul>
                          <li>
                            <strong>Limited Online Presence:</strong> Initially,
                            the company had minimal digital footprint, lacking a
                            website, social media presence, and online marketing
                            strategies.
                          </li>
                          <li>
                            <strong>Technical Expertise:</strong> Lack of
                            in-house expertise in website development, SEO,
                            branding, and digital marketing posed a significant
                            hurdle.
                          </li>
                          <li>
                            <strong>Brand Adaptation:</strong> Adapting the
                            established offline brand identity to the online
                            environment while maintaining credibility and
                            trustworthiness.
                          </li>
                          <li>
                            <strong>Competitive Landscape:</strong> The
                            financial auditing sector was increasingly
                            competitive online, requiring a strategic approach
                            to stand out.
                          </li>
                        </ul>
                        <br />
                        <h2>Our Approach:</h2>
                        <p>
                          Arka (then Revibe) was engaged to facilitate
                          EliteGroup Finances' transition to the digital realm.
                          The partnership involved a comprehensive strategy to
                          establish and enhance the company’s online presence:
                        </p>
                        <ol>
                          <li>
                            <strong>Website Development:</strong> Revibe Academy
                            designed and developed a professional website for
                            EliteGroup Finances, showcasing their services,
                            expertise, and client testimonials.
                          </li>
                          <li>
                            <strong>SEO Optimization:</strong> Implemented SEO
                            strategies to improve search engine rankings and
                            increase visibility among potential clients
                            searching for financial auditing services.
                          </li>
                          <li>
                            <strong>Branding and Social Media:</strong> Created
                            a cohesive brand identity and established social
                            media accounts across major platforms to engage with
                            the target audience and build brand awareness.
                          </li>
                          <li>
                            <strong>Digital Advertising:</strong> Ran targeted
                            online advertisements to promote EliteGroup
                            Finances’ services to a relevant audience,
                            maximizing reach and lead generation.
                          </li>
                          <li>
                            <strong>Content Strategy:</strong> Developed a
                            content strategy focused on educating potential
                            clients about the importance of financial auditing,
                            industry insights, and company updates.
                          </li>
                          <li>
                            <strong>Marketing Campaign:</strong> Launched a
                            structured marketing campaign to drive traffic to
                            the website, generate leads, and convert visitors
                            into clients.
                          </li>
                        </ol>
                        <br />
                        <h2>Results:</h2>
                        <ul>
                          <li>
                            <strong>Increased Leads:</strong> Over time, leads
                            began to flow in steadily as awareness of EliteGroup
                            Finances’ online presence grew.
                          </li>
                          <li>
                            <strong>Expanded Client Base:</strong> The robust
                            online marketing efforts facilitated by Revibe
                            Academy helped EliteGroup Finances attract new
                            clients from diverse sectors.
                          </li>
                          <li>
                            <strong>Enhanced Reputation:</strong> The company’s
                            established reputation offline was successfully
                            translated into the online sphere, reinforcing trust
                            and credibility.
                          </li>
                          <li>
                            <strong>Business Growth:</strong> With a stronger
                            online presence and effective digital marketing
                            strategies in place, EliteGroup Finances experienced
                            significant business expansion.
                          </li>
                        </ul>
                        <br />
                        <h2>Conclusion:</h2>
                        <p>
                          The partnership between EliteGroup Finances and Revibe
                          Academy proved to be transformative, enabling the
                          company to successfully navigate the transition from
                          an offline to an online business model. By leveraging
                          Revibe Academy’s expertise in digital strategy, web
                          development, and online marketing, EliteGroup Finances
                          not only adapted to the digital era but thrived in it.
                          The case of EliteGroup Finances exemplifies how
                          strategic digital transformation can lead to
                          substantial growth and competitive advantage in
                          today’s digital economy.
                        </p>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </li>
          <li className="card clientcard" id="card1">
            <div className="card-body   bg-white flex flex-col md:flex-row items-center relative service-card clientcardbody">
              <div className="SecImg h-[200px] md:h-[400px] lg:h-[500px] z-[10] aspect-square client">
                <img src="./assets/Mboso.png" alt="Advertising" />
              </div>
              <div className="SecText flex flex-col items-center text-white max-w-[480px]">
                <span className=" clietnSecText-num otlline  rale absolute top-0 left-0 text-black">
                  02
                </span>

                <span className="clietncardTitle SecText-head mont-serif-bold text-[30px] lg:text-[40px] uppercase">
                  Moboso Enterprises
                </span>
                <span className="clientcardDescription mont-serif-regular text-justify text-[20px]">
                  Mboso, a former software engineer turned coffee entrepreneur,
                  sought to enhance his coffee brand's Instagram presence.
                  Initially focused solely on design services, he faced
                  challenges in translating likes into sales. Revibe Academy
                  intervened with a tailored content strategy highlighting
                  Mboso's personal story and coffee's luxury appeal.
                </span>
                <Dialog>
                  <DialogTrigger className="lightbtn mt-8 mont-serif-regular">
                    Read More
                  </DialogTrigger>
                  <DialogContent className="h-[90vh] [text-shadow:none]">
                    <ScrollArea className="h-[full] overflow-auto [text-shadow:none] w-[full] rounded-md border p-4 ">
                      <div className="case-study">
                        <h1>Fulfilling Every Coffee Lover’s Dream</h1>
                        <br />
                        <h2>Introduction:</h2>
                        <p>
                          Mr. Mboso started as a software engineer but soon
                          realized entrepreneurship was his true calling. He
                          approached us after observing us on Instagram, telling
                          us that he liked our designs and would like to offer
                          us some work. He explained to us that he wanted his
                          Instagram page to attract people and get them
                          interested in his website where he sold coffee. He
                          didn’t share much about his business model as the only
                          service he was looking for was designing his Instagram
                          posts. So, he gave us specific ideas and we started
                          working on design. We provided him with a few options,
                          and he finalized a certain design. We started making
                          posts for him and it went on for a few weeks. There
                          was an impressive rise in his following and likes and
                          we thought everything was going fine. But, one day out
                          of nowhere, Mboso told us he no longer needed our
                          services. This came as a big shock to us as everything
                          was going great. We wanted to know the reason behind
                          this, so we asked Mboso for an online meeting. Mboso
                          agreed and there he told us what was wrong.
                        </p>
                        <br />
                        <h2>Challenges:</h2>
                        <p>
                          While working as a software engineer, amidst the hum
                          of technology and the glow of computer screens, Mboso
                          found solace in a simple pleasure: coffee. He was not
                          your typical office coffee lover. He went every year
                          to Ethiopia to bring the best coffee beans and brewed
                          them himself in his expensive brewing machine. While
                          his hands and mind worked monotonously writing codes,
                          when that aroma of coffee filled his nostrils, when
                          the cup came to his sight and when the taste of coffee
                          reached his tongue, he became alive! Moboso knew, that
                          writing codes wasn’t something he could do for long
                          but the ever-present question of “what then?” still
                          hovered over his head.
                        </p>
                        <p>
                          One rainy evening as Mboso was enjoying the perfect
                          sips of his self-brewed coffee watching the rain
                          outside, a flash of lightning struck the sky and so
                          did an idea in Moboso’s head. He finally knew what he
                          had to do! He decided to become an entrepreneur and
                          sell coffee. He soon quit his job and with his
                          savings, started brewing the first batch of “Mboso’s
                          Taste”. As he hired people to set up a website and
                          listed his products online, his savings soon started
                          to puff away.
                        </p>
                        <p>
                          But as you know, the world is not all sweets and
                          greenery. Mboso, at the start, was steady with his
                          sales but soon everything slowed down. So Mboso
                          thought about attracting more clients through social
                          media but had no idea how things worked. He thought
                          making attractive posts about his coffee was enough to
                          generate traffic to his website, but as the story
                          played itself, that wasn’t the case. After listening
                          to all this, we knew we could help. He needed services
                          that we had and that was the only way to save a dream,
                          to save a person who otherwise would have to go back
                          to something that pushed him to the edge.
                        </p>
                        <br />
                        <h2>Our Approach:</h2>
                        <ol>
                          <li>
                            <strong>Uniqueness:</strong> We started with
                            research and figured out what made Mboso’s coffee
                            better than the already available options in their
                            market.
                          </li>
                          <li>
                            <strong>Selling the Story:</strong> We decided that
                            Mboso’s story itself was an amazing selling point.
                            The few minutes of luxury of sipping coffee between
                            deadlines and lengthy codes was not just Mboso’s
                            thing. We just needed people to understand that they
                            deserved a coffee which was worth the work they did
                            all day. A luxury, if you may. We pitched the idea
                            to Mboso and he gave us a green flag.
                          </li>
                          <li>
                            <strong>Specific Content Strategy:</strong> Next, we
                            built a content strategy that revolved around the
                            idea of coffee being a luxury to savour and be
                            enjoyed like it is supposed to be. Mboso’s story was
                            circulated in various forms which helped people to
                            relate.
                          </li>
                          <li>
                            <strong>
                              Backend Development & Paid Advertisement:
                            </strong>{" "}
                            Our backend work of engagement, SEO, and research
                            continued. We also ran Instagram ads and targeted
                            office workers.
                          </li>
                        </ol>
                        <br />
                        <h2>Results:</h2>
                        <ul>
                          <li>
                            After the 1st week of running our social media
                            campaign, there was an enormous rise in website
                            traffic but the leads and conversions were still
                            low.
                          </li>
                          <li>
                            After making a few changes and applying what we
                            learned in the first week, the second week turned
                            out to be a success with a 25% increase in lead
                            generation and a 10% increase in product sales.
                          </li>
                          <li>
                            These numbers kept rising as we continued and Mboso
                            Enterprises was a success.
                          </li>
                        </ul>
                        <br />
                        <h2>Conclusion:</h2>
                        <p>
                          Mboso’s case was a matter of huge learning for us. We
                          understood how stories sold more than products. It
                          also gave us great insights into foreign audiences and
                          business workflow. This also taught us that people
                          with small businesses and startups can do wonders if
                          guided by someone who knows how to get things done.
                        </p>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </li>

          <li className="card clientcard" id="card1">
            <div className="card-body   bg-white flex flex-col md:flex-row items-center relative service-card clientcardbody">
              <div className="SecImg h-[200px] md:h-[400px] lg:h-[500px] z-[10] aspect-square client">
                <img src="./assets/SharpEyye.png" alt="Advertising" />
              </div>
              <div className="SecText flex flex-col items-center text-white max-w-[480px]">
                <span className=" clietnSecText-num otlline  rale absolute top-0 left-0 text-black">
                  03
                </span>

                <span className="clietncardTitle SecText-head mont-serif-bold text-[30px] lg:text-[40px] uppercase">
                  Sharp Eye
                </span>
                <span className="clientcardDescription mont-serif-regular text-justify text-[20px]">
                  At Arka Consultancy, our journey with Sharp Eye Solution
                  Company (SESC) transformed their digital security approach.
                  Initially challenged by ineffective marketing and visibility
                  issues, we revamped SESC's digital presence through a
                  responsive, SEO-optimized website and a user-friendly mobile
                  app. AI-powered marketing strategies enhanced lead generation
                  and client engagement, while analytics provided valuable
                  insights for continuous improvement. This collaboration
                  propelled SESC's growth in client acquisition, revenue, and
                  industry influence
                </span>
                <Dialog>
                  <DialogTrigger className="lightbtn mt-8 mont-serif-regular">
                    Read More
                  </DialogTrigger>
                  <DialogContent className="h-[90vh] [text-shadow:none]">
                    <ScrollArea className="h-[full] overflow-auto text-shadow-none drop-shadow-none w-[full] rounded-md border p-4 ">
                      <div className="case-study">
                        <h1>
                          Shaping the Digital World’s Security: Sharp Eye
                          Solution Company (SESC)
                        </h1>
                        <br />
                        <h2>Introduction:</h2>
                        <p>
                          Sharp Eye Solution Company (SESC) is a digital
                          security firm specializing in providing advanced
                          cybersecurity solutions to businesses of all sizes.
                          Established with the mission to enhance digital safety
                          and protect organizations from cyber threats, SESC
                          initially faced challenges in effectively reaching and
                          acquiring new clients despite its innovative services.
                        </p>
                        <br />
                        <h2>Challenges:</h2>
                        <p>
                          Despite offering cutting-edge digital security
                          services, SESC struggled with its marketing efforts.
                          The company's groundbreaking ideas and robust
                          cybersecurity solutions were not effectively
                          communicated to potential clients. This resulted in a
                          lack of visibility in the competitive cybersecurity
                          market and hindered their growth prospects.
                          Recognizing the need to revamp its marketing strategy
                          and enhance client acquisition, SESC solicited Arka
                          Consultancy.
                        </p>
                        <br />
                        <h2>Our Approach:</h2>
                        <ul>
                          <li>
                            <strong>
                              Website Development and Optimization:
                            </strong>{" "}
                            Arka revamped SESC’s website to improve user
                            experience (UX) and search engine visibility. We
                            developed a responsive, SEO-optimized website that
                            effectively showcased SESC’s cybersecurity
                            expertise, services, and client success stories.
                          </li>
                          <li>
                            <strong>Mobile App Development:</strong>{" "}
                            Understanding the importance of mobile
                            accessibility, Arka designed and developed a mobile
                            application for SESC. The app provided clients with
                            convenient access to cybersecurity resources,
                            real-time threat alerts, and secure communication
                            channels, enhancing client engagement and service
                            delivery.
                          </li>
                          <li>
                            <strong>AI-Powered Marketing Strategies:</strong>{" "}
                            Leveraging artificial intelligence (AI)
                            technologies, Arka implemented data-driven marketing
                            strategies for SESC. AI algorithms analyzed consumer
                            behavior, identified target audiences, and optimized
                            marketing campaigns across digital platforms,
                            ensuring maximum reach and engagement. AI bots for
                            lead generation and chatbots for websites were also
                            utilized.
                          </li>
                          <li>
                            <strong>
                              Content Personalization and Automation:
                            </strong>{" "}
                            Arka integrated AI-driven content personalization
                            tools into SESC's marketing strategy. Using machine
                            learning algorithms, personalized content
                            recommendations and automated email campaigns were
                            tailored to the specific cybersecurity needs and
                            interests of potential clients, enhancing lead
                            nurturing and conversion rates.
                          </li>
                          <li>
                            <strong>
                              Analytics and Performance Monitoring:
                            </strong>{" "}
                            Arka also implemented advanced analytics tools to
                            monitor the performance of SESC's digital marketing
                            initiatives, website traffic, and app usage metrics.
                            Data insights were used to refine marketing
                            strategies, optimize user experiences, and measure
                            the ROI of marketing investments.
                          </li>
                        </ul>
                        <br />
                        <h2>Results:</h2>
                        <ul>
                          <li>
                            <strong>Enhanced Digital Presence:</strong> SESC's
                            revamped website and mobile app improved online
                            visibility and accessibility, attracting a broader
                            audience of businesses seeking better cybersecurity
                            solutions.
                          </li>
                          <li>
                            <strong>Improved Client Engagement:</strong> The
                            mobile app facilitated seamless communication and
                            real-time updates, enhancing client engagement and
                            satisfaction with SESC's services.
                          </li>
                          <li>
                            <strong>AI-Driven Growth:</strong> AI-powered
                            marketing strategies increased lead generation,
                            improved conversion rates, and optimized marketing
                            spending, contributing to SESC's revenue growth and
                            market expansion. This also brought ease to the
                            otherwise jumbled workflow.
                          </li>
                          <li>
                            <strong>Data-Driven Insights:</strong> Analytics and
                            performance monitoring provided actionable insights
                            into consumer behavior and marketing effectiveness,
                            enabling continuous improvement and strategic
                            decision-making for SESC.
                          </li>
                        </ul>
                        <br />
                        <h2>Conclusion:</h2>
                        <p>
                          Through a trustful and collaborative work association
                          with us, Sharp Eye Solution Company successfully
                          overcame its initial marketing challenges and achieved
                          substantial growth in client acquisition, revenue, and
                          industry influence. By leveraging strategic marketing
                          initiatives, AI integration, and targeted client
                          acquisition strategies, SESC solidified its position
                          as a trusted provider of digital security services,
                          effectively protecting businesses from cyber threats
                          in today's interconnected world.
                        </p>

                        <p>
                          This success of Arka Consultancy had us thinking that
                          it was time to expand. So, in June 2024, we switched
                          our business model from freelance work to a full-time
                          employee-based company. Hence, the process of hiring
                          experts and interns started.
                        </p>

                        <p>
                          Now, let’s come back to the question stated in the
                          beginning—What is Luxury? Luxury is ease. If the work
                          gets done in the least tiresome manner, it is a
                          luxury. If you don’t need to approach tons of people
                          for tons of work, it is a luxury. If you are provided
                          with everything you need and want by just one provider
                          with no headaches of management, it is a luxury.
                        </p>

                        <p>
                          And here, at Arka Consultancy, our services give you
                          ease. Our services, provide you with luxury.
                        </p>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </li>
          <li className="card clientcard" id="card1">
            <div className="card-body   bg-white flex flex-col md:flex-row items-center relative service-card clientcardbody">
              <div className="SecImg h-[200px] md:h-[400px] lg:h-[500px] z-[10] aspect-square client">
                <img src="./assets/Saleup.png" alt="Advertising" />
              </div>
              <div className="SecText flex flex-col items-center text-white max-w-[480px] df">
                <span className=" clietnSecText-num otlline  rale absolute top-0 left-0 text-black">
                  04
                </span>

                <span className="clietncardTitle SecText-head mont-serif-bold text-[30px] lg:text-[40px] uppercase">
                  Sales Up Co
                </span>
                <span className="clientcardDescription mont-serif-regular text-justify text-[20px]">
                  The #1 automated marketing tool for email database expansion
                  This web app specializes in enhancing the customer experience,
                  and adding marketing value to events and venue owners! The
                  VideoBoxis a sleek, customizable photo frame that lights up,
                  and with a tap of your finger allows users to record a fun,
                  social media friendly GIF. The software allows for a fun and
                  easy way to capture emails, grow your social media following
                  organically, and up-sell your audience in real time.
                </span>
                <Dialog>
                  <DialogTrigger className="lightbtn mt-8 mont-serif-regular">
                    Read More
                  </DialogTrigger>
                  <DialogContent className="h-[90vh] [text-shadow:none]">
                    <ScrollArea className="h-[full] overflow-auto [text-shadow:none] w-[full] rounded-md border p-4 ">
                    <div className="case-study">
                      <h1>Increasing Sales of SalesUp!</h1>
                      <br />
                      <h2>Introduction:</h2>
                      <p>
                        This is the case of SalesUp, an Indian startup with a
                        vision to revolutionize affiliate marketing. The startup
                        owners were already trying for a year before they
                        approached us. They were trying to build a social media
                        profile but it was a mess. As they told us about their
                        goals, we started analyzing their social media. They
                        wanted to generate leads through social media.
                      </p>
                      <br />
                      <h2>Challenges:</h2>
                      <p>
                        We figured out the problems they were having. They were
                        the following:
                      </p>
                      <ul>
                        <li>Their posts weren’t niche-specific.</li>
                        <li>They didn’t have any branding whatsoever.</li>
                        <li>They had no theme in colour or design.</li>
                        <li>They did no engagement whatsoever.</li>
                        <li>There was no content strategy.</li>
                        <li>
                          The posts were not informative and eye-grabbing.
                        </li>
                        <li>There was no regularity in posting.</li>
                        <li>And a few more.</li>
                      </ul>
                      <br />
                      <h2>Our Approach:</h2>
                      <ol>
                        <li>
                          <strong>New Strategies:</strong> We made new social
                          media strategies for them and started experimenting.
                          We understood their ideal audience and framed our
                          strategies accordingly.
                        </li>
                        <li>
                          <strong>Branding:</strong> We specifically designed
                          posts for them and with their approval, chose the
                          branding colours and designs. At first, they were
                          dubious about us. We changed things and that is always
                          a pain point. But we asked them to trust us and give
                          us some time.
                        </li>
                        <li>
                          <strong>Content Strategy:</strong> With this, we made
                          a content strategy for a week and developed a few
                          posts. These posts were informative and explained what
                          affiliate marketing is and its various factors.
                        </li>
                        <li>
                          <strong>Developing a CTA:</strong> They lacked a
                          Call-to-action in their posts. They simply used to put
                          in their phone numbers. But we changed that to
                          directing potential leads towards their website.
                        </li>
                        <li>
                          <strong>Social Media Management:</strong> There were
                          other improvements like story posting, DMs, and
                          engaging with followers and other creators.
                        </li>
                      </ol>
                      <br />
                      <h2>Results:</h2>
                      <ul>
                        <li>
                          Within a week of rebranding and changing their social
                          media, their followers increased and so did their
                          likes and comments. But they weren’t happy with the
                          results. Their goal was lead generation, not to gain
                          followers and accumulate likes. But we reassured them
                          that it was part of our strategy. Engagement is the
                          first step towards lead generation. This was the time
                          of make or break. But SalesUp chose to trust us and
                          give us more time. This decision turned out to be a
                          breakthrough for them.
                        </li>
                        <li>
                          Within the next two weeks, their lead generation saw a
                          massive rise of 300% and their conversions also
                          increased by 100%.
                        </li>
                        <li>
                          They had 150 people working with them before our
                          services and after a month of working with us, they
                          had a network of 500+ people.
                        </li>
                      </ul>
                      <br />
                      <h2>Conclusion:</h2>
                      <p>
                        These specific strategies for things that most people
                        ignore and that SalesUp was ignoring too, helped the
                        company to get to new heights fast.
                      </p>
                      <p>
                        This is one out of many success stories that we were a
                        part of, as Revibe Academy. As months passed by, we
                        started getting offers from foreign startups as well.
                        This brought us a new challenge. These companies
                        required services, ideas, and methods that were
                        different from the Indian startup space. This helped us
                        broaden our vision. One such company was Mboso
                        Enterprises.
                      </p>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <div className="container bg-white max-w-none p-0 m-0">
        <div className="bg-[white] text-black testimonial-section prodsection py-8">
          <div className="sub-heading  text-center mb-12">
            <h2 className=" text-3xl font-bold">Our Products</h2>
          </div>

          <div className="testimonial bg-[white] flex flex-wrap justify-center gap-1">
            {[
              {
                name: "LEAD GEN BOT",
                title: ` A fully integrated AI chatbot 
for you sites and other platforms,
 that can talk to your potential
 leads, book meetings and
 convert visitors to clients`,
                image: "../../assets/p1.png",
                email: "bhavya@arkaconsultancy.xyz",
              },
              {
                name: "CUSTOMER SERVICE BOT",
                title: ` This bot that will provide no delay
 personalized responses to all of
 your customers.It can manage
 ticket creation, handling and
 support requests on its own`,
                image: "../../assets/p2.png",
                email: "bhavya@arkaconsultancy.xyz",
              },
              {
                name: "VOICE ASSISTANT BOT",
                title: `Get a personalized voice assistant
 bot to handle all your clients' and
 employees' queries. Unleash the
 power of customised bot for your
 business`,
                image: "../../assets/p3.png",
                email: "bhavya@arkaconsultancy.xyz",
              },
              {
                name: " SOCIAL MEDIA AUTOMATION BOT",
                title: `This bot can completely boost
 and manage your social media
 like a human manager.It can
 create content according to your
 need, post and it and analyse the
 metrics to update its strategy.`,
                image: "../../assets/p4.png",
                email: "bhavya@arkaconsultancy.xyz",
              },
              {
                name: "TREND ANALYSIS BOT",
                title: `This bot analyzes all the ongoing
 trends in the market and gives
 you specific suggestion  on how
 to use those trends to help you
 business go viral and create
 trending products and services.`,
                image: "../../assets/p5.png",
                email: "bhavya@arkaconsultancy.xyz",
              },
              {
                name: "SALES PREDICTION BOT",
                title: `This bot analyses the
 performance of your sales team,
 and their past metric like closure
 rate, follow-up metric, etc. to give
 you an accurate prediction for
 your sales each month.`,
                image: "../../assets/p6.png",
                email: "bhavya@arkaconsultancy.xyz",
              },
              {
                name: "VOICE CALL BOT",
                title: `A voice call bot that is nearly
 impossible to differentiate from a
 human voice, which can help
 your business in multiple
 channels like sales, lead
 generation,customer support etc`,
                image: "../../assets/p7.png",
                email: "bhavya@arkaconsultancy.xyz",
              },
              {
                name: "AI DRIVEN CRM WEBSITE",
                title: `Get the power of AI, to make a
 personalized CRM website for your
 needs that does all of the hard work
 for you so you are left with the time for
 only the most important tasks.`,
                image: "../../assets/p8.png",
                email: "bhavya@arkaconsultancy.xyz",
              },
            ].map((founder, index) => (
              <div
                key={index}
                className="relative h-[400px]  founder-container"
              >
                <div className="card">
                  <div className="content">
                    <div className="imgBx">
                      <img className="rounded-full" src={founder.image} />
                    </div>
                    <div className="contentBx">
                      <h3 className="mont-serif-bold w-full text-center">
                        {founder.name}
                      </h3>
                    </div>
                  </div>
                  <ul className="sci">
                    <li className="whiteglass">
                      <h3 className="mont-serif-bold w-full text-center">
                        {founder.name}
                      </h3>
                      <h2 className="mont-serif-regular w-full text-justify">
                        {founder.title}
                      </h2>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container bg-white max-w-none p-0 m-0">
        <div className="bg-[#7b0505] text-white testimonial-section py-8">
          <div className="sub-heading  text-center mb-12">
            <h2 className=" text-3xl font-bold">
              Explore More About Our Founders
            </h2>
          </div>

          <div className="testimonial bg-[#7b0505] flex flex-wrap justify-center gap-4">
            {[
              {
                name: "Mr. Bhavya Sharma",
                title: "Chief Executive Officer and Founder",
                image: "./assets/founder2.png",
                email: "bhavya@arkaconsultancy.xyz",
              },
              {
                name: "Mr. Achit Parmar",
                title: "Chief Operating Officer",
                image: "./assets/founder1.png",
                email: "achit@arkaconsultancy.xyz",
              },
            ].map((founder, index) => (
              <div key={index} className="relative  founder-container">
                <div className="card">
                  <div className="content">
                    <div className="imgBx">
                      <img className="rounded-full" src={founder.image} />
                    </div>
                    <div className="contentBx">
                      <h3 className="mont-serif-bold w-full text-center">
                        {founder.name}
                      </h3>
                      <h2 className="mont-serif-regular w-full text-center">
                        {founder.title}
                      </h2>
                    </div>
                  </div>
                  <ul className="sci">
                    <li>
                      <a href="">
                        <MdEmail className="text-2xl text-[#7b0505]" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
{/* Our team members starts */}
<div className="tsOverall">
<div className="tscardone">
<div className="tscard work">
            <div className="tsimg-section">
              <svg xmlns="http://www.w3.org/2000/svg" height="77" width="76">
                <path fill-rule="nonzero" fill="#AF0D0D"
                  d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z">
                </path>
              </svg>
            </div>
            <div  className ="tscard-desc">
              <div className ="tscard-header">
                <div className ="tscard-title">Web Development Team</div>
                <div className ="tscard-menu">
                  <div  className ="dot"></div>
                  <div className ="dot"></div>
                  <div className ="dot"></div>
                </div>
              </div>
              <div className ="tscard-time">12+ Team Members</div>
            </div>
          </div>

          <div className="tscard work">
            <div className="tsimg-section">
              <svg xmlns="http://www.w3.org/2000/svg" height="77" width="76">
                <path fill-rule="nonzero" fill="#AF0D0D"
                  d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z">
                </path>
              </svg>
            </div>
            <div  className ="tscard-desc">
              <div className ="tscard-header">
                <div className ="tscard-title">Social Media</div>
                <div className ="tscard-menu">
                  <div  className ="dot"></div>
                  <div className ="dot"></div>
                  <div className ="dot"></div>
                </div>
              </div>
              <div className ="tscard-time">12+ Team Members</div>
            </div>
          </div>
</div>
<div >
<div className="tscardone">
          <div className="tscard work">
            <div className="tsimg-section">
              <svg xmlns="http://www.w3.org/2000/svg" height="77" width="76">
                <path fill-rule="nonzero" fill="#AF0D0D"
                  d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z">
                </path>
              </svg>
            </div>
            
            <div  className ="tscard-desc">
              <div className ="tscard-header">
                <div className ="tscard-title">Techincal Department</div>
                <div className ="tscard-menu">
                  <div  className ="dot"></div>
                  <div className ="dot"></div>
                  <div className ="dot"></div>
                </div>
              </div>
              <div className ="tscard-time">90+ Team Members</div>
            </div>
          </div>

          <div className="tscard work">
            <div className="tsimg-section">
              <svg xmlns="http://www.w3.org/2000/svg" height="77" width="76">
                <path fill-rule="nonzero" fill="#AF0D0D"
                  d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z">
                </path>
              </svg>
            </div>
            <div  className ="tscard-desc">
              <div className ="tscard-header">
                <div className ="tscard-title">Marketing Department</div>
                <div className ="tscard-menu">
                  <div  className ="dot"></div>
                  <div className ="dot"></div>
                  <div className ="dot"></div>
                </div>
              </div>
              <div className ="tscard-time">90+ Team Members</div>
            </div>
          </div>
          </div>

          <div className="tscardtwo">
          <div className="tscard work">
            <div className="tsimg-section">
              <svg xmlns="http://www.w3.org/2000/svg" height="77" width="76">
                <path fill-rule="nonzero" fill="#AF0D0D"
                  d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z">
                </path>
              </svg>
            </div>
            <div  className ="tscard-desc">
              <div className ="tscard-header">
                <div className ="tscard-title">Management </div>
                <div className ="tscard-menu">
                  <div  className ="dot"></div>
                  <div className ="dot"></div>
                  <div className ="dot"></div>
                </div>
              </div>
              <div className ="tscard-time">10+ Team Members</div>
            </div>
          </div>
          </div>
</div>
</div>
{/* Our team members starts */}

        <div
          id="contact"
          className="contact-section md:px-[90] lg:px-[150px] py-8 bg-[#7b0505] text-white"
        >
          <div className="sub-heading text-center mb-12">
            <div className="rale-regular">Contact Us</div>
            <h2 className="rale-bold text-3xl font-bold">
              Lets Discuss Your Next Project
            </h2>
          </div>

          <div className="contact-content h-fit mb-[60px] bg-[#7b0505] flex flex-col lg:flex-row justify-between items-center md:gap-20">
            <div className="image-container max-w-[600px] flex-1 w-[350px] h-[fit] mb-4 lg:mb-0">
              <InlineWidget url="https://calendly.com/arkaconsultancyandco/30min?text_color=636262&primary_color=7b0505" />
            </div>

            <div className="faq  max-w-[600px] flex-1">
              <h3 className="text-xl md:text-[28px] pop font-bold mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h3>

              {[
                {
                  question: "How we work?",
                  answer:
                    "Here At Arka, we work on a deadline-based model, where clients’ needs are met within the required time frame. Our employees have flexible working hours so we can ensure seamless work for them as well as our clients.",
                },
                {
                  question: "Do you have any Offices?",
                  answer:
                    "We are currently based in Una, Himachal Pradesh and Bangalore, Karnataka. The offices currently accommodate top level officials only meanwhile new office buildings are under construction.",
                },
                {
                  question: "Do you have fixed hours?",
                  answer:
                    "Here at Arka, we don't have a cliche office cycle of 9-5. You can choose your work hours according to your own ease. Ideally, we work for 2-5 hours daily from Monday to Friday.",
                },
                {
                  question: "Whats your team size?",
                  answer:
                    "With a talented team of 300+ people and increasing, we have a proven track record of success. We are dedicated to delivering innovative and effective solutions that drive real results.",
                },
                {
                  question: "Does ARKA work only with big industries?",
                  answer:
                    "We work with any organisation that wants to grow and develop a seamless workflow, be it small businesses or big industries.",
                },
                {
                  question: "How can I approach you?",
                  answer:
                    "In the below section, you will find a Calendly link to schedule a meeting, mention your time and we will email you within 24 hours and we can discuss everything in that meeting.",
                },
              ].map((item, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-[full]"
                >
                  <AccordionItem className="  w-[full]" value="item-1">
                    <AccordionTrigger className=" text-[16px] md:text-[20px] text-justify pop font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className=" text-[16px] leading-[28px] md:text-[20px] text-justify mont-serif-regular font-semibold">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>

        <div className="relative  md:px-[px] text-[14px] sm:flex sm:flex-col sm:items-center bg-[#7b0505] md:flex-row text-white mont-serif-regular p-0 m-0">
          <div className="w-[100%] md:w-[40%] mb-8 flex flex-col justify-center">
            <div className="w-[100%] flex flex-col items-center">
              <img className=" w-[300px]" src={"./assets/new logo.webp"}></img>
            </div>
            <div className="w-[100%] flex justify-center">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              ></a>
              <div className=" lg:max-w-sm">
                <p className="text-sm mt-2 text-deep-purple-50">
                  Mail us at: contact@arkaconsultancy.xyz
                </p>
                <p className="text-sm mt-2 text-deep-purple-50">
                  Call us at: 7023962764
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 md:w-[60%] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
              <div className="grid uppercase grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                <div className="md:col-span-2">
                  <p className="font-semibold tracking-wide text-teal-accent-400">
                    Quick Links
                  </p>
                  <ul className="mt-2 footer space-y-2">
                    <li>
                      <a
                        href="/"
                        className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                      >
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                      >
                        about us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog"
                        className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                      >
                        Blogs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <p className="font-semibold tracking-wide text-teal-accent-400">
                    Services
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a
                        href="#service"
                        className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                      >
                        Graphic Designing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service"
                        className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                      >
                        Web development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service"
                        className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                      >
                        App development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service"
                        className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                      >
                        UI/UX
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service"
                        className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                      >
                        SEO
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service"
                        className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                      >
                        Content creation
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service"
                        className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                      >
                        Email marketing
                      </a>
                    </li>

                    <li>
                      <a
                        href="#service"
                        className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                      >
                        sales
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
              <p className="text-sm text-gray-100">
                © Copyright 2024 Arka Consultancy And Co. All rights reserved.
              </p>
              <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                <a
                  href="/"
                  className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
