
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { profileData } from "@/lib/mock-data";

const Profile = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1">Profile</h1>
          <p className="text-muted-foreground">Manage your influencer profile and sponsorship rates.</p>
        </div>
        <Button>Edit Profile</Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-full bg-brand-purple/20 border-4 border-brand-purple flex items-center justify-center text-2xl font-bold mb-4">
                AM
              </div>
              
              <h2 className="text-xl font-bold">{profileData.name}</h2>
              <p className="text-muted-foreground">{profileData.username}</p>
              
              <div className="my-4 w-full">
                <p className="whitespace-pre-line text-sm">{profileData.bio}</p>
              </div>
              
              <div className="flex justify-between w-full my-4 text-sm">
                <div className="text-center">
                  <p className="font-bold">{profileData.posts}</p>
                  <p className="text-muted-foreground">Posts</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">{formatNumber(profileData.followers)}</p>
                  <p className="text-muted-foreground">Followers</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">{formatNumber(profileData.following)}</p>
                  <p className="text-muted-foreground">Following</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {profileData.tags.map(tag => (
                  <span key={tag} className="bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Sponsorship Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(profileData.rates).map(([type, rate]) => (
                  <div key={type} className="p-4 bg-muted rounded-lg text-center">
                    <p className="text-muted-foreground text-sm capitalize">{type}</p>
                    <p className="text-xl font-bold mt-1">{formatCurrency(rate)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-muted-foreground text-center">
                <p>These are your base rates. Actual sponsorship values may vary based on deliverables.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Key Metrics for Sponsors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(profileData.metrics).map(([key, value]) => {
                  const formatted = key.includes('Rate') ? `${value}%` : formatNumber(value);
                  const label = key.replace(/([A-Z])/g, ' $1').toLowerCase();
                  
                  return (
                    <div key={key} className="p-4 border rounded-lg">
                      <p className="text-muted-foreground text-xs capitalize">{label}</p>
                      <p className="text-lg font-bold mt-1">{formatted}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Top Brand Partnerships</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {profileData.sponsorships.map(sponsorship => (
                  <div key={sponsorship.brand} className="flex items-center justify-between p-3 border rounded-md">
                    <span className="font-medium">{sponsorship.brand}</span>
                    <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                      {sponsorship.count} campaigns
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card className="card-gradient">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to increase your rates?</h3>
              <p className="text-muted-foreground">Our AI rate calculator can help you optimize your pricing based on market trends.</p>
            </div>
            <Button>Calculate Optimal Rates</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
