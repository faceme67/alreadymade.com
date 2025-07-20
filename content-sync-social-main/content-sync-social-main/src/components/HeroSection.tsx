import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Play, 
  TrendingUp, 
  Users, 
  Star,
  Sparkles
} from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";
import { TrendingSlideshow } from "@/components/TrendingSlideshow";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background">
      {/* Trending Slideshow */}
      <div className="container mx-auto px-4 pt-8">
        <TrendingSlideshow />
      </div>

      {/* Main Hero Content */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt="Content creators workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80" />
        </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Sparkles className="h-4 w-4 mr-2" />
            Premium Social Media Content Marketplace
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Create, Share &{" "}
            <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Monetize
            </span>{" "}
            Your Content
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of creators buying and selling premium social media content. 
            From viral TikTok templates to Instagram stories, find everything you need to level up your social presence.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for TikTok templates, Instagram stories, YouTube thumbnails..."
                className="pl-12 pr-4 h-14 text-lg bg-white/95 backdrop-blur border-none focus:bg-white transition-all shadow-premium"
              />
              <Button 
                size="lg" 
                variant="premium" 
                className="absolute right-2 top-2 h-10"
              >
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="xl" variant="default" className="bg-white text-primary hover:bg-white/90">
              <Play className="h-5 w-5 mr-2" />
              Start Browsing
            </Button>
            <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Become a Creator
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-accent mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-white">50K+</span>
              </div>
              <p className="text-white/80">Active Creators</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-accent mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-white">1M+</span>
              </div>
              <p className="text-white/80">Content Assets</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-accent mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-white">4.9</span>
              </div>
              <p className="text-white/80">Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce delay-1000">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
          <Play className="h-8 w-8 text-white" />
        </div>
      </div>
      
      <div className="absolute bottom-32 right-16 animate-bounce delay-2000">
        <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center backdrop-blur">
          <Star className="h-6 w-6 text-white" />
        </div>
      </div>
      </div>
    </section>
  );
};