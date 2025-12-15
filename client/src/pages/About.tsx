import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-muted py-20">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Endurocide® New Zealand</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Dedicated to breaking the chain of infection in healthcare settings.
          </p>
        </div>
      </div>

      <div className="container py-16 space-y-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Endurocide® New Zealand, we are dedicated to breaking the chain of infection in healthcare settings. With over 30 years of research and development, our revolutionary infection control products are trusted by healthcare professionals, architects, and specifiers throughout the world, to protect patients and staff from harmful pathogens.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our flagship product, the Endurocide® Antimicrobial & Sporicidal Disposable Curtain, is a testament to our commitment to innovation and medical efficacy. These disposable hospital curtains are not just a barrier; they are an active defence against infection. Featuring a patented formula, our curtains trap and kill a broad spectrum of pathogens directly on the fabric surface —including spores, bacteria, mycobacteria, and fungi. This significantly reduces the risk of Healthcare-Associated Infections (HAIs) being transmitted via one of the most frequently touched surfaces in a patient's environment.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl flex items-center justify-center shadow-sm border">
            <img 
              src="/logo.webp" 
              alt="Endurocide Logo" 
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Why Choose Endurocide */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground">Why Choose Endurocide®?</h2>
            <p className="text-muted-foreground mt-4">
              Trusted by healthcare professionals worldwide for superior infection control.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Efficacy</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our claims are backed by extensive, independent testing and peer-reviewed research published in prestigious journals like the American Journal of Infection Control. Studies have demonstrated that our curtains remain effective for up to two years, providing long-lasting protection and peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainable Solutions</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We believe in protecting both people and the planet. Our products are developed with water-based formulas, offering a more environmentally conscious approach to infection control without compromising on performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Designed for Healthcare</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We understand the unique challenges of the healthcare environment. Our products are designed for seamless integration into existing workflows and are available in a range of specifications to meet the diverse needs of hospitals, clinics, and aged care facilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Economical and Efficient</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    By reducing the frequency of curtain change-outs and lowering the risk of costly HAIs, Endurocide® disposable curtains deliver a significant return on investment. Published studies have shown that our curtains can cut overall costs by up to 50% compared to traditional curtain management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architects & Specifiers */}
        <div className="bg-muted/50 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">For Architects & Specifiers</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Designing the future of healthcare requires specifying products that meet the highest standards of safety and compliance. Endurocide® curtains are available in various sizes and configurations, including options that are compliant with NFPA 13 standards for ceiling-fixed tracks. Partner with us to incorporate a proven, passive infection control product into your next healthcare project.
            </p>
          </div>
        </div>

        {/* Mission & CTA */}
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To provide infection control products you can trust to protect your people. We are committed to helping our partners create safer environments, so you can focus on what matters most—delivering exceptional care.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button size="lg" className="px-8">Contact Us Today</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
