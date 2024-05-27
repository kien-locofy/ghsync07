import DeliveryDetails from "../DeliveryDetails";

const Footer: FunctionComponentFooterType = () => {
  console.log("hello world");

  const items = [
    {
      title: "Free Delivery",
      description: "For all oders over $50, consectetur adipim scing elit."
    },
    {
      title: "90 Days Return",
      description: "If goods have problems, consectetur adipim scing elit."
    },
    {
      title: "Secure Payment",
      description: "100% secure payment, consectetur adipim scing elit.",
    }
  ]

  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <section className="flex-1 bg-snow flex flex-row flex-wrap items-start justify-start py-24 px-[100px] box-border gap-[46px] max-w-full text-left text-13xl text-black font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[23px] mq750:pl-[50px] mq750:pr-[50px] mq750:box-border">
        {
          items.map(({title, description}) => (
            <DeliveryDetails
              title={title}
              description={description}
            />
          ))
        }
      </section>
    </div>
  );
};

export default Footer;