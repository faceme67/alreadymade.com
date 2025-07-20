import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  User, 
  ShoppingCart, 
  Upload, 
  Menu,
  Heart,
  Zap,
  Moon,
  Sun,
  Globe
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ContentHub
              </span>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search templates, videos, images..."
                className="pl-10 pr-4 h-10 bg-muted/50 border-none focus:bg-background transition-colors"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-sm">
              Browse
            </Button>
            <Button variant="ghost" className="text-sm">
              Pricing
            </Button>
            <Button variant="ghost" className="text-sm relative">
              <Heart className="h-4 w-4 mr-2" />
              Favorites
              <Badge variant="secondary" className="ml-2 h-5 px-1.5 text-xs">
                3
              </Badge>
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>🇺🇸 English</DropdownMenuItem>
                <DropdownMenuItem>🇪🇸 Español</DropdownMenuItem>
                <DropdownMenuItem>🇫🇷 Français</DropdownMenuItem>
                <DropdownMenuItem>🇩🇪 Deutsch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-4 w-4" />
            </Button>

            {/* Upload Button */}
            <Button variant="premium" size="sm" className="hidden sm:flex">
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center"
              >
                2
              </Badge>
            </Button>

            {/* User Menu */}
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                Browse
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Pricing
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Heart className="h-4 w-4 mr-2" />
                Favorites
              </Button>
              <Button variant="premium" className="w-full justify-start mt-2">
                <Upload className="h-4 w-4 mr-2" />
                Upload Content
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};