import { features } from '../../../data';

const Feature = () => {
  return (
    <div className=" container flex flex-col max-w-auto px-4 py-16 justify-between gap-6 lg:flex-row lg:px-8  ">
      {features.map((feature: any, index: number) => {
        return (
          <div key={index} className="flex justify-between flex-row gap-x-4">
            <div className="w-[50%] h-[1rem]">
              <img src={feature.image} className="w-[100%]" />
            </div>
            <div className="w-[50%]">
              <h1 className="text-5xl font-extrabold text-[#c5c6ce]">
                0{index + 1}
              </h1>
              <h2 className="text-[#00001a] font-extrabold text-xl">
                {feature.h1}
              </h2>
              <p>{feature.paragraph}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feature;
