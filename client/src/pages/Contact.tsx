import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock } from "lucide-react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // Load Prospect CRM form script
    const script = document.createElement("script");
    script.src = "https://userresources.prospect365.com/forms/QXZhbiBNZWR2ZWRldkFudvUt0fK4t19xECQqo5SOegDfVln3lg==/5/form.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have questions about Endurocide®? Our team is here to help you find the right infection control solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                  {/* Address removed as per request */}
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-sm text-muted-foreground">+64 (0)21 029 66718</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-sm text-muted-foreground">info@endurocide.nz</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Business Hours</h4>
                    <p className="text-sm text-muted-foreground">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <div id="prospect-form-5">
                  <div className="prospect-form-loading flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
