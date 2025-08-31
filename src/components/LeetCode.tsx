import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Calendar, Trophy, Target, ExternalLink } from "lucide-react";

interface LeetCodeData {
  totalSolved: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  submissionCalendar: Record<string, number>;
  recentSubmissions: Array<{
    title: string;
    titleSlug: string;
    timestamp: string;
    statusDisplay: string;
    lang: string;
  }>;
}

const fetchLeetCodeData = async (): Promise<LeetCodeData> => {
  const response = await fetch(
    "https://leetcode-api-faisalshohag.vercel.app/myday07"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch LeetCode data");
  }
  return response.json();
};

const LeetCode = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["leetcode-data"],
    queryFn: fetchLeetCodeData,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  if (isLoading) {
    return (
      <section id="leetcode" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              LeetCode Activity
            </h2>
            <div className="animate-pulse">Loading stats...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="leetcode" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              LeetCode Activity
              <a
                href="https://leetcode.com/myday07/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </h2>
            <p className="text-muted-foreground">
              Failed to load LeetCode data
            </p>
          </div>
        </div>
      </section>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "medium":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "hard":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-primary/20 text-primary border-primary/30";
    }
  };

  const getActivityColor = (count: number) => {
    if (count === 0) return "bg-muted/50";
    if (count <= 2) return "bg-emerald-500/30";
    if (count <= 4) return "bg-emerald-500/60";
    if (count <= 6) return "bg-emerald-500/80";
    return "bg-emerald-500";
  };

  const formatDate = (timestamp: string) => {
    return new Date(parseInt(timestamp) * 1000).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const generateCalendar = () => {
    if (!data?.submissionCalendar) return [];

    const calendar = [];
    const today = new Date();

    // Get first day of current month
    const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    // Get first day of previous month
    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      1
    );

    // Start from previous month
    let currentDate = new Date(previousMonth);

    // Generate all dates until today (inclusive)
    while (currentDate <= today) {
      // Create timestamp for this date (start of day UTC)
      const utcDate = new Date(
        Date.UTC(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        )
      );
      const timestamp = Math.floor(utcDate.getTime() / 1000).toString();

      // Get submission count for this date, default to 0
      const count = data.submissionCalendar[timestamp] || 0;

      calendar.push({
        date: currentDate.toDateString(),
        count,
        timestamp,
        month: currentDate.getMonth(),
        day: currentDate.getDate(),
      });

      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return calendar;
  };

  const calendarData = generateCalendar() || [];

  // Group calendar data by month
  const calendarByMonth = calendarData.reduce(
    (acc, day) => {
      const monthKey = day.month;
      if (!acc[monthKey]) {
        acc[monthKey] = [];
      }
      acc[monthKey].push(day);
      return acc;
    },
    {} as Record<
      number,
      Array<{
        date: string;
        count: number;
        timestamp: string;
        month: number;
        day: number;
      }>
    >
  );

  const getMonthName = (monthIndex: number) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[monthIndex];
  };

  return (
    <section
      id="leetcode"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            LeetCode Activity
            <a
                href="https://leetcode.com/myday07/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Consistent problem-solving practice and algorithmic thinking
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Solved
              </CardTitle>
              <Trophy className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {data?.totalSolved}
              </div>
              <p className="text-xs text-muted-foreground">
                Problems completed
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Easy</CardTitle>
              <Target className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-400">
                {data?.easySolved}
              </div>
              <p className="text-xs text-muted-foreground">
                of {data?.totalEasy}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Medium</CardTitle>
              <Target className="h-4 w-4 text-amber-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-400">
                {data?.mediumSolved}
              </div>
              <p className="text-xs text-muted-foreground">
                of {data?.totalMedium}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hard</CardTitle>
              <Target className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-400">
                {data?.hardSolved}
              </div>
              <p className="text-xs text-muted-foreground">
                of {data?.totalHard}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Submissions */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Recent Submissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data?.recentSubmissions
                  .slice(0, 3)
                  .map((submission, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">
                          {submission.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(submission.timestamp)} • {submission.lang}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          submission.statusDisplay === "Accepted"
                            ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                            : "bg-red-500/20 text-red-400 border-red-500/30"
                        }
                      >
                        {submission.statusDisplay}
                      </Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Activity Calendar */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Activity Calendar
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Daily submission activity over the past two months
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(calendarByMonth).map(([monthIndex, days]) => (
                  <div key={monthIndex} className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">
                      {getMonthName(parseInt(monthIndex))}
                    </h4>
                    <div className="grid grid-cols-10 gap-2">
                      {(
                        days as Array<{
                          date: string;
                          count: number;
                          timestamp: string;
                          month: number;
                          day: number;
                        }>
                      ).map((day, index) => (
                        <div
                          key={index}
                          className={`w-6 h-6 rounded ${getActivityColor(
                            day.count
                          )} hover:ring-2 hover:ring-primary/50 transition-all cursor-pointer flex items-center justify-center`}
                          title={`${new Date(
                            parseInt(day.timestamp) * 1000
                          ).toLocaleDateString()}: ${day.count} submissions`}
                        >
                          <span className="text-xs text-foreground font-medium">
                            {day.day}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-sm bg-muted/50"></div>
                  <div className="w-3 h-3 rounded-sm bg-emerald-500/30"></div>
                  <div className="w-3 h-3 rounded-sm bg-emerald-500/60"></div>
                  <div className="w-3 h-3 rounded-sm bg-emerald-500/80"></div>
                  <div className="w-3 h-3 rounded-sm bg-emerald-500"></div>
                </div>
                <span>More</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Global Ranking */}
        <div className="mt-8 text-center">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-md mx-auto">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">
                #{data?.ranking.toLocaleString()}
              </div>
              <p className="text-muted-foreground">Global Ranking</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;
