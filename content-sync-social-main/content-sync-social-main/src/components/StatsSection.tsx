import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Download, 
  DollarSign, 
  TrendingUp,
  Star,
  Globe,
  Zap,
  Award
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Active Creators",
    description: "Professional content creators worldwide",
    color: "text-primary"
  },
  {
    icon: Download,
    value: "1.2M+",
    label: "Downloads",
    description: "Content pieces downloaded this month",
    color: "text-accent"
  },
  {
    icon: DollarSign,
    value: "$2.5M+",
    label: "Creator Earnings",
    description: "Total paid to creators this year",
    color: "text-success"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Avg Rating",
    description: "Customer satisfaction score",
    color: "text-yellow-500"
  }
];

const achievements = [
  {
    icon: Award,
    title: "Industry Leader",
    description: "#1 Social Media Content Marketplace"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Available in 150+ countries"
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Download immediately after purchase"
  },
  {
    icon: TrendingUp,
    title: "Growing Fast",
    description: "300% growth year over year"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <TrendingUp className="h-4 w-4 mr-2" />
            Platform Statistics
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Creators
            </span>{" "}
            Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the world's largest community of content creators and discover why 
            ContentHub is the preferred choice for premium social media assets.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-background rounded-xl shadow-card hover:shadow-premium transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="font-semibold text-foreground mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="flex items-start space-x-3 p-4 bg-background/50 rounded-lg border border-border/50 hover:bg-background transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <achievement.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};