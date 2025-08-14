import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Target, 
  BookOpen, 
  BarChart3, 
  Network, 
  Zap, 
  Users, 
  Camera,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const FeatureShowcase = () => {
  const features = [
    {
      category: "AI Agents",
      items: [
        {
          icon: Brain,
          title: "Personalized Adaptive Learning Engine (PALE)",
          description: "Central orchestrator that coordinates all AI agents for optimal learning paths",
          status: "core",
          complexity: "advanced"
        },
        {
          icon: Target,
          title: "Knowledge Assessment Agent (KAA)",
          description: "Evaluates understanding, identifies gaps, and generates dynamic topic graphs",
          status: "core",
          complexity: "advanced"
        },
        {
          icon: BookOpen,
          title: "Content Recommendation Agent (CRA)",
          description: "Recommends personalized learning content based on assessment data",
          status: "core",
          complexity: "medium"
        },
        {
          icon: Lightbulb,
          title: "Interactive Tutoring Agent (ITA)",
          description: "Provides real-time conversational tutoring with step-by-step explanations",
          status: "core",
          complexity: "advanced"
        }
      ]
    },
    {
      category: "Core Features",
      items: [
        {
          icon: Network,
          title: "Graphical Topic Grouping",
          description: "Visual knowledge graphs showing interconnected math concepts from past papers",
          status: "unique",
          complexity: "advanced"
        },
        {
          icon: Camera,
          title: "Screenshot OCR Integration",
          description: "Extract and solve questions from past exam papers with authentic formatting",
          status: "unique",
          complexity: "advanced"
        },
        {
          icon: Zap,
          title: "Intelligent Prerequisite Identification",
          description: "AI identifies missing foundational knowledge for targeted learning",
          status: "core",
          complexity: "medium"
        },
        {
          icon: BarChart3,
          title: "Advanced Progress Tracking",
          description: "Comprehensive analytics with predictive insights and visual progress mapping",
          status: "core",
          complexity: "medium"
        }
      ]
    },
    {
      category: "User Experience",
      items: [
        {
          icon: Users,
          title: "Multi-Role Dashboards",
          description: "Tailored interfaces for students, teachers, and administrators",
          status: "essential",
          complexity: "medium"
        },
        {
          icon: TrendingUp,
          title: "Adaptive Learning Paths",
          description: "Dynamic curriculum adjustment based on individual learning patterns",
          status: "core",
          complexity: "advanced"
        },
        {
          icon: CheckCircle,
          title: "Real-time Feedback",
          description: "Instant explanations, corrections, and guidance during problem solving",
          status: "essential",
          complexity: "medium"
        },
        {
          icon: ArrowRight,
          title: "Seamless LMS Integration",
          description: "Connect with existing learning management systems and gradebooks",
          status: "enterprise",
          complexity: "medium"
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "core": return "primary";
      case "unique": return "secondary";
      case "essential": return "success";
      case "enterprise": return "warning";
      default: return "outline";
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "advanced": return "error";
      case "medium": return "warning";
      case "basic": return "success";
      default: return "outline";
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Advanced AI Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            PALA leverages cutting-edge agentic AI to deliver unprecedented personalization in math education
          </p>
        </div>

        {features.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-8">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="group hover:shadow-glow transition-smooth border-2 hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                              {feature.title}
                            </CardTitle>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Badge variant={getStatusColor(feature.status) as any}>
                          {feature.status}
                        </Badge>
                        <Badge variant={getComplexityColor(feature.complexity) as any}>
                          {feature.complexity}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}

        {/* Technology Stack Info */}
        <Card className="bg-gradient-secondary text-secondary-foreground">
          <CardHeader>
            <CardTitle className="text-center text-xl">Technology Stack Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <h4 className="font-semibold">AI/ML Services</h4>
                <p className="text-sm text-secondary-foreground/80">
                  GPT-4, Mathpix OCR, Custom ML Models, SymPy Integration
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Data Architecture</h4>
                <p className="text-sm text-secondary-foreground/80">
                  PostgreSQL, Neo4j Graph DB, Time-Series Analytics
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Scalable Infrastructure</h4>
                <p className="text-sm text-secondary-foreground/80">
                  Microservices, Cloud Services, Real-time Processing
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeatureShowcase;