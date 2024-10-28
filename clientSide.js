"use client";
import { Tooltip } from "@material-tailwind/react";
import { useState } from "react";
import { VscRemote } from "react-icons/vsc";
import { MdOutlineDownloadDone } from "react-icons/md";
import { getUpComingMatchesInCertianDate } from "@/serverSideCalls/UpComingMatches";

const availLogoCompitions = [
  {
    id: 1,
    src: "https://crests.football-data.org/world.png",
    alt: "FIFA World Cup",
    code: "WC",
  },
  {
    id: 2,
    src: "https://crests.football-data.org/EUR.svg",
    alt: "UEFA Champions League",
    code: "CL",
  },
  {
    id: 3,
    src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
    alt: "Bundesliga",
    code: "BL1",
  },
  {
    id: 4,
    src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
    alt: "Eredivisie",
    code: "DED",
  },
  {
    id: 5,
    src: "https://crests.football-data.org/764.svg",
    alt: "Campeonato Brasileiro Série A",
    code: "BSA",
  },
  {
    id: 6,
    src: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    alt: "Primera Division",
    code: "PD",
  },
  {
    id: 7,
    src: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    alt: "Ligue 1",
    code: "FL1",
  },
  {
    id: 8,
    src: "https://crests.football-data.org/770.svg",
    alt: "Championship",
    code: "ELC",
  },
  {
    id: 9,
    src: "https://crests.football-data.org/765.svg",
    alt: "Primeira Liga",
    code: "PPL",
  },
  {
    id: 10,
    src: "https://crests.football-data.org/EUR.svg",
    alt: "European Championship",
    code: "EC",
  },
  {
    id: 11,
    src: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    alt: "Serie A",
    code: "SA",
  },
  {
    id: 12,
    src: "https://crests.football-data.org/770.svg",
    alt: "Premier League",
    code: "PL",
  },
  {
    id: 13,
    src: "https://crests.football-data.org/south_america.png",
    alt: "Copa Libertadores",
    code: "CLI",
  },
];

export default availLogoCompitions;

export {
  Tooltip,
  useState,
  VscRemote,
  MdOutlineDownloadDone,
  getUpComingMatchesInCertianDate,
};
