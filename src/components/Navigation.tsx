import { Button } from "@/components/ui/button";
import { BookOpen, Brain, BarChart3, User, Lightbulb } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                PALA
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Learn</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Lightbulb className="h-4 w-4" />
              <span>Practice</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Progress</span>
            </Button>
          </div>
          
          <div className="flex items-center">
            <Button variant="outline" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;