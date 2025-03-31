
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="h-full border-border/50 bg-gradient-to-b from-card to-card/95 backdrop-blur-sm hover:shadow-md transition-all duration-300">
      <CardHeader>
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-purple/10 mb-4 text-brand-purple">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
