"use client";
import {
  Card,
  Avatar,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@/clientSide";
import { getYesterdayMatch } from "@/redux-system/slices/home/matchesSlice";
import { format } from "date-fns";
import { Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingMatches from "./LoadingMatches";
import ErrorMatchSummary from "./errors_handling/ErrorMatchSummary";
import { callingYouTubeHighLight } from "@/redux-system/slices/youtube/highlightsSlice";

const LatestMatchSummary = () => {
  const { yesterdayLoading, yesterdayMatch, yesterdayError } = useSelector(
    (state) => state.homeMatches
  );

  const { tubeLoading, tubeData, tubeError } = useSelector(
    (state) => state.highlight
  );

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const formattedYesterday = new Date();
  formattedYesterday.setDate(formattedYesterday.getDate() - 1);
  const yesterday = format(formattedYesterday, "yyyy-MM-dd");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getYesterdayMatch(yesterday));
  }, []);

  useEffect(() => {
    if (yesterdayMatch) {
      dispatch(callingYouTubeHighLight(yesterdayMatch));
    }
  }, [yesterdayMatch]);

  if (yesterdayError) {
    return <ErrorMatchSummary />;
  }

  return (
    <section className="py-12 bg-subMainBg opacity-90">
      <div className="container flex flex-col justify-center items-center mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white  dark:text-mainTextInLight">
          Latest Match Highlight
        </h2>
        {yesterdayLoading ? (
          <LoadingMatches />
        ) : (
          <Card className="overflow-hidden bg-opacity-35">
            <div className="p-0 ">
              <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative  aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* youtube hilight */}
                    <Button onClick={handleOpen} variant="gradient">
                      Play
                    </Button>
                    <Dialog
                      open={open}
                      handler={handleOpen}
                      animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                      }}
                    >
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${tubeData}?si=6pU1xHSlbX5TBNoA`}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="Access-Control-Allow-Origin"
                        allowFullScreen={true}
                      ></iframe>
                    </Dialog>

                    {/* youtube highlight */}
                  </div>
                </div>
                <div className="relative p-4 aspect-video  md:aspect-auto">
                  <Image
                    src={yesterdayMatch?.area.flag}
                    width={0}
                    height={0}
                    alt="logo"
                    className="w-full rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="w-full  bg-mainBg dark:bg-mainTextInLight text-white dark:text-mainTextInDark text-center px-8">
              <div className="flex text-white items-center pt-2 justify-between mb-4">
                <div className="flex items-center">
                  <Image
                    src={yesterdayMatch?.homeTeam.crest}
                    alt="logo"
                    width={60}
                    height={60}
                    className="rounded-full mr-2"
                  />
                  <span className="font-semibold">
                    {yesterdayMatch?.homeTeam.name}
                  </span>
                </div>
                <span className="text-2xl font-bold">
                  {yesterdayMatch?.score.fullTime.home} -{" "}
                  {yesterdayMatch?.score.fullTime.away}
                </span>
                <div className="flex items-center">
                  <span className="font-semibold text-xl">
                    {yesterdayMatch?.awayTeam.name}
                  </span>
                  <Image
                    src={yesterdayMatch?.awayTeam.crest}
                    alt="logo"
                    width={60}
                    height={60}
                    className="rounded-full ml-2"
                  />
                </div>
              </div>
              <p className="text-gray-200 dark:text-gray-700 font-thin">
                Yesterday,a football match was held between{" "}
                {yesterdayMatch?.homeTeam.shortName} and{" "}
                {yesterdayMatch?.awayTeam.shortName} within the framework of the{" "}
                {yesterdayMatch?.competition.name}.The match was moderated by
                the {yesterdayMatch?.referees[0]?.nationality} referee{" "}
                {yesterdayMatch?.referees[0]?.name}.
              </p>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default LatestMatchSummary;
