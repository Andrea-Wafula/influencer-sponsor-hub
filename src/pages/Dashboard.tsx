
import StatCard from "@/components/dashboard/StatCard";
import EarningsChart from "@/components/dashboard/EarningsChart";
import SponsorshipList from "@/components/dashboard/SponsorshipList";
import ContentPreview from "@/components/dashboard/ContentPreview";
import { earningsData, overviewStats, recentContent, sponsorshipOffers } from "@/lib/mock-data";

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Alex! Here's an overview of your performance.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewStats.map((stat, index) => (
          <StatCard
            key={index}
            label={stat.label}
            value={stat.value}
            growth={stat.growth}
            isPercentage={stat.isPercentage}
            className={index === 1 ? "card-gradient" : ""}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EarningsChart data={earningsData} />
        </div>
        <div>
          <SponsorshipList sponsorships={sponsorshipOffers.slice(0, 3)} />
        </div>
      </div>
      
      <div>
        <ContentPreview content={recentContent} />
      </div>
    </div>
  );
};

export default Dashboard;
