import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Zap, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail,
  MapPin,
  Phone
} from "lucide-react";

const footerSections = [
  {
    title: "Marketplace",
    links: [
      { label: "Browse Content", href: "#" },
      { label: "Trending", href: "#" },
      { label: "New Arrivals", href: "#" },
      { label: "Top Rated", href: "#" },
      { label: "Free Content", href: "#" }
    ]
  },
  {
    title: "Creators",
    links: [
      { label: "Start Selling", href: "#" },
      { label: "Creator Tools", href: "#" },
      { label: "Analytics", href: "#" },
      { label: "Payout Info", href: "#" },
      { label: "Success Stories", href: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "License Guide", href: "#" },
      { label: "API Docs", href: "#" },
      { label: "Status", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Admin Dashboard", href: "/admin" }
    ]
  }
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" }
];

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Latest Content
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get notified about new templates, trending content, and exclusive creator insights. 
              Join 100,000+ creators in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="flex-1 bg-background/50 border-border/30"
              />
              <Button variant="premium" className="whitespace-nowrap">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">ContentHub</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The world's leading marketplace for premium social media content. 
              Create, discover, and monetize amazing content across all platforms.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@contenthub.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ContentHub. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};