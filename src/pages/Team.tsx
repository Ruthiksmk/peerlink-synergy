
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Our Team</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the brilliant minds behind PeerLink's decentralized collaboration platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember 
                name="Ruthik Jadhav" 
                role="Founder & Lead Developer" 
                imageSrc="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              />
              <TeamMember 
                name="Siva Prasad" 
                role="CTO & Blockchain Architect" 
                imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              />
              <TeamMember 
                name="Manikanta Reddy" 
                role="UX Designer & Frontend Lead" 
                imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              />
            </div>
            
            <div className="mt-20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
              <div className="bg-card rounded-lg shadow-sm p-8 border border-border/50">
                <p className="text-lg leading-relaxed mb-6">
                  At PeerLink, we're committed to creating a new internet paradigm where users control their data, identities, and connections. We believe that decentralized technologies represent the next evolution of the web, and we're building the tools that will make this future accessible to everyone.
                </p>
                <p className="text-lg leading-relaxed">
                  Founded by Ruthik, Siva, and Manikanta in 2023, PeerLink grew from a shared frustration with centralized collaboration tools that compromise privacy, security, and ownership. Our team combines expertise in distributed systems, cryptography, and human-centered design to deliver a seamless experience that doesn't sacrifice your digital rights.
                </p>
              </div>
            </div>
            
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card rounded-lg p-6 border border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Privacy by Design</h3>
                  <p className="text-muted-foreground">
                    We believe privacy is a fundamental right. Our platform is built from the ground up to protect your information without compromising on functionality.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border/50">
                  <h3 className="text-xl font-semibold mb-4">User Autonomy</h3>
                  <p className="text-muted-foreground">
                    Your data belongs to you. We design our systems to give you complete control over what you share and with whom.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Technological Freedom</h3>
                  <p className="text-muted-foreground">
                    We're committed to open standards and protocols that prevent vendor lock-in and promote interoperability across the digital ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;
