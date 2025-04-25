
import { ReactNode } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopBarProps {
  children?: ReactNode;
}

const TopBar = ({ children }: TopBarProps) => {
  return (
    <header className="h-16 border-b border-border flex items-center px-4 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        {children}
      </div>
      
      <div className="ml-auto flex items-center gap-2">
        <Button variant="outline" size="sm">
          Upgrade to Pro
        </Button>
        <Button variant="ghost" size="icon">
          <Bell size={18} />
        </Button>
      </div>
    </header>
  );
};

export default TopBar;
