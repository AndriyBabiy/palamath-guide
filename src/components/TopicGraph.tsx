import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Network, BookOpen, Target, CheckCircle, AlertTriangle, Play } from "lucide-react";

interface Topic {
  id: string;
  name: string;
  mastery: number;
  difficulty: 'easy' | 'medium' | 'hard';
  prerequisites: string[];
  x: number;
  y: number;
}

const TopicGraph = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  
  const topics: Topic[] = [
    { id: 'basic-algebra', name: 'Basic Algebra', mastery: 95, difficulty: 'easy', prerequisites: [], x: 150, y: 300 },
    { id: 'linear-equations', name: 'Linear Equations', mastery: 90, difficulty: 'easy', prerequisites: ['basic-algebra'], x: 300, y: 250 },
    { id: 'quadratic-equations', name: 'Quadratic Equations', mastery: 75, difficulty: 'medium', prerequisites: ['linear-equations'], x: 450, y: 200 },
    { id: 'functions', name: 'Functions', mastery: 85, difficulty: 'medium', prerequisites: ['linear-equations'], x: 300, y: 150 },
    { id: 'trigonometry', name: 'Trigonometry', mastery: 40, difficulty: 'hard', prerequisites: ['functions'], x: 450, y: 100 },
    { id: 'derivatives', name: 'Derivatives', mastery: 25, difficulty: 'hard', prerequisites: ['functions', 'quadratic-equations'], x: 600, y: 150 },
    { id: 'integrals', name: 'Integrals', mastery: 10, difficulty: 'hard', prerequisites: ['derivatives'], x: 750, y: 200 },
  ];

  const getMasteryColor = (mastery: number) => {
    if (mastery >= 80) return 'success';
    if (mastery >= 60) return 'warning';
    return 'error';
  };

  const getMasteryIcon = (mastery: number) => {
    if (mastery >= 80) return CheckCircle;
    if (mastery >= 60) return AlertTriangle;
    return Target;
  };

  const getConnectionPath = (from: Topic, to: Topic) => {
    return `M ${from.x + 50} ${from.y + 25} L ${to.x} ${to.y + 25}`;
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold flex items-center justify-center">
            <Network className="h-8 w-8 mr-3 text-primary" />
            Knowledge Graph
          </h2>
          <p className="text-muted-foreground">Explore interconnected math topics and your learning progress</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Knowledge Graph Visualization */}
          <div className="lg:col-span-3">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Interactive Topic Map</span>
                  <Badge variant="outline">Mathematics</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative h-full">
                <svg 
                  viewBox="0 0 900 400" 
                  className="w-full h-full border rounded-lg bg-gradient-to-br from-background to-muted/20"
                >
                  {/* Connection Lines */}
                  {topics.map(topic => 
                    topic.prerequisites.map(prereqId => {
                      const prereq = topics.find(t => t.id === prereqId);
                      if (!prereq) return null;
                      return (
                        <path
                          key={`${prereq.id}-${topic.id}`}
                          d={getConnectionPath(prereq, topic)}
                          stroke="hsl(var(--border))"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          className="animate-topic-connect"
                        />
                      );
                    })
                  )}
                  
                  {/* Topic Nodes */}
                  {topics.map(topic => {
                    const Icon = getMasteryIcon(topic.mastery);
                    return (
                      <g key={topic.id}>
                        <rect
                          x={topic.x}
                          y={topic.y}
                          width="100"
                          height="50"
                          rx="8"
                          fill={`hsl(var(--${getMasteryColor(topic.mastery)}) / 0.1)`}
                          stroke={`hsl(var(--${getMasteryColor(topic.mastery)}))`}
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-opacity-20 transition-smooth"
                          onClick={() => setSelectedTopic(topic)}
                        />
                        <text
                          x={topic.x + 50}
                          y={topic.y + 20}
                          textAnchor="middle"
                          className="text-xs font-medium fill-current"
                        >
                          {topic.name.length > 12 ? topic.name.substring(0, 12) + '...' : topic.name}
                        </text>
                        <text
                          x={topic.x + 50}
                          y={topic.y + 35}
                          textAnchor="middle"
                          className="text-xs fill-current"
                        >
                          {topic.mastery}%
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </CardContent>
            </Card>
          </div>

          {/* Topic Details Panel */}
          <div className="space-y-6">
            {selectedTopic ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{selectedTopic.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Mastery Level</span>
                      <span className="font-semibold">{selectedTopic.mastery}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-${getMasteryColor(selectedTopic.mastery)} transition-smooth`}
                        style={{ width: `${selectedTopic.mastery}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Badge 
                      variant="outline" 
                      className={`text-${getMasteryColor(selectedTopic.mastery)}`}
                    >
                      {selectedTopic.difficulty} difficulty
                    </Badge>
                  </div>
                  
                  {selectedTopic.prerequisites.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Prerequisites:</h4>
                      <div className="space-y-1">
                        {selectedTopic.prerequisites.map(prereqId => {
                          const prereq = topics.find(t => t.id === prereqId);
                          return prereq ? (
                            <div key={prereqId} className="text-xs text-muted-foreground">
                              • {prereq.name} ({prereq.mastery}%)
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-2 pt-4">
                    <Button variant="educational" size="sm" className="w-full">
                      <Play className="h-3 w-3 mr-2" />
                      Practice This Topic
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <BookOpen className="h-3 w-3 mr-2" />
                      Study Materials
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="text-center py-8">
                  <Network className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Click on a topic in the graph to see detailed information and learning options.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Legend */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Legend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded bg-success"></div>
                  <span className="text-xs">Mastered (80%+)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded bg-warning"></div>
                  <span className="text-xs">Learning (60-79%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded bg-error"></div>
                  <span className="text-xs">Needs Work (&lt;60%)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicGraph;