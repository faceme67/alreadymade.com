import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Play, TrendingUp, Eye } from "lucide-react";
import trendingYoutube from "@/assets/trending-youtube.jpg";
import trendingTiktok from "@/assets/trending-tiktok.jpg";
import trendingInstagram from "@/assets/trending-instagram.jpg";
import trendingFacebook from "@/assets/trending-facebook.jpg";

const trendingContent = [
  {
    id: 1,
    platform: "YouTube",
    title: "Ultimate Video Editing Tutorial",
    views: "2.4M",
    image: trendingYoutube,
    color: "bg-red-500"
  },
  {
    id: 2,
    platform: "TikTok", 
    title: "Viral Dance Challenge Template",
    views: "8.7M",
    image: trendingTiktok,
    color: "bg-black"
  },
  {
    id: 3,
    platform: "Instagram",
    title: "Aesthetic Lifestyle Content Pack",
    views: "1.2M", 
    image: trendingInstagram,
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    id: 4,
    platform: "Facebook",
    title: "Business Marketing Video Set",
    views: "654K",
    image: trendingFacebook,
    color: "bg-blue-600"
  }
];

export const TrendingSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trendingContent.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentContent = trendingContent[currentSlide];

  return (
    <div className="relative h-96 w-full overflow-hidden rounded-xl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={currentContent.image}
          alt={currentContent.title}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center p-8">
        <div className="max-w-lg">
          <Badge 
            variant="secondary" 
            className={`mb-4 ${currentContent.color} text-white border-none hover:opacity-90`}
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Trending on {currentContent.platform}
          </Badge>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {currentContent.title}
          </h3>
          
          <div className="flex items-center gap-4 text-white/80 mb-6">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{currentContent.views} views</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              <span>Premium Content</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {trendingContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Platform Logo */}
      <div className="absolute top-4 right-4">
        <Badge variant="outline" className="border-white/30 text-white bg-black/30 backdrop-blur-sm">
          {currentContent.platform}
        </Badge>
      </div>
    </div>
  );
};