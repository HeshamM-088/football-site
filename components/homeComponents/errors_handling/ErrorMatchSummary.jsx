import { Card, Avatar, Button } from "@/clientSide";
import { Play } from "lucide-react";
import errorImg from "@/public/errorBlurImg.jpg";
import Image from "next/image";
const ErrorMatchSummary = () => {
  return (
    <section className="py-12 bg-subMainBg ">
      <div className="container flex flex-col justify-center items-center mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white  dark:text-mainTextInLight">
          Latest Match Highlight
        </h2>

        <Card className="overflow-hidden bg-opacity-35">
          <div className="p-0 ">
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative p-4 aspect-video">
                <Image
                  src={errorImg}
                  alt="Match Highlight Thumbnail"
                  width={0}
                  height={0}
                  className="w-full rounded-md"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full"
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Play Video
                  </Button>
                </div>
              </div>
              <div className="relative p-4 aspect-video  md:aspect-auto">
                <Image
                  src={errorImg}
                  width={0}
                  height={0}
                  alt="logo"
                  className="w-full rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="w-full  bg-mainBg dark:bg-mainTextInLight text-white dark:text-mainTextInDark text-center px-8">
            <p className="text-light-blue-900 dark:text-red-600 font-bold text-xl">
              Sorry ! The Latest Match Highlight Is Not Avaliable Now ...
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ErrorMatchSummary;
