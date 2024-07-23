import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#FFF1E5] text-black p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-3xl font-bold mb-4 md:mb-0">FT</div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            {["Home", "Markets", "Economy", "Companies", "Tech", "Opinion"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Input type="search" placeholder="Search..." className="pl-8" />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;