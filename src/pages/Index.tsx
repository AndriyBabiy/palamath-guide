import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StudentDashboard from "@/components/StudentDashboard";
import InteractiveTutor from "@/components/InteractiveTutor";
import TopicGraph from "@/components/TopicGraph";
import FeatureShowcase from "@/components/FeatureShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StudentDashboard />
      <InteractiveTutor />
      <TopicGraph />
      <FeatureShowcase />
    </div>
  );
};

export default Index;
