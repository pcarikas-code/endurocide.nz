import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, CheckCircle2, FileText, TrendingDown, ShieldCheck, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

export default function ClinicalStudies() {
  return (
    <div className="min-h-screen bg-background py-12">
      <SEO 
        title="Clinical Studies & Independent Testing Reports"
        description="Review independent laboratory reports and clinical studies validating Endurocide's efficacy against MRSA, C.difficile, E.coli, and other pathogens."
        keywords="clinical studies, antimicrobial testing, hospital curtain efficacy, independent lab reports, infection control data"
      />
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Clinical Validation</h1>
          <p className="text-lg text-muted-foreground">
            Endurocide® curtains are backed by independent laboratory testing and peer-reviewed clinical studies demonstrating proven efficacy against hospital-acquired infections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <Microscope className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-2xl">Sporicidal</CardTitle>
              <CardDescription>Effective against spores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">&gt;99.9%</div>
              <p className="text-sm text-muted-foreground mb-4">Reduction in C. difficile spores</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Tested to EN 13704 standard</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Effective even after 2 years in-situ</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <ShieldCheck className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle className="text-2xl">Bactericidal</CardTitle>
              <CardDescription>Broad spectrum protection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-2">Log 5</div>
              <p className="text-sm text-muted-foreground mb-4">Reduction in MRSA, E. coli, VRE</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Tested to ISO 20743 & AATCC 147</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Kills bacteria on contact</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <FlaskConical className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle className="text-2xl">Virucidal</CardTitle>
              <CardDescription>Effective against viruses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600 mb-2">Proven</div>
              <p className="text-sm text-muted-foreground mb-4">Against H1N1 & Coronavirus</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Tested to EN 14476 standard</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Reduces viral transmission risk</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-border flex-1"></div>
            <h2 className="text-2xl font-bold text-foreground">Published Research</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>

          {/* Study 1 */}
          <Card className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="bg-muted/50 p-8 md:w-1/3 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r">
                <div className="text-4xl font-bold text-primary mb-2">96%</div>
                <div className="text-sm font-medium text-muted-foreground">Pathogen Reduction</div>
                <div className="mt-6 inline-flex items-center px-3 py-1 rounded-full bg-white border text-xs font-medium shadow-sm">
                  USA Study, 2023
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Peer Reviewed</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">Impact of Antimicrobial Curtains on Bacterial Contamination</h3>
                <p className="text-muted-foreground mb-6">
                  A multi-center study published in the American Journal of Infection Control demonstrating significant reduction in bacterial load on privacy curtains in high-acuity settings.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <FileText className="h-4 w-4" />
                    Read Abstract
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Study 2 */}
          <Card className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="bg-muted/50 p-8 md:w-1/3 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r">
                <div className="text-4xl font-bold text-primary mb-2">24</div>
                <div className="text-sm font-medium text-muted-foreground">Months Efficacy</div>
                <div className="mt-6 inline-flex items-center px-3 py-1 rounded-full bg-white border text-xs font-medium shadow-sm">
                  Longitudinal Study
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Lab Report</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">Long-term Sporicidal Activity Assessment</h3>
                <p className="text-muted-foreground mb-6">
                  Independent laboratory testing confirming that Endurocide® curtains maintain their sporicidal efficacy against C. difficile spores for up to 24 months of use.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <FileText className="h-4 w-4" />
                    View Data
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Study 3 */}
          <Card className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="bg-muted/50 p-8 md:w-1/3 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r">
                <TrendingDown className="h-12 w-12 text-primary mb-2" />
                <div className="text-sm font-medium text-muted-foreground">Cost Analysis</div>
                <div className="mt-6 inline-flex items-center px-3 py-1 rounded-full bg-white border text-xs font-medium shadow-sm">
                  NHS Trust Trial
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Case Study</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">Operational Efficiency & Cost Reduction</h3>
                <p className="text-muted-foreground mb-6">
                  Comparative analysis in a UK NHS Trust revealing a 40% reduction in curtain changeover frequency and significant savings on laundry logistics and replacement costs.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <FileText className="h-4 w-4" />
                    Download Report
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
