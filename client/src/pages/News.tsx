import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "wouter";

export default function News() {
  const newsItems = [
    {
      title: "Endurocide Launches New Eco-Friendly Range",
      date: "October 15, 2024",
      excerpt: "We are proud to announce our new 100% biodegradable curtain line, setting a new standard for sustainable infection control.",
      category: "Product Launch"
    },
    {
      title: "Attending Medica 2024",
      date: "September 2, 2024",
      excerpt: "Join us at Hall 6, Stand B42 to see our latest innovations in antimicrobial textiles and discuss partnership opportunities.",
      category: "Events"
    },
    {
      title: "New Distribution Partner in Asia Pacific",
      date: "August 10, 2024",
      excerpt: "Expanding our global reach to ensure hospitals worldwide have access to premium infection prevention solutions.",
      category: "Corporate"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">
        <h1 className="text-4xl font-bold text-foreground mb-12 text-center">Latest News</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.category}</span>
                  <div className="flex items-center text-muted-foreground text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0 text-primary">Read More &rarr;</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
