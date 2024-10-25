export const getUpComingMatchesInCertianDate = async (certianDate) => {
  const res = await fetch(
    `http://api.football-data.org/v4/matches?date=${certianDate}`,
    {
      headers: {
        "X-Auth-Token": "e191e07f2acf423296dd397ab4d29910",
      },
    }
  );
  const info = await res.json();

  return info;
};
