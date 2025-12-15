import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, CheckCircle2 } from "lucide-react";

export default function ClinicalStudies() {
  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Clinical Studies</h1>
          <p className="text-lg text-muted-foreground">
            Independent laboratory testing and real-world hospital trials validating Endurocide efficacy.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Study 1 */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary">ISO 20743</Badge>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <CardTitle className="text-2xl text-primary">Antibacterial Activity Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Comprehensive testing demonstrating log reduction of MRSA and E. coli on treated fabric surfaces over a 24-hour period.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-secondary" />
                  Key Findings
                </h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>&gt;99.9% reduction in bacterial load</li>
                  <li>Effective against antibiotic-resistant strains</li>
                  <li>Sustained activity after simulated wear</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Study 2 */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline">Case Study</Badge>
                <span className="text-sm text-muted-foreground">2023</span>
              </div>
              <CardTitle className="text-2xl text-primary">NHS Trust Trial</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A 6-month comparative study in a busy acute care ward measuring infection rates and operational costs.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <FlaskConical className="h-4 w-4 text-secondary" />
                  Results
                </h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Reduced curtain changeover frequency by 40%</li>
                  <li>Significant cost savings on laundry logistics</li>
                  <li>Positive staff feedback on ease of use</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
