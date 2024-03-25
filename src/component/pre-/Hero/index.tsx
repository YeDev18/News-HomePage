import Img1 from '../../../assets/images/image-web-3-desktop.jpg';
import { newItems } from '../../../data';
const Hero = () => {
  return (
    <div className="container max-w-auto px-4 flex flex-col gap-8 lg:flex-row lg:px-8">
      <div className=" flex flex-col lg:w-10/12">
        <div>
          <img src={Img1} alt="" />
        </div>
        <div className="flex flex-col justify-between  py-8 lg:flex-row lg:gap-8">
          <h1 className=" text-[#00001a] text-[3.5rem] leading-[3.7rem] font-bold tracking-[0.01em]">
            The Bright Future of Web 3.0 ?
          </h1>
          <div className=" flex flex-col gap-8  w-[45rem]">
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
      <div className="flex flex-col bg-[#00001a] p-8 ">
        <h1 className="text-[#e9ab53] text-4xl font-bold tracking-[0.01em] ">
          New
        </h1>
        <div>
          {newItems.map((newItem: any, index: number) => {
            return (
              <div key={index}>
                <h1 className="text-[#fffdfa] text-xl font-bold">
                  {newItem.h1}
                </h1>
                <p className="text-[#c5c6ce]">{newItem.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
