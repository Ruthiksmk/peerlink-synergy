
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText, MessageSquare, PlusCircle, Send, FileIcon, ImageIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Demo = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState([
    { id: 1, sender: "Ruthik", content: "Hey team, I've uploaded the latest designs for review.", time: "10:42 AM" },
    { id: 2, sender: "Manikanta", content: "Looking good! I like the new color scheme.", time: "10:45 AM" },
    { id: 3, sender: "Siva", content: "The navigation flow is much improved. Let's discuss the API integration next.", time: "10:52 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message = {
      id: messages.length + 1,
      sender: "You",
      content: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, message]);
    setNewMessage("");
    
    // Simulate received message
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        sender: "Ruthik",
        content: "Thanks for the update! I'll take a look at it now.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, response]);
    }, 2000);
  };

  const handleConnect = () => {
    toast({
      title: "Peer Connected",
      description: "You are now connected to the PeerLink network.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Experience PeerLink</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our interactive demo to see how PeerLink enables secure, decentralized collaboration.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden max-w-6xl mx-auto">
            <div className="bg-muted/30 p-4 border-b border-border flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="font-medium">PeerLink Demo</span>
              </div>
              <Button onClick={handleConnect} size="sm" variant="outline" className="text-xs">
                Connect to Network
              </Button>
            </div>
            
            <Tabs defaultValue="collaboration" className="min-h-[600px]">
              <TabsList className="mx-4 mt-2">
                <TabsTrigger value="collaboration">Collaboration Space</TabsTrigger>
                <TabsTrigger value="files">Shared Files</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="collaboration" className="p-0 border-0">
                <div className="grid grid-cols-1 md:grid-cols-4 min-h-[600px]">
                  <div className="border-r border-border col-span-1 p-4">
                    <div className="mb-4">
                      <Input placeholder="Search collaborators..." className="bg-background" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">TEAM MEMBERS</h3>
                      <div className="flex items-center p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" />
                          <AvatarFallback>RJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Ruthik Jadhav</p>
                          <span className="text-xs text-muted-foreground">Online</span>
                        </div>
                      </div>
                      <div className="flex items-center p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" />
                          <AvatarFallback>SP</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Siva Prasad</p>
                          <span className="text-xs text-muted-foreground">Online</span>
                        </div>
                      </div>
                      <div className="flex items-center p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" />
                          <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Manikanta Reddy</p>
                          <span className="text-xs text-muted-foreground">Online</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">CHANNELS</h3>
                      <div className="space-y-1">
                        <div className="flex items-center p-2 rounded-md bg-muted/50 cursor-pointer">
                          <MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">general</span>
                        </div>
                        <div className="flex items-center p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                          <MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">design</span>
                        </div>
                        <div className="flex items-center p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                          <MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">development</span>
                        </div>
                        <div className="flex items-center p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                          <PlusCircle className="h-4 w-4 mr-2 text-brand-purple" />
                          <span className="text-sm text-brand-purple">Add Channel</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-3 flex flex-col">
                    <div className="p-4 border-b border-border">
                      <div className="flex items-center">
                        <MessageSquare className="h-5 w-5 mr-2 text-muted-foreground" />
                        <h3 className="font-semibold"># general</h3>
                      </div>
                    </div>
                    
                    <div className="flex-grow p-4 space-y-4 overflow-y-auto max-h-[400px]">
                      {messages.map((message) => (
                        <div key={message.id} className="flex items-start">
                          <Avatar className="h-8 w-8 mr-2 mt-1">
                            <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-baseline">
                              <p className="font-medium text-sm mr-2">{message.sender}</p>
                              <span className="text-xs text-muted-foreground">{message.time}</span>
                            </div>
                            <p className="text-sm mt-1">{message.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-4 border-t border-border mt-auto">
                      <div className="flex items-center">
                        <Textarea 
                          placeholder="Type your message..."
                          className="min-h-[60px] resize-none bg-background"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleSendMessage();
                            }
                          }}
                        />
                        <Button 
                          className="ml-2 bg-brand-purple hover:bg-brand-darkPurple" 
                          size="icon"
                          onClick={handleSendMessage}
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="files" className="border-0 p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-md bg-blue-100 text-blue-700">
                          <FileIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-medium">Project Roadmap.docx</p>
                          <p className="text-xs text-muted-foreground">Shared by Ruthik • 2 days ago</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-md bg-green-100 text-green-700">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-medium">Budget Estimates.xlsx</p>
                          <p className="text-xs text-muted-foreground">Shared by Siva • 5 days ago</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-md bg-purple-100 text-purple-700">
                          <ImageIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-medium">UI Design Mockups.zip</p>
                          <p className="text-xs text-muted-foreground">Shared by Manikanta • 1 day ago</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed border-2 flex items-center justify-center h-[76px]">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <PlusCircle className="h-5 w-5" />
                      <span>Upload New File</span>
                    </div>
                  </Card>
                </div>
                
                <div className="mt-8 border-t border-border pt-8">
                  <h3 className="font-semibold mb-4">File Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarFallback>MR</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Manikanta</span> uploaded <span className="font-medium">UI Design Mockups.zip</span>
                        </p>
                        <p className="text-xs text-muted-foreground">Yesterday at 4:30 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarFallback>RJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Ruthik</span> commented on <span className="font-medium">Project Roadmap.docx</span>
                        </p>
                        <p className="text-xs text-muted-foreground">2 days ago at 11:15 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarFallback>SP</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Siva</span> edited <span className="font-medium">Budget Estimates.xlsx</span>
                        </p>
                        <p className="text-xs text-muted-foreground">5 days ago at 2:45 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="border-0 p-6">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-xl font-semibold mb-6">Network Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Network Name</label>
                        <Input defaultValue="PeerLink Demo Network" className="mt-1" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Your Display Name</label>
                        <Input defaultValue="Guest User" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Bandwidth Limit</label>
                      <select className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option value="none">No Limit</option>
                        <option value="low">Low (1 Mbps)</option>
                        <option value="medium">Medium (5 Mbps)</option>
                        <option value="high">High (10 Mbps)</option>
                      </select>
                      <p className="text-xs text-muted-foreground mt-1">
                        Limits the maximum bandwidth PeerLink will use for peer connections.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Privacy Settings</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm">Share online status with peers</label>
                          <div className="w-10 h-5 bg-brand-purple rounded-full relative">
                            <div className="absolute right-0.5 top-0.5 bg-white w-4 h-4 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-sm">Allow direct messages from non-connections</label>
                          <div className="w-10 h-5 bg-muted rounded-full relative">
                            <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-sm">Encrypt all stored data</label>
                          <div className="w-10 h-5 bg-brand-purple rounded-full relative">
                            <div className="absolute right-0.5 top-0.5 bg-white w-4 h-4 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border flex justify-end">
                      <Button variant="outline" className="mr-2">
                        Reset to Defaults
                      </Button>
                      <Button className="bg-brand-purple hover:bg-brand-darkPurple">
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to get started with the real thing?</h2>
            <p className="text-muted-foreground mb-6">
              This is just a preview of what PeerLink can do. The full version offers even more powerful features for secure, decentralized collaboration.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-brand-purple hover:bg-brand-darkPurple" size="lg" asChild>
                <Link to="/signup">Create Your Workspace</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Demo;
