"use client";
import { Typography } from "@material-tailwind/react";

const LoadingMatches = () => {
  return (
    <div className="w-1/2 flex items-cenetr justify-center gap-4 animate-pulse">
      <Typography
        as="div"
        variant="h1"
        className="mb-4 h-3 w-56 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
    </div>
  );
};

export default LoadingMatches;