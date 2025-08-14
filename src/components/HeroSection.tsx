import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, Target, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-secondary/10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-success/10 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            <Sparkles className="h-4 w-4 mr-2" />
            Powered by Advanced AI Agents
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Personalized AI
            </span>
            <br />
            <span className="text-foreground">Learning Assistant</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Revolutionary agentic AI system that transforms math education through 
            intelligent tutoring, adaptive learning paths, and dynamic knowledge graphs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="min-w-[200px]">
              <Brain className="h-5 w-5 mr-2" />
              Start Learning
            </Button>
            <Button variant="outline" size="xl" className="min-w-[200px]">
              Explore Features
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-card/50 backdrop-blur-sm border shadow-card">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">Adaptive Assessment</h3>
              <p className="text-sm text-muted-foreground text-center">
                AI identifies knowledge gaps and creates personalized learning paths
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-card/50 backdrop-blur-sm border shadow-card">
              <Brain className="h-8 w-8 text-secondary" />
              <h3 className="font-semibold text-lg">Interactive Tutoring</h3>
              <p className="text-sm text-muted-foreground text-center">
                Real-time explanations and step-by-step problem solving
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-card/50 backdrop-blur-sm border shadow-card">
              <TrendingUp className="h-8 w-8 text-success" />
              <h3 className="font-semibold text-lg">Progress Tracking</h3>
              <p className="text-sm text-muted-foreground text-center">
                Advanced analytics and visual progress representation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;