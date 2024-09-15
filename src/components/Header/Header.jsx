import imageHeader from "../../assets/Images/hero-image-wr.jpg";
import SvgLogo from "../../assets/svg/Logo.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="relative">
          {/* تصویر پس‌زمینه */}
          <img className="w-full h-auto" src={imageHeader} alt="Earth" />

          {/* لوگو */}
          <div className="absolute inset-0 flex justify-center items-center">
            <img src={SvgLogo} alt="Logo" className="max-w-[50%] h-auto" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
