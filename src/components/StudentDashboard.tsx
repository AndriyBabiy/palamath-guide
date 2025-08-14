import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Brain, Clock, Trophy, Target, ChevronRight, Zap } from "lucide-react";

const StudentDashboard = () => {
  const recentTopics = [
    { name: "Quadratic Equations", progress: 85, status: "mastered", difficulty: "medium" },
    { name: "Trigonometry", progress: 60, status: "learning", difficulty: "hard" },
    { name: "Linear Functions", progress: 95, status: "mastered", difficulty: "easy" },
    { name: "Derivatives", progress: 30, status: "struggling", difficulty: "hard" },
  ];

  const recommendedActions = [
    { 
      title: "Complete Trigonometry Basics",
      description: "Prerequisite for advanced calculus",
      priority: "high",
      estimatedTime: "15 min"
    },
    {
      title: "Practice Derivative Rules",
      description: "Strengthen fundamental understanding",
      priority: "medium",
      estimatedTime: "20 min"
    },
    {
      title: "Review Linear Functions",
      description: "Maintain mastery level",
      priority: "low",
      estimatedTime: "10 min"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "error";
      case "medium": return "warning";
      case "low": return "success";
      default: return "secondary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "mastered": return "success";
      case "learning": return "warning";
      case "struggling": return "error";
      default: return "secondary";
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Welcome back, Alex! 👋</h2>
          <p className="text-muted-foreground">Continue your personalized learning journey</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Trophy className="h-4 w-4 mr-2" />
                Topics Mastered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-primary-foreground/80">+2 this week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Target className="h-4 w-4 mr-2 text-primary" />
                Current Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 days</div>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Clock className="h-4 w-4 mr-2 text-secondary" />
                Study Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.5h</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Brain className="h-4 w-4 mr-2 text-success" />
                AI Confidence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">Algebra II</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Topics */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Recent Topics
                </CardTitle>
                <CardDescription>Your learning progress across different topics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {recentTopics.map((topic, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="font-medium">{topic.name}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className={`text-${getStatusColor(topic.status)}`}>
                            {topic.status}
                          </Badge>
                          <Badge variant="outline">
                            {topic.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold">{topic.progress}%</span>
                      </div>
                    </div>
                    <Progress 
                      value={topic.progress} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* AI Recommendations */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-warning" />
                  AI Recommendations
                </CardTitle>
                <CardDescription>Personalized next steps</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendedActions.map((action, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-card/50 hover:bg-card transition-smooth">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1 flex-1">
                          <h4 className="font-medium text-sm">{action.title}</h4>
                          <p className="text-xs text-muted-foreground">{action.description}</p>
                          <div className="flex items-center space-x-2 pt-1">
                            <Badge 
                              variant="outline" 
                              className={`text-xs text-${getPriorityColor(action.priority)}`}
                            >
                              {action.priority} priority
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {action.estimatedTime}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground mt-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Button variant="educational" className="w-full" size="lg">
              <Brain className="h-4 w-4 mr-2" />
              Start AI Tutoring Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDashboard;