import { features } from '../../../data';

const Feature = () => {
  return (
    <div className=" container flex flex-col max-w-auto px-4 py-16 justify-between gap-10 lg:flex-row lg:px-8  ">
      {features.map((feature: any, index: number) => {
        return (
          <div key={index} className="flex  lg:flex-row gap-x-8 ">
            <div className=" ">
              <img
                src={feature.image}
                alt={feature.alt}
                className="w-[7rem] h-[auto ]"
              />
            </div>
            <div className="w-[50%] flex flex-col justify-between">
              <h3 className="text-5xl font-bold text-[#c5c6ce]">
                0{index + 1}
              </h3>
              <a className="text-[#00001a] leading-[1.5rem] tracking-[0.01em]  font-extrabold  transition-all text-base hover:text-[#f15e50] hover:cursor-pointer">
                {feature.h1}
              </a>
              <p className="text-sm leading-[1.5rem] tracking-[0.01em] text-[#c5c6ce]">
                {feature.paragraph}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feature;
