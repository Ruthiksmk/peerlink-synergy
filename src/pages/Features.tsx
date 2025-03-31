
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Share2, 
  Shield, 
  Zap, 
  Workflow, 
  Layers, 
  LineChart,
  Users,
  FileLock2,
  RefreshCw,
  Fingerprint,
  Globe,
  Cpu
} from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">PeerLink Features</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore the powerful capabilities of our decentralized collaboration platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Peer-to-Peer Architecture</h3>
                <p className="text-muted-foreground mb-4">Direct connections between users eliminate the need for central servers, reducing latency and potential points of failure.</p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
                <p className="text-muted-foreground mb-4">All communications and shared files are encrypted using state-of-the-art cryptographic protocols, ensuring only intended recipients can access content.</p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Collaboration</h3>
                <p className="text-muted-foreground mb-4">Work together on documents, code, and projects with instantaneous updates visible to all participants regardless of location.</p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customizable Workflows</h3>
                <p className="text-muted-foreground mb-4">Create and automate processes tailored to your team's needs with our flexible workflow engine and integration capabilities.</p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Version Control</h3>
                <p className="text-muted-foreground mb-4">Track changes and maintain a complete history of all collaborative work with built-in, user-friendly version control tools.</p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground mb-4">Gain insights into your team's collaboration patterns and productivity with privacy-preserving analytics and visualizations.</p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Team Management</h3>
                <p className="text-muted-foreground mb-4">Create secure workspaces with customizable access controls and governance structures for teams of any size.</p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <FileLock2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure File Sharing</h3>
                <p className="text-muted-foreground mb-4">Share files of any size with granular permissions and optional expiration dates or access limits.</p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Offline Capability</h3>
                <p className="text-muted-foreground mb-4">Continue working even without internet access, with automatic synchronization when connectivity is restored.</p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <Fingerprint className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Self-Sovereign Identity</h3>
                <p className="text-muted-foreground mb-4">Control your digital identity with cryptographic verification that puts you in complete control of your credentials.</p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cross-Platform Support</h3>
                <p className="text-muted-foreground mb-4">Access PeerLink from any device with native applications for desktop, mobile, and web browsers.</p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Extensible API</h3>
                <p className="text-muted-foreground mb-4">Build custom integrations and extensions using our comprehensive developer tools and open API specifications.</p>
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <h2 className="text-2xl font-bold mb-6">Ready to experience the future of collaboration?</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-brand-purple hover:bg-brand-darkPurple" size="lg" asChild>
                  <Link to="/demo">Try the Demo</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
