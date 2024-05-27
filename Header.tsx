import { FunctionComponent } from "react";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-white flex flex-row items-start justify-center py-9 pr-5 pl-[425px] box-border gap-[158px] top-[0] z-[99] sticky max-w-full mq800:gap-[39px] mq800:pl-[106px] mq800:box-border mq450:gap-[20px] mq450:pl-5 mq450:box-border mq1350:gap-[79px] mq1350:pl-[212px] mq1350:box-border ${className}`}
    >
      <div className="h-[100px] w-[1440px] relative bg-white hidden max-w-full" />
      <nav className="m-0 w-[430px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full mq800:hidden">
        <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-base text-black font-poppins">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[48px] z-[1]">
            Home
          </a>
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[42px] z-[1]">
            Shop
          </a>
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[49px] z-[1]">
            About
          </a>
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[66px] z-[1]">
            Contact
          </a>
        </nav>
      </nav>
      <div className="w-[247px] flex flex-row items-start justify-between gap-[20px]">
        <img
          className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
          loading="lazy"
          alt=""
          src="/mdiaccountalertoutline.svg"
        />
        <img
          className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
          loading="lazy"
          alt=""
          src="/akariconssearch.svg"
        />
        <img
          className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
          loading="lazy"
          alt=""
          src="/akariconsheart.svg"
        />
        <img
          className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
          loading="lazy"
          alt=""
          src="/antdesignshoppingcartoutlined.svg"
        />
      </div>
    </header>
  );
};

export default Header;