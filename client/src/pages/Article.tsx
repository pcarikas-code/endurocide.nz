import { useRoute } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Article() {
  const [, params] = useRoute("/news/:slug");
  const slug = params?.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background py-20 px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you are looking for does not exist.</p>
        <Link href="/news">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
          </Button>
        </Link>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
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
        title={`${post.title} - endurocide® NZ News`}
        description={post.excerpt}
        keywords={`endurocide, ${post.category}, infection control, hospital curtains`}
      />

      <div className="container max-w-[1000px] mx-auto px-4">
        <Link href="/news">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
          </Button>
        </Link>

        <article className="bg-card rounded-xl border shadow-sm overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1 bg-secondary/50 px-3 py-1 rounded-full text-secondary-foreground">
                <Tag className="h-3 w-3" /> {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {post.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="font-medium text-foreground flex items-center gap-2">
                <Share2 className="h-4 w-4" /> Share this article:
              </span>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2 hover:text-[#1877F2] hover:border-[#1877F2]"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook className="h-4 w-4" /> Facebook
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2 hover:text-[#1DA1F2] hover:border-[#1DA1F2]"
                  onClick={() => handleShare('twitter')}
                >
                  <Twitter className="h-4 w-4" /> Twitter
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2 hover:text-[#0A66C2] hover:border-[#0A66C2]"
                  onClick={() => handleShare('linkedin')}
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
