import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Filter, Share2, Facebook, Linkedin, Twitter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";
import SEO from "@/components/SEO";

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const blogPosts = [
    {
      title: "The Overlooked Vector: Mitigating HAIs with Advanced Privacy Curtains",
      date: "December 12, 2024",
      category: "Infection Control",
      excerpt: "While hand hygiene and surface disinfection are rightly prioritized, privacy curtains are often an overlooked high-touch surface. Traditional textile curtains can harbour dangerous pathogens, with studies showing contamination with MRSA, VRE, and C. difficile often occurring within a week of laundering.",
      content: "In the ongoing battle against healthcare-associated infections (HAIs), every potential vector for pathogen transmission requires scrutiny. While hand hygiene and surface disinfection are rightly prioritized, privacy curtains are often an overlooked high-touch surface. Traditional textile curtains can harbour dangerous pathogens, with studies showing contamination with MRSA, VRE, and C. difficile often occurring within a week of laundering. The logistical challenges and costs associated with frequent, effective laundering can lead to inconsistent cleaning schedules, creating a persistent environmental reservoir for microbes.\n\nEndurocide®® disposable antimicrobial curtains offer a solution to this critical gap in environmental hygiene. By incorporating a patented technology that actively kills pathogens on contact, these curtains provide a continuous, passive infection prevention measure. This innovative approach moves beyond simple cleaning to create a permanently hostile environment for microbial life, helping to break the chain of infection and better protect patients and healthcare workers. By addressing the curtain as a key transmission vector, healthcare facilities can significantly enhance their infection control protocols.",
      url: "https://endurocide.com/infection-control/hospital-curtains/antimicrobial-plus-hospital-curtains/"
    },
    {
      title: "Clinical Evidence: A Data-Driven Approach to Curtain Hygiene",
      date: "November 28, 2024",
      category: "Research",
      excerpt: "A recent study published in Infection Prevention in Practice highlights the significant impact of these curtains in a clinical setting. The research found a dramatic reduction in bacterial load on the curtains after installation, with colony-forming units (CFUs) dropping from 32.6 to just 0.56.",
      content: "For infection control professionals, clinical evidence is paramount when evaluating new technologies. Endurocide®® antimicrobial and sporicidal curtains are supported by robust data demonstrating their efficacy in reducing environmental contamination. A recent study published in Infection Prevention in Practice highlights the significant impact of these curtains in a clinical setting. The research found a dramatic reduction in bacterial load on the curtains after installation, with colony-forming units (CFUs) dropping from 32.6 to just 0.56 (P < 0.05).\n\nThis study, conducted across both acute care and maternal child units, provides strong evidence that these curtains function as a passive infection prevention method. By actively killing pathogens, they mitigate the risk of transmission from this frequently touched surface. For facilities seeking to implement evidence-based interventions, the data confirms that Endurocide®® curtains are not just a replacement for traditional textiles, but a scientifically validated tool to enhance patient safety and reduce the microbial burden in the patient environment.",
      url: "https://www.sciencedirect.com/science/article/pii/S2590088923000240"
    },
    {
      title: "Beyond Bacteria: The Importance of Sporicidal Action",
      date: "November 15, 2024",
      category: "Technology",
      excerpt: "C. difficile spores are notoriously resilient, capable of surviving on surfaces for months. Unlike traditional curtains, Endurocide®'s patented technology is proven to be sporicidal, piercing the spore's protective coats and causing lethal DNA damage.",
      content: "While many antimicrobial surfaces are effective against vegetative bacteria, the challenge of eliminating spores, particularly Clostridioides difficile, requires a more advanced approach. C. difficile spores are notoriously resilient, capable of surviving on surfaces for months and resisting many standard disinfectants. Privacy curtains can become a significant reservoir for these spores, contributing to environmental contamination and increasing the risk of transmission.\n\nEndurocide®® Antimicrobial & Sporicidal Curtains are engineered to address this specific threat. Unlike traditional curtains or those with basic antimicrobial coatings, Endurocide®'s patented technology is proven to be sporicidal. The mechanism of action involves piercing the spore's protective coats and causing lethal DNA damage. This ensures that the curtain is not just a passive barrier but an active tool in the fight against C. difficile. For infection control professionals, implementing a curtain with proven sporicidal efficacy is a critical step in reducing the environmental burden of this challenging pathogen.",
      url: "https://endurocide.com/infection-control/hospital-curtains/antimicrobial-plus-hospital-curtains/"
    },
    {
      title: "Operational Efficiency: A Strategic Advantage in Infection Control",
      date: "October 30, 2024",
      category: "Management",
      excerpt: "The cycle of taking down, laundering, and rehanging curtains is labour-intensive and costly. Endurocide®® disposable curtains streamline this entire process. With a proven active lifespan of up to two years, they eliminate the need for laundering entirely.",
      content: "The management of traditional textile curtains presents significant operational and financial challenges. The cycle of taking down, laundering, and rehanging curtains is labour-intensive, costly, and creates logistical burdens for environmental services and infection control teams. Furthermore, the process itself introduces risks of cross-contamination. Every moment a curtain is out of commission for cleaning represents a gap in patient privacy and a disruption to workflow.\n\nEndurocide®® disposable curtains streamline this entire process. With a proven active lifespan of up to two years, they eliminate the need for laundering entirely. This translates directly into savings on water, energy, detergent, and labor costs. The simplicity of the system—hanging a new curtain and disposing of the old one—reduces turnover time and frees up valuable staff resources to be allocated to other critical patient care and disinfection tasks. This operational efficiency makes Endurocide®® curtains not just an infection control measure, but a smart financial and logistical decision for any healthcare facility.",
      url: "https://endurocide.com/infection-control/hospital-curtains/antimicrobial-plus-hospital-curtains/"
    },
    {
      title: "A Layered Defence: Integrating Curtains into Infection Control",
      date: "October 12, 2024",
      category: "Strategy",
      excerpt: "Privacy curtains, due to their frequent contact by patients, visitors, and staff, can quickly become re-contaminated. Endurocide®® antimicrobial curtains provide a crucial, persistent layer of defence, working 24/7 to kill pathogens that are deposited on their surface.",
      content: "Effective infection prevention is built upon a multi-layered strategy, where each component reinforces the others. While terminal cleaning and routine disinfection of high-touch surfaces are fundamental, the patient environment is in a constant state of flux. Privacy curtains, due to their frequent contact by patients, visitors, and staff, can quickly become re-contaminated, undermining even the most diligent cleaning protocols.\n\nThis is where Endurocide®® antimicrobial curtains provide a crucial, persistent layer of defence. They act as a continuous, passive intervention, working 24/7 to kill pathogens that are deposited on their surface. This technology does not replace the need for hand hygiene or standard environmental cleaning; rather, it complements these efforts by ensuring that a major high-touch surface is self-sanitizing. By integrating Endurocide®® curtains, infection control professionals can close a significant loophole in their environmental hygiene protocols, adding a resilient and evidence-based layer to their facility’s defences against HAIs.",
      url: "https://endurocide.com/infection-control/hospital-curtains/antimicrobial-plus-hospital-curtains/"
    },
    {
      title: "Long-Term Value: The Clinical and Financial Case",
      date: "September 25, 2024",
      category: "Finance",
      excerpt: "While the upfront cost of disposable curtains may seem higher than traditional textiles, a comprehensive analysis reveals a strong return on investment. Endurocide®® disposable curtains, with a two-year active life, offer predictable, fixed costs.",
      content: "When evaluating new products, healthcare organizations must consider both clinical efficacy and long-term financial value. While the upfront cost of disposable curtains may seem higher than traditional textiles, a comprehensive analysis reveals a strong return on investment. The recurring expenses associated with laundering conventional curtains—including water, energy, chemicals, labour, and transportation—accumulate significantly over time. Furthermore, the capital cost of laundering equipment and its maintenance must also be factored into the total cost of ownership.\n\nEndurocide®® disposable curtains, with a two-year active life, offer predictable, fixed costs and eliminate these ongoing operational expenses. This allows for more accurate budgeting and a lower total cost of ownership over the curtain's lifespan. More importantly, the clinical value of preventing even a single HAI—which can cost thousands of dollars to treat and has significant implications for patient outcomes and facility reputation—far outweighs the investment in advanced curtain technology. By reducing contamination, Endurocide®® curtains are a fiscally responsible choice that prioritizes patient safety.",
      url: "https://endurocide.com/infection-control/hospital-curtains/antimicrobial-plus-hospital-curtains/"
    }
  ];

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  const handleShare = (platform: string, title: string, url: string) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <SEO 
        title="Latest News & Infection Control Updates"
        description="Stay updated with the latest news, research findings, and product announcements from Endurocide® New Zealand."
        keywords="infection control news, healthcare updates, hospital hygiene blog, Endurocide news"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "datePublished": new Date(post.date).toISOString(),
            "articleSection": post.category,
            "description": post.excerpt,
            "author": {
              "@type": "Organization",
              "name": "Endurocide New Zealand"
            }
          }))
        }}
      />
      <div className="container max-w-[1000px] mx-auto px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Insights & Updates</h1>
          <p className="text-lg text-muted-foreground">
            Latest perspectives on infection control, clinical research, and healthcare innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="rounded-full"
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-all duration-300 border-muted">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="font-medium">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-xs font-medium">
                    <Calendar className="h-3.5 w-3.5 mr-1.5" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between items-center">
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto hover:bg-transparent hover:text-primary group flex items-center gap-2"
                  onClick={() => window.open(post.url, '_blank')}
                >
                  Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-[#1877F2]" 
                    title="Share on Facebook"
                    onClick={() => handleShare('facebook', post.title, post.url)}
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-[#1DA1F2]" 
                    title="Share on Twitter"
                    onClick={() => handleShare('twitter', post.title, post.url)}
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-[#0A66C2]" 
                    title="Share on LinkedIn"
                    onClick={() => handleShare('linkedin', post.title, post.url)}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
