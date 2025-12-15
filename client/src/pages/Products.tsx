import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Products() {
  const products = [
    {
      id: "standard-curtain",
      title: "Standard Antimicrobial Curtain",
      description: "Our flagship disposable curtain with patented sporicidal technology. Fits most standard track systems.",
      features: ["Universal eyelets", "Date labeling system", "Flame retardant", "100% Recyclable"],
      image: "/images/hero-curtain.jpg", // Reusing hero for now, would ideally be product shot
      tag: "Best Seller"
    },
    {
      id: "mesh-curtain",
      title: "Mesh Top Curtain",
      description: "Designed for areas requiring sprinkler systems compliance. Features a permeable mesh top section.",
      features: ["Sprinkler compliant", "Enhanced airflow", "Antimicrobial fabric", "Various drop lengths"],
      image: "/images/hospital-corridor.jpg",
      tag: "Safety Compliant"
    },
    {
      id: "window-blind",
      title: "Antimicrobial Roller Blinds",
      description: "Extend protection to windows with our treated roller blinds. Easy to wipe clean and maintain.",
      features: ["Custom sizing", "Blackout options", "Easy clean surface", "Chain safety mechanism"],
      image: "/images/feature-eco.jpg", // Placeholder
      tag: "New"
    }
  ];

  return (
    <div className="py-12 bg-muted/30 min-h-screen">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Product Range</h1>
          <p className="text-lg text-muted-foreground">
            Explore our range of infection control solutions designed for modern healthcare facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="font-semibold shadow-sm">
                    {product.tag}
                  </Badge>
                </div>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">{product.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="h-5 w-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-secondary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-4 pb-6">
                <Link href="/contact" className="w-full">
                  <Button className="w-full" variant="outline">Request Info</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-24 bg-white rounded-2xl p-8 md:p-12 shadow-sm border flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <h3 className="text-2xl font-bold text-foreground">Need Custom Specifications?</h3>
            <p className="text-muted-foreground">
              We offer bespoke sizing and color options for large orders. Contact our sales team to discuss your facility's specific requirements.
            </p>
          </div>
          <Link href="/contact">
            <Button size="lg" className="shrink-0">Contact Sales Team</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
