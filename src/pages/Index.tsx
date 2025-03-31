
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkGraph from "@/components/NetworkGraph";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Network, 
  Lock, 
  Zap, 
  Users, 
  FileText 
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50 z-0"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-purple/20 rounded-full filter blur-3xl z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-blue/20 rounded-full filter blur-3xl z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block">Decentralized</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">Peer-to-Peer</span>
                <span className="block">Collaboration</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connect, collaborate, and create without boundaries or central control. PeerLink enables secure, direct peer-to-peer collaboration for teams of any size.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-purple hover:bg-brand-darkPurple" asChild>
                  <Link to="/demo">Try the Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/learn-more">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <NetworkGraph />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PeerLink?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our decentralized platform offers unique advantages for modern collaboration needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldCheck className="w-6 h-6" />}
              title="End-to-End Encryption"
              description="Your data remains secure with advanced encryption at every step, ensuring privacy across all communications."
            />
            <FeatureCard 
              icon={<Network className="w-6 h-6" />}
              title="Decentralized Network"
              description="No central servers means no single point of failure, ensuring reliability and resistance to censorship."
            />
            <FeatureCard 
              icon={<Lock className="w-6 h-6" />}
              title="Self-Sovereign Identity"
              description="Own your digital identity with cryptographic verification that puts you in control of your online presence."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6" />}
              title="Lightning Fast"
              description="Direct peer connections mean faster transfers and reduced latency compared to traditional cloud services."
            />
            <FeatureCard 
              icon={<Users className="w-6 h-6" />}
              title="Collaborative Workflow"
              description="Real-time collaboration tools that work seamlessly even in offline or limited connectivity environments."
            />
            <FeatureCard 
              icon={<FileText className="w-6 h-6" />}
              title="Version Control"
              description="Built-in versioning system that tracks changes and allows easy rollbacks without complex setups."
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              PeerLink establishes direct connections between users, eliminating the need for central servers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                <span className="text-brand-purple font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <p className="text-muted-foreground">Create your decentralized identity and connect with peers through secure discovery protocols.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                <span className="text-brand-purple font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Collaborate</h3>
              <p className="text-muted-foreground">Share files, messages, and work together in real-time with end-to-end encrypted connections.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                <span className="text-brand-purple font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Control</h3>
              <p className="text-muted-foreground">Maintain complete ownership of your data with granular permission settings and audit logs.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-darkPurple to-brand-darkBlue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to experience true decentralized collaboration?</h2>
            <p className="text-xl mb-8 text-white/80">
              Join thousands of teams who have embraced the future of peer-to-peer productivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-brand-darkPurple hover:bg-gray-100" asChild>
                <Link to="/demo">Try the Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
