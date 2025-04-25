
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface Sponsorship {
  id: string;
  brand: string;
  offer: number;
  requirements: string;
  status: string;
  category: string;
  deadline: string;
  logoColor: string;
}

interface SponsorshipListProps {
  sponsorships: Sponsorship[];
}

const SponsorshipList = ({ sponsorships }: SponsorshipListProps) => {
  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">Recent Sponsorship Offers</CardTitle>
        <Button variant="outline" size="sm">View All</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sponsorships.map((sponsorship) => (
            <div 
              key={sponsorship.id}
              className="flex items-center p-3 border rounded-md bg-card"
            >
              <div 
                className="h-10 w-10 rounded-md mr-4 flex items-center justify-center text-white font-semibold"
                style={{ backgroundColor: sponsorship.logoColor }}
              >
                {sponsorship.brand.substring(0, 2)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{sponsorship.brand}</h4>
                  <span className="text-sm font-medium">{formatCurrency(sponsorship.offer)}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm text-muted-foreground">{sponsorship.requirements}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    sponsorship.status === 'accepted' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {sponsorship.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SponsorshipList;
