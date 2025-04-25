
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { sponsorshipOffers } from "@/lib/mock-data";
import { DollarSign } from "lucide-react";

const Sponsorships = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-1">Sponsorships</h1>
          <p className="text-muted-foreground">Manage and track your sponsorship opportunities.</p>
        </div>
        <Button className="bg-brand-purple hover:bg-brand-purple/90">
          <DollarSign size={16} className="mr-2" /> New Opportunity
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="rounded-lg border overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted text-muted-foreground text-sm">
                <tr>
                  <th className="p-3 text-left font-medium">Brand</th>
                  <th className="p-3 text-left font-medium">Category</th>
                  <th className="p-3 text-left font-medium">Offer</th>
                  <th className="p-3 text-left font-medium">Requirements</th>
                  <th className="p-3 text-left font-medium">Deadline</th>
                  <th className="p-3 text-left font-medium">Status</th>
                  <th className="p-3 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {sponsorshipOffers.map((offer) => (
                  <tr key={offer.id} className="bg-card">
                    <td className="p-3">
                      <div className="flex items-center">
                        <div 
                          className="h-8 w-8 rounded-md mr-3 flex items-center justify-center text-white font-semibold text-xs"
                          style={{ backgroundColor: offer.logoColor }}
                        >
                          {offer.brand.substring(0, 2)}
                        </div>
                        <span className="font-medium">{offer.brand}</span>
                      </div>
                    </td>
                    <td className="p-3">{offer.category}</td>
                    <td className="p-3 font-medium">{formatCurrency(offer.offer)}</td>
                    <td className="p-3">{offer.requirements}</td>
                    <td className="p-3">{new Date(offer.deadline).toLocaleDateString()}</td>
                    <td className="p-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        offer.status === 'accepted' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {offer.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">View</Button>
                        {offer.status === 'pending' && (
                          <Button size="sm" variant="outline" className="text-green-600">Accept</Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="card-gradient">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Need help negotiating with brands?</h3>
              <p className="text-muted-foreground">Our AI-powered assistant can help you negotiate better deals and increase your sponsorship rates.</p>
            </div>
            <Button className="min-w-[140px]">Get Help</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sponsorships;
