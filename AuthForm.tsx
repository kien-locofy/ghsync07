import { FunctionComponent } from "react";

export type AuthFormType = {
  className?: string;
};

const AuthForm: FunctionComponent<AuthFormType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-row items-start justify-start pt-[63px] pb-[67px] pr-[98px] pl-[100px] box-border gap-[26px] max-w-full text-left text-base text-black font-poppins mq800:pt-[41px] mq800:pb-11 mq800:pr-[49px] mq800:pl-[50px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:flex-wrap ${className}`}
    >
      <div className="h-[760px] w-[1440px] relative bg-white hidden max-w-full" />
      <div className="flex-1 bg-white flex flex-col items-start justify-start pt-[35px] px-[72px] pb-[58px] box-border gap-[36px] min-w-[395px] max-w-full z-[1] mq800:gap-[18px] mq800:pt-[23px] mq800:px-9 mq800:pb-[38px] mq800:box-border mq800:min-w-full mq1350:flex-1">
        <div className="w-[608px] h-[630px] relative bg-white hidden max-w-full" />
        <div className="flex flex-row items-start justify-start py-0 px-0.5 text-17xl">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[107px] whitespace-nowrap z-[1] mq800:text-10xl mq450:text-3xl">
            Log In
          </h1>
        </div>
        <div className="w-[430px] h-[121px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="relative font-medium z-[1]">
              Username or email address
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
              <div className="self-stretch flex-1 relative rounded-3xs bg-white box-border max-w-full z-[1] border-[1px] border-solid border-darkgray" />
            </div>
          </div>
        </div>
        <div className="w-[430px] flex flex-row items-start justify-start pt-0 px-[3px] pb-1.5 box-border max-w-full">
          <textarea
            className="[border:none] bg-[transparent] h-[121px] w-auto [outline:none] flex-1 flex flex-col items-start justify-start font-poppins font-medium text-base text-black max-w-full"
            placeholder="Password"
            rows={6}
            cols={21}
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-1">
          <div className="flex flex-row items-start justify-start gap-[21px]">
            <div className="h-[27px] w-[30px] relative rounded-8xs bg-white box-border z-[1] border-[1px] border-solid border-darkgray" />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative inline-block min-w-[120px] z-[1]">
                Remember me
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[31px] max-w-full text-xl mq800:flex-wrap mq450:gap-[15px]">
          <div className="rounded-mini flex flex-row items-start justify-start py-[15px] pr-[77px] pl-[79px] whitespace-nowrap z-[1] border-[1px] border-solid border-black">
            <div className="h-16 w-[215px] relative rounded-mini box-border hidden border-[1px] border-solid border-black" />
            <div className="relative inline-block min-w-[59px] z-[1]">
              Log In
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0 text-base">
            <div className="relative font-light z-[1]">Lost Your Password?</div>
          </div>
        </div>
      </div>
      <div className="flex-[0.9871] bg-white flex flex-col items-start justify-start pt-[35px] px-[75px] pb-[58px] box-border gap-[36px] min-w-[395px] max-w-full z-[1] text-17xl mq800:gap-[18px] mq800:pt-[23px] mq800:px-[37px] mq800:pb-[38px] mq800:box-border mq800:min-w-full mq1350:flex-1">
        <div className="w-[608px] h-[630px] relative bg-white hidden max-w-full" />
        <h1 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq800:text-10xl mq450:text-3xl">
          Register
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-6 pr-[3px] pl-px box-border max-w-full text-justify text-base">
          <div className="flex-1 flex flex-col items-start justify-start gap-[18px] max-w-full">
            <div className="w-[424px] h-[139px] flex flex-col items-start justify-start pt-0 px-0 pb-[18px] box-border gap-[22px] max-w-full text-left">
              <div className="relative font-medium inline-block min-w-[115px] z-[1]">
                Email address
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
                <div className="self-stretch flex-1 relative rounded-3xs bg-white box-border max-w-full z-[1] border-[1px] border-solid border-darkgray" />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
              <p className="m-0 flex-1 relative font-light inline-block max-w-full z-[1]">
                A link to set a new password will be sent to your email address.
              </p>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
              <p className="m-0 flex-1 relative inline-block max-w-full z-[1]">
                <span className="font-light">{`Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our `}</span>
                <span className="font-semibold">privacy policy.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-0.5">
          <button className="cursor-pointer py-[15px] px-[67px] bg-[transparent] rounded-mini flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div className="h-16 w-[215px] relative rounded-mini box-border hidden border-[1px] border-solid border-black" />
            <div className="relative text-xl font-poppins text-black text-left inline-block min-w-[81px] z-[1] mq450:text-base">
              Register
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;