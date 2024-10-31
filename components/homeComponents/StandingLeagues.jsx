"use client";
import React, { useState, useEffect } from "react";
import { Trophy } from "lucide-react";
import Link from "next/link";
import { mainThreeLogoCompitions } from "@/clientSide";
import { useDispatch, useSelector } from "react-redux";
import { getLeagueStanding } from "@/redux-system/slices/home/standingLeagueSlice";
import LoadingMatches from "./LoadingMatches";


const StandingLeagues = () => {
  // useState
  const [activeStandingLeg, setActiveStandingLeg] = useState("PL");
  // useSelector
  const { standingData, standingLoading } = useSelector(
    (state) => state.leagueStanding
  );


  // useDispacth
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    dispatch(getLeagueStanding(activeStandingLeg));
  }, [activeStandingLeg]);

  return (
    <section className="flex px-[2em] md:px-0 lg:px-[4em] w-full flex-col justify-center items-center">
      <h2 className="text-2xl text-white dark:text-mainTextInLight font-semibold mb-4">
        Standing
      </h2>
      <div className=" w-full">
        <div className="mx-auto  bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row overflow-x-auto justify-center bg-gray-100">
            {mainThreeLogoCompitions.map((league, index) => (
              <button
                key={index}
                onClick={() => setActiveStandingLeg(league.code)}
                className={`flex-shrink-0 px-4 py-2  text-sm font-medium ${
                  activeStandingLeg === league.code
                    ? "bg-white text-green-600 border-b-2 border-green-600"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {league.alt}
              </button>
            ))}
          </div>
          <div className="divide-y  p-4 rounded-lg items-center flex-col  max-h-[10em] bg-subTextInLight dark:bg-subTextInDark overflow-x-auto flex gap-4 w-full justify-evenly  divide-gray-200">
            {/*start standing league table */}
            {standingLoading ? (
              <LoadingMatches />
            ) : (
              <table className="bg-white shadow-lg rounded-lg border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="w-[60px] text-center px-2 py-2">Pos</th>
                    <th className="text-center px-4">Team</th>
                    <th className="text-center px-2">Played</th>
                    <th className="text-center px-2">Won</th>
                    <th className="text-center px-2">Drawn</th>
                    <th className="text-center px-2">Lost</th>
                    <th className="w-[80px] text-center px-2">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {standingData.map(
                    (team, index) =>
                      index < 5 && (
                        <tr key={index} className=" border-b dark:bg-mainTextInDark">
                          <td className="text-center font-medium px-2 py-2 dark:text-white">
                            {team?.position === 1 ? (
                              <Trophy className="h-6 w-6 text-yellow-400" />
                            ) : (
                              team.position
                            )}
                          </td>
                          <td className="flex items-center px-4 py-2">
                            <img
                              src={team.team.crest}
                              alt={`${team.team.shortName} logo`}
                              className="h-8 w-8 rounded-full bg-gray-200 mr-2"
                            />
                            <span className="dark:text-white">{team.team.shortName}</span>
                          </td>
                          <td className="text-center px-2 py-2 dark:text-white">
                            {team.playedGames}
                          </td>
                          <td className="text-center px-2 py-2  text-green-800 rounded">
                            {team.won}
                          </td>
                          <td className="text-center px-2 py-2  text-yellow-800 rounded">
                            {team.draw}
                          </td>
                          <td className="text-center px-2 py-2  text-red-800 rounded">
                            {team.lost}
                          </td>
                          <td className="text-center font-bold px-2 dark:text-white  py-2">
                            {team.points}
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            )}

            {/* end standing league table */}

            <Link
              className=" text-sm font-bold bg-mainBg dark:bg-mainTextInDark p-2 rounded-lg  cursor-pointer   text-white border-0"
              href="/matches"
            >
              More ...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandingLeagues;
