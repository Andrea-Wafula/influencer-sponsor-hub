
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  ChevronLeft,
  Users, 
  DollarSign,
  Camera,
  TrendingUp,
  User
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: TrendingUp, label: "Analytics", path: "/analytics" },
    { icon: DollarSign, label: "Sponsorships", path: "/sponsorships" },
    { icon: Camera, label: "Content", path: "/content" },
    { icon: Users, label: "Audience", path: "/audience" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <aside 
      className={cn(
        "fixed lg:relative z-30 h-screen bg-sidebar transition-all duration-300 flex flex-col",
        isOpen ? "w-64" : "w-0 lg:w-20 overflow-hidden"
      )}
    >
      <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
        <h1 
          className={cn(
            "text-sidebar-foreground font-bold text-xl transition-opacity",
            isOpen ? "opacity-100" : "opacity-0 lg:hidden"
          )}
        >
          SponsorSight
        </h1>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-sidebar-foreground hidden lg:flex"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronLeft className={`transition-transform ${!isOpen ? "rotate-180" : ""}`} />
        </Button>
      </div>

      <div className="flex flex-col gap-2 p-3 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
              "text-sidebar-foreground hover:bg-sidebar-accent",
              location.pathname === item.path && "bg-sidebar-accent font-medium"
            )}
          >
            <item.icon size={20} />
            <span className={cn("transition-opacity", isOpen ? "opacity-100" : "opacity-0 hidden lg:block")}>{item.label}</span>
          </Link>
        ))}
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <div 
          className={cn(
            "flex items-center gap-3 px-3 py-2",
            isOpen ? "justify-start" : "justify-center"
          )}
        >
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
            AM
          </div>
          <div className={cn("transition-opacity", isOpen ? "opacity-100" : "opacity-0 hidden")}>
            <p className="text-sidebar-foreground font-medium">Alex Model</p>
            <p className="text-sidebar-foreground/60 text-xs">Pro Account</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
