import AvaliableCompetetions from "@/components/homeComponents/AvaliableCompetetions";
import UpcomingMatches from "@/components/homeComponents/UpcomingMatches";
import axios from "axios";

// Mock data
const latestMatches = [
  {
    id: 1,
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    score: "2-1",
    date: "2023-05-20",
  },
  {
    id: 2,
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    score: "3-2",
    date: "2023-05-20",
  },
  {
    id: 3,
    homeTeam: "Bayern Munich",
    awayTeam: "Borussia Dortmund",
    score: "1-1",
    date: "2023-05-19",
  },
];

const popularTeams = [
  {
    id: 1,
    name: "Manchester United",
    logo: "/placeholder.svg?height=50&width=50",
  },
  { id: 2, name: "Real Madrid", logo: "/placeholder.svg?height=50&width=50" },
  { id: 3, name: "Bayern Munich", logo: "/placeholder.svg?height=50&width=50" },
  { id: 4, name: "Barcelona", logo: "/placeholder.svg?height=50&width=50" },
];

const latestNews = [
  {
    id: 1,
    title: "Messi wins another Ballon d'Or",
    date: "2023-05-20",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Champions League final set for June 10",
    date: "2023-05-19",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Premier League season comes to thrilling conclusion",
    date: "2023-05-18",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default async function Home() {
  return (
    <div className="space-y-2 flex w-full justify-center items-center flex-col py-4">
      <AvaliableCompetetions />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center w-full container">
        <div className="w-full">
          <UpcomingMatches />
        </div>

        <div className="w-full ">
          <UpcomingMatches />
        </div>
      </div>

      {/* <section>
        <h2 className="text-2xl font-semibold mb-4">Latest Results</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {latestMatches.map((match) => (
            <div
              key={match.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-center">
                <span>{match.homeTeam}</span>
                <span className="font-bold text-lg">{match.score}</span>
                <span>{match.awayTeam}</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {match.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Popular Teams</h2>
        <div className="flex flex-wrap gap-4">
          {popularTeams.map((team) => (
            <div
              key={team.id}
              className="flex items-center bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={team.logo}
                alt={`${team.name} logo`}
                width={50}
                height={50}
                className="mr-2"
              />
              <span className="font-medium">{team.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((news) => (
            <div
              key={news.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={news.image}
                alt={news.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{news.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {news.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
