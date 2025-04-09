
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">About PeerLink</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Revolutionizing collaboration through secure peer-to-peer connections.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-brand-darkPurple dark:text-white">Our Vision</h2>
                <div className="bg-card rounded-lg shadow-sm p-8 border border-border/50 h-full">
                  <p className="text-lg leading-relaxed mb-6">
                    At PeerLink, we envision a digital landscape where collaboration happens directly between peers, without centralized intermediaries controlling or monitoring interactions.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We're building technology that empowers individuals and organizations to maintain ownership of their data while enabling seamless collaboration through encrypted peer-to-peer connections.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 text-brand-darkPurple dark:text-white">Our Approach</h2>
                <div className="bg-card rounded-lg shadow-sm p-8 border border-border/50 h-full">
                  <p className="text-lg leading-relaxed mb-6">
                    Traditional collaboration tools store your data on their servers, creating privacy concerns and single points of failure. PeerLink flips this model by establishing direct, encrypted connections between collaborators.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our platform combines cutting-edge cryptography with intuitive user experience, making secure decentralized collaboration accessible to everyone, not just tech enthusiasts.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-20">
              <div className="bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 rounded-xl p-8 sm:p-12">
                <h2 className="text-2xl font-bold mb-6 text-center text-brand-darkPurple dark:text-white">The PeerLink Difference</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="border-transparent bg-white/50 dark:bg-card/50 backdrop-blur-sm">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-brand-purple">Data Ownership</h3>
                      <p className="text-muted-foreground">Your data never touches our servers. It moves directly between peers, ensuring you maintain complete ownership and control.</p>
                    </div>
                  </Card>
                  
                  <Card className="border-transparent bg-white/50 dark:bg-card/50 backdrop-blur-sm">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-brand-purple">Enhanced Privacy</h3>
                      <p className="text-muted-foreground">End-to-end encryption protects your communications. Even if someone intercepts your data, they can't read it without your keys.</p>
                    </div>
                  </Card>
                  
                  <Card className="border-transparent bg-white/50 dark:bg-card/50 backdrop-blur-sm">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-brand-purple">Resilient Infrastructure</h3>
                      <p className="text-muted-foreground">No central servers means no single point of failure. The network remains operational even if parts of it go offline.</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-8 text-brand-darkPurple dark:text-white">Join Our Journey</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                We're just getting started on our mission to revolutionize digital collaboration. 
                Whether you're an individual, a small team, or a large organization, 
                we invite you to join us in building a more secure, private, and resilient digital future.
              </p>
              <div className="flex justify-center">
                <a href="/team" className="text-brand-purple hover:text-brand-darkPurple font-medium">
                  Meet our team →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
