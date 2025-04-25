
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartBarIcon, TrendingUp } from "lucide-react";
import { audienceData, overviewStats } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";
import StatCard from "@/components/dashboard/StatCard";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

const COLORS = ['#9b87f5', '#E5DEFF', '#1A1F2C', '#7E69AB', '#6E59A5', '#D6BCFA'];

const Analytics = () => {
  const [timeframe, setTimeframe] = useState("month");
  
  const growthData = [
    { name: 'Jan', followers: 120000, engagement: 3.8 },
    { name: 'Feb', followers: 125000, engagement: 4.1 },
    { name: 'Mar', followers: 131000, engagement: 4.3 },
    { name: 'Apr', followers: 138000, engagement: 4.5 },
    { name: 'May', followers: 143000, engagement: 4.4 },
    { name: 'Jun', followers: 147000, engagement: 4.6 },
    { name: 'Jul', followers: 152800, engagement: 4.6 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-1">Analytics</h1>
        <p className="text-muted-foreground">Track and analyze your performance metrics.</p>
      </div>

      <div className="flex justify-end">
        <Tabs defaultValue="month" className="w-[300px]" onValueChange={setTimeframe}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewStats.map((stat, index) => (
          <StatCard
            key={index}
            label={stat.label}
            value={stat.value}
            growth={stat.growth}
            isPercentage={stat.isPercentage}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Growth Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={growthData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis 
                    yAxisId="left"
                    tickFormatter={(value) => formatNumber(value)}
                  />
                  <YAxis 
                    yAxisId="right"
                    orientation="right"
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="followers"
                    name="Followers"
                    stroke="#9b87f5"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="engagement"
                    name="Engagement Rate (%)"
                    stroke="#1A1F2C"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Audience Demographics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-[150px]">
                <h4 className="text-sm font-medium mb-2 text-center">Age Distribution</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={audienceData.demographics.age}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="group" tick={{ fontSize: 11 }} />
                    <YAxis tickFormatter={(value) => `${value}%`} tick={{ fontSize: 11 }} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                    <Bar dataKey="value" fill="#9b87f5" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="h-[150px]">
                <h4 className="text-sm font-medium mb-2 text-center">Gender Distribution</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={audienceData.demographics.gender}
                      dataKey="value"
                      nameKey="group"
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={60}
                      paddingAngle={2}
                    >
                      {audienceData.demographics.gender.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Top Audience Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={audienceData.interests}
                  margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                  <YAxis type="category" dataKey="name" width={80} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  <Bar dataKey="value" fill="#9b87f5" radius={[0, 2, 2, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Optimal Posting Times</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={audienceData.activityHours}
                  margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="hour" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Active Audience']} />
                  <Bar dataKey="value" fill="#9b87f5" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Best posting times: 6PM-9PM when your audience is most active
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
