
import { cn } from "@/lib/utils";
import { formatNumber, getGrowthIndicator } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";

interface StatCardProps {
  label: string;
  value: number;
  growth?: number;
  isPercentage?: boolean;
  className?: string;
}

const StatCard = ({ label, value, growth, isPercentage = false, className }: StatCardProps) => {
  const formattedValue = isPercentage ? `${value}%` : formatNumber(value);
  const growthInfo = growth ? getGrowthIndicator(growth) : null;

  return (
    <div className={cn("stat-card", className)}>
      <p className="text-muted-foreground text-sm">{label}</p>
      <div className="flex items-end justify-between mt-1">
        <h3 className="text-2xl font-bold">{formattedValue}</h3>
        
        {growthInfo && (
          <div className={cn("flex items-center text-sm", growthInfo.color)}>
            {growthInfo.icon === "trending-up" ? (
              <TrendingUp size={16} className="mr-1" />
            ) : (
              <TrendingDown size={16} className="mr-1" />
            )}
            <span>{Math.abs(growth).toFixed(1)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
