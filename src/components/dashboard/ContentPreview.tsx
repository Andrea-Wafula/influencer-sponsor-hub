
import { formatNumber } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Image, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContentItem {
  id: string;
  type: string;
  thumbnail: string;
  caption: string;
  likes: number;
  comments: number;
  engagement: number;
  date: string;
  sponsored: boolean;
}

interface ContentPreviewProps {
  content: ContentItem[];
}

const ContentPreview = ({ content }: ContentPreviewProps) => {
  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">Recent Content</CardTitle>
        <Button variant="outline" size="sm">View All</Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.map((item) => (
            <div key={item.id} className="border rounded-md overflow-hidden bg-card">
              <div className="relative aspect-square bg-gray-100">
                <img 
                  src={item.thumbnail} 
                  alt={item.caption}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-2 right-2">
                  {item.type === "image" ? (
                    <Image size={16} className="text-white drop-shadow-md" />
                  ) : (
                    <Video size={16} className="text-white drop-shadow-md" />
                  )}
                </div>
                {item.sponsored && (
                  <div className="absolute top-2 left-2 bg-primary/80 text-primary-foreground rounded text-xs px-1.5 py-0.5">
                    Sponsored
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-xs text-muted-foreground line-clamp-1">{item.caption}</p>
                <div className="flex items-center justify-between mt-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span>{formatNumber(item.likes)} likes</span>
                    <span>{formatNumber(item.comments)} comments</span>
                  </div>
                  <span className="font-medium">{item.engagement}% eng</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentPreview;
