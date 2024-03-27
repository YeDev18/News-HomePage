import Img1 from '../../../assets/images/image-web-3-desktop.jpg';
import Img2 from '../../../assets/images/image-web-3-mobile.jpg';
import { newItems } from '../../../data';
const Hero = () => {
  return (
    <section className="container max-w-auto px-4 flex flex-col gap-x-4 gap-y-8 lg:flex-row lg:px-8">
      <div className=" flex flex-col gap-y-1 lg:w-[65%]">
        <div className="hidden md:flex ">
          <img src={Img1} alt="image-web-3-desktop" />
        </div>
        <div className="flex md:hidden">
          <img src={Img2} alt="image-web-3-desktop" />
        </div>
        <div className="flex flex-col justify-between py-4 lg:flex-row lg:gap-8">
          <h1 className=" text-[#00001a] text-[2.5rem] leading-[3.7rem] font-bold tracking-[0.01em] lg:text-[3.5rem]">
            The Bright Future of Web 3.0 ?
          </h1>
          <div className=" flex flex-col gap-8  lg:w-[45rem]">
            <p className="text-[#c5c6ce] text-sm leading-6 tracking-[0.04em] font-normal">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands ot the people. But is
              it really fulfilling its promise?
            </p>
            <a className="bg-[#00001a] cursor-pointer transition-all hover:bg-[#f15e50] px-4 py-3 w-[10rem] text-center font-medium text-[#fffdfa] tracking-[0.1em]">
              {' '}
              READ MORE
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 bg-[#00001a] p-8 h-fit ">
        <h2 className="text-[#e9ab53] text-4xl font-bold tracking-[0.01em] ">
          New
        </h2>
        <div className="flex flex-col gap-8 lg:gap-4 ">
          {newItems.map((newItem: any, index: number) => {
            return (
              <div
                key={index}
                className="py-8 flex flex-col gap-2 leading-[1.5rem] tracking-[0.01em] even:border-y-[0.1px] even:border-[#fffdfa67]"
              >
                <h3 className="text-[#fffdfa] text-xl font-bold">
                  {newItem.h1}
                </h3>
                <p className="text-[#c5c6ce]">{newItem.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
