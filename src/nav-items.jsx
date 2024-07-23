import { Home, BarChart2, TrendingUp, Building2, Cpu, BookOpen } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Markets",
    to: "/markets",
    icon: <BarChart2 className="h-4 w-4" />,
    page: <div>Markets Page</div>,
  },
  {
    title: "Economy",
    to: "/economy",
    icon: <TrendingUp className="h-4 w-4" />,
    page: <div>Economy Page</div>,
  },
  {
    title: "Companies",
    to: "/companies",
    icon: <Building2 className="h-4 w-4" />,
    page: <div>Companies Page</div>,
  },
  {
    title: "Tech",
    to: "/tech",
    icon: <Cpu className="h-4 w-4" />,
    page: <div>Tech Page</div>,
  },
  {
    title: "Opinion",
    to: "/opinion",
    icon: <BookOpen className="h-4 w-4" />,
    page: <div>Opinion Page</div>,
  },
];