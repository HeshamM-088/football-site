"use client";
import React, { useState } from "react";
import { VscRemote } from "react-icons/vsc";
import { MdOutlineDownloadDone } from "react-icons/md";
import Link from "next/link";

const UpcomingMatches = ({
  today,
  yesterday,
  tomorrow,
  data: { matches: todayMatches },
}) => {
  const [activeLeague, setActiveLeague] = useState(today);

  const leagues = [
    { id: yesterday, name: "Yesterday" },
    { id: today, name: "Today" },
    { id: tomorrow, name: "Tomorrow" },
  ];

  return (
    <section className="flex px-[4em] w-full flex-col justify-center items-center">
      <h2 className="text-2xl text-mainTextInLight font-semibold mb-4">
        Matches
      </h2>
      <div className="w-full ">
        <div className="mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row overflow-x-auto justify-center bg-gray-100">
            {leagues.map((league, index) => (
              <button
                key={index}
                onClick={() => setActiveLeague(league.id)}
                className={`flex-shrink-0 px-4 py-2 text-sm font-medium ${
                  activeLeague === league.id
                    ? "bg-white text-green-600 border-b-2 border-green-600"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {league.name}
              </button>
            ))}
          </div>
          <div className="divide-y p-4 items-center flex-col md:flex-row max-h-[10em] bg-subTextInLight dark:bg-subTextInDark overflow-x-auto flex gap-4 w-full justify-evenly  divide-gray-200">
            {todayMatches.map(
              ({ status, homeTeam, awayTeam, score: { fullTime } }, index) =>
                index < 4 && (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row  bg-mainBg dark:bg-mainTextInDark md:min-w-max text-white items-center justify-between p-4"
                  >
                    <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-2 ">
                      <div className="text-sm font-bold">
                        {homeTeam.shortName}{" "}
                        {status == "FINISHED" && fullTime.home}
                      </div>
                      <div className="text-lg font-bold text-black dark:text-subTextInDark">
                        {status == "FINISHED" ? (
                          <MdOutlineDownloadDone className="text-2xl text-white" />
                        ) : (
                          <VscRemote className="text-2xl text-white" />
                        )}
                      </div>
                      <div className="text-sm font-bold">
                        {awayTeam.shortName}{" "}
                        {status == "FINISHED" && fullTime.away}
                      </div>
                    </div>
                  </div>
                )
            )}
            <Link
              className=" text-xs font-bold bg-mainBg dark:bg-mainTextInDark p-1 rounded-lg  cursor-pointer   text-white border-0"
              href="/matches"
            >
              . . .
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;
