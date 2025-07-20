import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Download, 
  Star, 
  Play, 
  Eye,
  ShoppingCart,
  Crown,
  Zap
} from "lucide-react";
import { useState } from "react";

interface ContentCardProps {
  id: string;
  title: string;
  creator: string;
  price: number;
  originalPrice?: number;
  rating: number;
  downloads: number;
  preview: string;
  type: 'video' | 'image' | 'template';
  platform: string;
  isPremium?: boolean;
  tags: string[];
}

export const ContentCard = ({ 
  title, 
  creator, 
  price, 
  originalPrice,
  rating, 
  downloads, 
  preview, 
  type, 
  platform,
  isPremium = false,
  tags 
}: ContentCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-premium transition-all duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute top-3 left-3 z-20">
          <Badge variant="default" className="bg-gradient-hero text-white border-0 shadow-lg">
            <Crown className="h-3 w-3 mr-1" />
            Premium
          </Badge>
        </div>
      )}

      {/* Platform Badge */}
      <div className="absolute top-3 right-3 z-20">
        <Badge variant="secondary" className="bg-white/90 backdrop-blur text-xs">
          {platform}
        </Badge>
      </div>

      {/* Preview Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={preview} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center">
            {type === 'video' ? (
              <Button size="lg" variant="default" className="bg-white/20 backdrop-blur hover:bg-white/30">
                <Play className="h-6 w-6" />
              </Button>
            ) : (
              <Button size="lg" variant="default" className="bg-white/20 backdrop-blur hover:bg-white/30">
                <Eye className="h-6 w-6" />
              </Button>
            )}
          </div>
        </div>

        {/* Favorite Button */}
        <Button
          size="icon"
          variant="ghost"
          className={`absolute top-2 right-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } ${isLiked ? 'text-red-500' : 'text-white hover:text-red-500'}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
        </Button>
      </div>

      <CardContent className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Creator */}
        <p className="text-xs text-muted-foreground mb-3">
          by <span className="font-medium">{creator}</span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs px-2 py-0.5 border-primary/20 text-primary"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-3 w-3" />
              <span>{formatNumber(downloads)}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-3 w-3 text-accent" />
            <span>Instant</span>
          </div>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ${price}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          
          <Button 
            size="sm" 
            variant="premium"
            className="h-8 px-3 text-xs"
          >
            <ShoppingCart className="h-3 w-3 mr-1" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};