"use client";
import Image from "next/image";
import React from "react";
import { Tooltip } from "@/clientSide";
import availLogoCompitions from "@/clientSide";

const AvaliableCompetetions = () => {
  return (
    <section
      aria-label="Our partners"
      className="flex justify-center items-center flex-col"
    >
      <h2 className="text-2xl font-bold text-white  dark:text-mainTextInLight">
        Competetions
      </h2>
      <div className="w-full overflow-hidden py-8">
        <div className="relative flex w-full">
          <div className="animate-slide flex-wrap gap-y-8 px-12 flex w-full items-center justify-evenly">
            {availLogoCompitions.map(({ id, src, alt, code }) => (
              <div
                key={`${id}`}
                className="mx-4 flex flex-wrap  items-center justify-center rounded-lg"
              >
                <Tooltip
                  content={alt}
                  className="bg-green-900 dark:bg-white dark:text-black"
                  animate={{
                    mount: { scale: 0.8, y: 0 },
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={0}
                    height={0}
                    priority={true}
                    className="min-w-[40px] drop-shadow-3xl cursor-pointer rounded-lg hover:scale-[1.2] transition-all duration-[0.6s]"
                  />
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvaliableCompetetions;

/*



    {availLogoCompitions.map(({ id, src, alt, code }) => (
          <Image alt={alt} src={src} width={100} height={100} key={id} />
        ))}
*/
