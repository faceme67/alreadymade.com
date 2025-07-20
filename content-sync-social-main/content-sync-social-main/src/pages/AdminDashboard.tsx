import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  Video, 
  Image, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye
} from "lucide-react";

const AdminDashboard = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'video' | 'thumbnail') => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === 'video') {
        setVideoFile(file);
      } else {
        setThumbnailFile(file);
      }
    }
  };

  const mockVideos = [
    {
      id: 1,
      title: "YouTube Tutorial Template",
      platform: "YouTube",
      price: "$49.99",
      sales: 156,
      revenue: "$7,794",
      status: "Active"
    },
    {
      id: 2,
      title: "TikTok Dance Challenge",
      platform: "TikTok", 
      price: "$29.99",
      sales: 342,
      revenue: "$10,258",
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your content marketplace</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,350</div>
              <p className="text-xs text-muted-foreground">+180 new this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Videos</CardTitle>
              <Video className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">+23 added today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5%</div>
              <p className="text-xs text-muted-foreground">+2.5% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="upload">Upload Content</TabsTrigger>
            <TabsTrigger value="manage">Manage Videos</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Upload Content Tab */}
          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload New Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Video Upload */}
                  <div className="space-y-4">
                    <Label htmlFor="video-upload">Video File</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                      <Video className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <Input
                        id="video-upload"
                        type="file"
                        accept="video/*"
                        onChange={(e) => handleFileUpload(e, 'video')}
                        className="hidden"
                      />
                      <Label 
                        htmlFor="video-upload" 
                        className="cursor-pointer text-sm font-medium text-primary hover:underline"
                      >
                        Click to upload video
                      </Label>
                      <p className="text-xs text-muted-foreground mt-2">MP4, MOV up to 500MB</p>
                      {videoFile && (
                        <p className="text-sm font-medium text-green-600 mt-2">
                          ✓ {videoFile.name}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail Upload */}
                  <div className="space-y-4">
                    <Label htmlFor="thumbnail-upload">Thumbnail</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                      <Image className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <Input
                        id="thumbnail-upload"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'thumbnail')}
                        className="hidden"
                      />
                      <Label 
                        htmlFor="thumbnail-upload" 
                        className="cursor-pointer text-sm font-medium text-primary hover:underline"
                      >
                        Click to upload thumbnail
                      </Label>
                      <p className="text-xs text-muted-foreground mt-2">JPG, PNG up to 10MB</p>
                      {thumbnailFile && (
                        <p className="text-sm font-medium text-green-600 mt-2">
                          ✓ {thumbnailFile.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Enter video title" />
                    </div>
                    <div>
                      <Label htmlFor="price">Price ($)</Label>
                      <Input id="price" type="number" placeholder="29.99" />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <select className="w-full p-2 border rounded-md bg-background">
                        <option>YouTube Templates</option>
                        <option>TikTok Content</option>
                        <option>Instagram Stories</option>
                        <option>Facebook Posts</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" placeholder="Describe your content..." rows={4} />
                    </div>
                    <div>
                      <Label htmlFor="payment-link">PayPal Payment Link</Label>
                      <Input id="payment-link" placeholder="https://paypal.me/..." />
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Upload Content
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Manage Videos Tab */}
          <TabsContent value="manage">
            <Card>
              <CardHeader>
                <CardTitle>Manage Videos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockVideos.map((video) => (
                    <div key={video.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                          <Video className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{video.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{video.platform}</Badge>
                            <span className="text-sm text-muted-foreground">{video.price}</span>
                          </div>
                          <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                            <span>{video.sales} sales</span>
                            <span>{video.revenue} revenue</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={video.status === "Active" ? "default" : "secondary"}>
                          {video.status}
                        </Badge>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    Chart placeholder - Revenue over time
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockVideos.map((video) => (
                      <div key={video.id} className="flex justify-between items-center">
                        <span className="font-medium">{video.title}</span>
                        <span className="text-sm text-muted-foreground">{video.revenue}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Platform Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input id="site-name" defaultValue="Content Marketplace" />
                </div>
                <div>
                  <Label htmlFor="commission">Commission Rate (%)</Label>
                  <Input id="commission" type="number" defaultValue="15" />
                </div>
                <div>
                  <Label htmlFor="paypal-email">PayPal Business Email</Label>
                  <Input id="paypal-email" type="email" placeholder="business@example.com" />
                </div>
                <Button>Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;