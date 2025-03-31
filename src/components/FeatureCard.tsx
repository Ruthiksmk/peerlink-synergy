
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="h-full border-transparent bg-gradient-to-b from-white to-muted/30 dark:from-card dark:to-card/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue/80 mb-4 text-white">
          {icon}
        </div>
        <CardTitle className="text-xl text-brand-darkPurple dark:text-white">{title}</CardTitle>
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
