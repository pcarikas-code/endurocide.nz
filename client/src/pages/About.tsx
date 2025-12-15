import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-muted py-20">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Endurocide</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Pioneering the future of infection control through innovative textile technology.
          </p>
        </div>
      </div>

      <div className="container py-16 space-y-20">
        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Endurocide, our mission is simple: to save lives by reducing the transmission of hospital-acquired infections. We believe that every surface in a healthcare environment should be a barrier against pathogens, not a vector for them.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By combining advanced antimicrobial chemistry with practical, disposable product design, we empower healthcare professionals to maintain safer environments for patients and staff alike.
            </p>
          </div>
          <div className="bg-muted h-80 rounded-2xl flex items-center justify-center">
            <span className="text-muted-foreground">Company Image Placeholder</span>
          </div>
        </div>

        {/* History */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Our History</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded in Scotland, Endurocide began as a research project into sporicidal formulations. Over the last decade, we have grown into a global leader in antimicrobial disposable curtains, trusted by the NHS and healthcare providers in over 20 countries.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-primary/5 rounded-3xl p-12 text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Join Our Global Network</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are always looking for partners who share our commitment to patient safety. Whether you are a distributor or a healthcare provider, we'd love to hear from you.
          </p>
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
