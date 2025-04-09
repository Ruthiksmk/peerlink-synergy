
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LockKeyhole, Mail, User, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // In a real application, you would handle actual login here
      console.log("Logging in with:", { email, password });
      toast.success("Login successful!");
      navigate("/demo");
    } else {
      // In a real application, you would handle actual signup here
      console.log("Signing up with:", { name, email, password });
      toast.success("Account created successfully!");
      setIsLogin(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center mb-5">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-blue rounded-lg mr-2"></div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">PeerLink</span>
          </Link>
          <h1 className="text-3xl font-bold">{isLogin ? "Welcome Back" : "Join PeerLink"}</h1>
          <p className="text-muted-foreground mt-2">
            {isLogin ? "Sign in to continue to your account" : "Create a new account to get started"}
          </p>
        </div>

        <Card className="border-transparent bg-white/80 dark:bg-card/80 backdrop-blur-md shadow-xl">
          <CardHeader>
            <CardTitle>{isLogin ? "Login" : "Sign Up"}</CardTitle>
            <CardDescription>
              {isLogin 
                ? "Enter your credentials to access your account" 
                : "Fill in the details to create your account"}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10" 
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10" 
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <LockKeyhole className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10" 
                    required
                  />
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-darkPurple hover:to-brand-blue text-white shadow-md"
              >
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="text-center text-sm">
                {isLogin ? (
                  <p>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      className="text-brand-purple hover:text-brand-darkPurple font-medium"
                    >
                      Sign Up
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      className="text-brand-purple hover:text-brand-darkPurple font-medium"
                    >
                      Sign In
                    </button>
                  </p>
                )}
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
