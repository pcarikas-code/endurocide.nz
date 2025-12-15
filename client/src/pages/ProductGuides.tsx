import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Download, PlayCircle, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductGuides() {
  const documents = [
    { 
      category: "Technical Specifications",
      items: [
        { title: "Endurocide® Curtain Brochure", type: "PDF", size: "2.4 MB", description: "Complete overview of features, benefits, and technical data." },
        { title: "Technical Data Sheet", type: "PDF", size: "1.2 MB", description: "Detailed material specifications and antimicrobial performance data." },
        { title: "Fire Safety Certification", type: "PDF", size: "0.8 MB", description: "NFPA 701 and BS 5867 compliance documentation." },
      ]
    },
    {
      category: "Installation & Maintenance",
      items: [
        { title: "Installation Guide", type: "PDF", size: "1.5 MB", description: "Step-by-step instructions for hanging curtains on standard tracks." },
        { title: "Curtain Changing Procedure", type: "PDF", size: "1.1 MB", description: "Best practices for safe removal and replacement of curtains." },
        { title: "Care & Maintenance", type: "PDF", size: "0.9 MB", description: "Guidelines for daily use and spot cleaning protocols." },
      ]
    }
  ];

  const faqs = [
    {
      question: "How often should curtains be changed?",
      answer: "Endurocide® curtains are designed to remain effective for up to 24 months. However, they should be replaced immediately if visibly soiled, damaged, or in accordance with your facility's specific infection control protocols."
    },
    {
      question: "Are the curtains fire retardant?",
      answer: "Yes, all Endurocide® curtains are treated with flame retardant and meet international fire safety standards including NFPA 701 and BS 5867 Part 2 Type C."
    },
    {
      question: "How do I dispose of the curtains?",
      answer: "Endurocide® curtains are 100% recyclable polypropylene. However, if contaminated with infectious material, they should be disposed of as clinical waste according to local regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Product Guides & Resources</h1>
          <p className="text-lg text-muted-foreground">
            Access technical documentation, installation manuals, and care instructions to ensure optimal performance of your Endurocide® products.
          </p>
        </div>

        <Tabs defaultValue="documents" className="max-w-4xl mx-auto mb-20">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="documents">Documentation</TabsTrigger>
            <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="documents" className="space-y-10">
            {documents.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h2 className="text-2xl font-bold text-primary border-b pb-2">{section.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.items.map((item, i) => (
                    <Card key={i} className="hover:shadow-md transition-all duration-200 border-l-4 border-l-primary/20 hover:border-l-primary">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <Badge variant="secondary" className="text-xs font-normal">
                            {item.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg mt-3">{item.title}</CardTitle>
                        <CardDescription className="line-clamp-2 mt-1">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between pt-2 border-t mt-2">
                          <span className="text-xs text-muted-foreground font-medium">{item.size}</span>
                          <Button variant="ghost" size="sm" className="gap-2 h-8 text-primary hover:text-primary hover:bg-primary/10">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}


          </TabsContent>
          
          <TabsContent value="faq">
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-muted/30 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-primary/10 p-1.5 rounded-full">
                        <Info className="h-4 w-4 text-primary" />
                      </div>
                      <CardTitle className="text-lg leading-relaxed">{faq.question}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
              
              <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl flex gap-4 items-start">
                <AlertTriangle className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Need specific technical advice?</h4>
                  <p className="text-blue-700 text-sm mb-4">
                    Our technical team can provide detailed guidance on infection control protocols and product suitability for your specific facility requirements.
                  </p>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Contact Support</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
