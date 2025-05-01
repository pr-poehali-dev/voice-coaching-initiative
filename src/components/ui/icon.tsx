
import React from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

const Icon = ({ name, fallback = "HelpCircle", className, ...props }: IconProps) => {
  const IconComponent = (LucideIcons as Record<string, LucideIcon>)[name] || 
                       (LucideIcons as Record<string, LucideIcon>)[fallback];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found and fallback "${fallback}" also not found.`);
    return null;
  }
  
  return <IconComponent className={cn("", className)} {...props} />;
};

export default Icon;
