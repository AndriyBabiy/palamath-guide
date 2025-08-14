import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brain, Send, Lightbulb, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

interface Message {
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  isCorrect?: boolean;
  hint?: string;
}

const InteractiveTutor = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'ai',
      content: "Hi! I'm your AI tutor. Let's work on solving quadratic equations. Here's a problem for you: Solve x² - 5x + 6 = 0",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState("");
  const [currentProblem] = useState({
    question: "Solve x² - 5x + 6 = 0",
    answer: "x = 2 or x = 3",
    steps: [
      "Factor the quadratic expression",
      "Find two numbers that multiply to 6 and add to -5",
      "Those numbers are -2 and -3",
      "So (x - 2)(x - 3) = 0",
      "Therefore x = 2 or x = 3"
    ]
  });

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response
    setTimeout(() => {
      const isCorrectAnswer = input.toLowerCase().includes('x = 2') && input.toLowerCase().includes('x = 3');
      
      let aiResponse: Message;
      
      if (isCorrectAnswer) {
        aiResponse = {
          type: 'ai',
          content: "🎉 Excellent! You got it right! x = 2 and x = 3 are indeed the correct solutions. Let me show you the step-by-step solution.",
          timestamp: new Date(),
          isCorrect: true,
        };
      } else {
        aiResponse = {
          type: 'ai',
          content: "Not quite right, but you're on the right track! Let me give you a hint: try factoring the quadratic expression. Look for two numbers that multiply to 6 and add to -5.",
          timestamp: new Date(),
          isCorrect: false,
          hint: "Remember: (x + a)(x + b) = x² + (a+b)x + ab"
        };
      }
      
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
    
    setInput("");
  };

  const showStepByStep = () => {
    const stepMessage: Message = {
      type: 'ai',
      content: `Here's the complete step-by-step solution:\n\n${currentProblem.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')}`,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, stepMessage]);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold flex items-center justify-center">
            <Brain className="h-8 w-8 mr-3 text-primary" />
            Interactive AI Tutor
          </h2>
          <p className="text-muted-foreground">Get personalized help with step-by-step explanations</p>
        </div>

        <Card className="bg-gradient-to-br from-card via-card/95 to-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Current Problem: Quadratic Equations</span>
              <Badge variant="outline" className="text-warning">
                Medium Difficulty
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-4 rounded-lg border">
              <div className="math-expression text-lg font-mono text-center">
                x² - 5x + 6 = 0
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-[500px] flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Conversation</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <ScrollArea className="flex-1 pr-4 mb-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.type === 'ai' && (
                          <Brain className="h-4 w-4 mt-0.5 text-primary" />
                        )}
                        <div className="space-y-2">
                          <p className="text-sm whitespace-pre-line">{message.content}</p>
                          {message.isCorrect !== undefined && (
                            <div className="flex items-center space-x-2">
                              {message.isCorrect ? (
                                <CheckCircle className="h-4 w-4 text-success" />
                              ) : (
                                <AlertCircle className="h-4 w-4 text-error" />
                              )}
                              <span className="text-xs">
                                {message.isCorrect ? 'Correct!' : 'Try again'}
                              </span>
                            </div>
                          )}
                          {message.hint && (
                            <div className="bg-warning/10 p-2 rounded border-l-2 border-warning">
                              <div className="flex items-center space-x-2">
                                <Lightbulb className="h-4 w-4 text-warning" />
                                <span className="text-xs font-medium">Hint:</span>
                              </div>
                              <p className="text-xs mt-1 font-mono">{message.hint}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your answer or ask for help..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={showStepByStep}
                  className="flex items-center space-x-2"
                >
                  <Lightbulb className="h-3 w-3" />
                  <span>Show Steps</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <ArrowRight className="h-3 w-3" />
                  <span>Next Problem</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InteractiveTutor;