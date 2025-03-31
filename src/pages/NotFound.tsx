
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted/50">
      <div className="text-center">
        <div className="mb-6">
          <div className="inline-block w-28 h-28 bg-gradient-to-br from-brand-purple via-brand-blue to-brand-lightPurple rounded-2xl relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">404</div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-darkPurple hover:to-brand-blue text-white shadow-md" size="lg" asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
