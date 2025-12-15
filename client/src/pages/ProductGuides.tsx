import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductGuides() {
  const guides = [
    { title: "Installation Guide", type: "PDF", size: "2.4 MB" },
    { title: "Changing Curtains Procedure", type: "PDF", size: "1.8 MB" },
    { title: "Storage & Handling", type: "PDF", size: "1.2 MB" },
    { title: "Disposal Instructions", type: "PDF", size: "1.5 MB" },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Guides</h1>
          <p className="text-muted-foreground">
            Download technical documentation, user manuals, and safety guides for Endurocide products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {guides.map((guide, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{guide.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-muted-foreground">{guide.type} • {guide.size}</span>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
