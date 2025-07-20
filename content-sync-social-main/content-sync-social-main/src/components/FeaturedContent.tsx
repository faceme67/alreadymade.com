import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentCard } from "./ContentCard";
import { 
  TrendingUp, 
  Clock, 
  Star, 
  Filter,
  Grid3X3,
  List
} from "lucide-react";
import { useState } from "react";
import contentSample1 from "@/assets/content-sample-1.jpg";
import contentSample2 from "@/assets/content-sample-2.jpg";
import contentSample3 from "@/assets/content-sample-3.jpg";

const sampleContent = [
  {
    id: "1",
    title: "Viral TikTok Dance Template Pack - 10 Trending Choreographies",
    creator: "DanceStudio Pro",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.9,
    downloads: 2340,
    preview: contentSample1,
    type: "video" as const,
    platform: "TikTok",
    isPremium: true,
    tags: ["Dance", "Viral", "Template"]
  },
  {
    id: "2",
    title: "Instagram Story Highlights - Modern Business Collection",
    creator: "DesignMasters",
    price: 19.99,
    rating: 4.8,
    downloads: 1890,
    preview: contentSample2,
    type: "template" as const,
    platform: "Instagram",
    isPremium: false,
    tags: ["Business", "Stories", "Highlights"]
  },
  {
    id: "3",
    title: "YouTube Thumbnail Pack - Gaming & Tech Styles",
    creator: "ThumbnailPro",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.7,
    downloads: 3120,
    preview: contentSample3,
    type: "image" as const,
    platform: "YouTube",
    isPremium: true,
    tags: ["Gaming", "Tech", "Thumbnails"]
  },
  {
    id: "4",
    title: "Minimalist Quote Templates for Social Media",
    creator: "QuoteDesigns",
    price: 15.99,
    rating: 4.6,
    downloads: 890,
    preview: contentSample1,
    type: "template" as const,
    platform: "Multiple",
    isPremium: false,
    tags: ["Quotes", "Minimalist", "Social"]
  },
  {
    id: "5",
    title: "Animated Logo Reveals - Premium Collection",
    creator: "MotionGraphics",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.9,
    downloads: 1560,
    preview: contentSample2,
    type: "video" as const,
    platform: "Multiple",
    isPremium: true,
    tags: ["Animation", "Logo", "Premium"]
  },
  {
    id: "6",
    title: "Instagram Reels Transitions - Smooth & Creative",
    creator: "ReelMaster",
    price: 22.99,
    rating: 4.8,
    downloads: 2890,
    preview: contentSample3,
    type: "video" as const,
    platform: "Instagram",
    isPremium: false,
    tags: ["Reels", "Transitions", "Creative"]
  }
];

const categories = [
  { label: "Trending", icon: TrendingUp, count: 1240 },
  { label: "New", icon: Clock, count: 890 },
  { label: "Top Rated", icon: Star, count: 567 }
];

export const FeaturedContent = () => {
  const [activeCategory, setActiveCategory] = useState("Trending");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <TrendingUp className="h-4 w-4 mr-2" />
            Featured Content
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Premium{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Content
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked templates, videos, and graphics from top creators. 
            Everything you need to create viral content across all platforms.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          {/* Categories */}
          <div className="flex items-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.label}
                variant={activeCategory === category.label ? "default" : "ghost"}
                className="h-10 px-4"
                onClick={() => setActiveCategory(category.label)}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.label}
                <Badge 
                  variant="secondary" 
                  className="ml-2 h-5 px-1.5 text-xs"
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                className="h-8 w-8 rounded-r-none"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                className="h-8 w-8 rounded-l-none"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className={`grid gap-6 mb-12 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 max-w-4xl mx-auto"
        }`}>
          {sampleContent.map((content) => (
            <div key={content.id} className="animate-fade-in">
              <ContentCard {...content} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8">
            Load More Content
          </Button>
        </div>
      </div>
    </section>
  );
};