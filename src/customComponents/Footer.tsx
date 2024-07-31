import Logo from "../assets/arkaLight.png";
import CandelyCard from "./CandelyCard";
const Footer = () => {
  return (
    <footer className="bg-[#AF0D0D]  mont-serif-regular text-white py-10">
      <CandelyCard/>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        <div className="flex justify-center md:justify-start">
          <img
            src={Logo}
            alt="Arka Consultancy Logo"
            className="h-[12rem] w-auto"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">QUICK LINKS</h2>
          <ul>
            <li className="mb-2">
              <a target="_blank" href="https://arkaconsultancy.xyz/#contact" className="hover:underline">
                CONTACT US
              </a>
            </li>
            <li className="mb-2">
              <a target="_blank" href="https://arkaconsultancy.xyz/#about" className="hover:underline">
                ABOUT US
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">SERVICES</h2>
          <ul>
            <li className="mb-2">
              <a href='https://arkaconsultancy.xyz/#services' target="_blank" className="hover:underline">
                Sales
              </a>
            </li>
            <li className="mb-2">
              <a href='https://arkaconsultancy.xyz/#services' target="_blank" className="hover:underline">
                Social Media Marketing
              </a>
            </li>
            <li className="mb-2">
              <a href='https://arkaconsultancy.xyz/#services' target="_blank" className="hover:underline">
                App/Web Development
              </a>
            </li>
            <li className="mb-2">
              <a href='https://arkaconsultancy.xyz/#services' target="_blank" className="hover:underline">
                UI / UX Designing
              </a>
            </li>
            <li className="mb-2">
              <a href='https://arkaconsultancy.xyz/#services' target="_blank" className="hover:underline">
                Advertisement
              </a>
            </li>
            <li className="mb-2">
              <a href='https://arkaconsultancy.xyz/#services' target="_blank" className="hover:underline">
                SEO
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">OTHERS</h2>
          <ul>
            <li className="mb-2">Mail us at: contact@arkaconsultancy.xyz</li>
            <li className="mb-2">Call us at: 7023962764</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10">
        <p className="text-center py-4">&copy; 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
