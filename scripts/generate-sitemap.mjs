import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://endurocide.nz';
const BLOG_POSTS_PATH = path.join(__dirname, '../client/src/data/blogPosts.ts');
const OUTPUT_PATH = path.join(__dirname, '../client/public/sitemap.xml');

// Static routes with their priority and changefreq
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/products', priority: '0.8', changefreq: 'monthly' },
  { path: '/technology', priority: '0.8', changefreq: 'monthly' },
  { path: '/clinical-studies', priority: '0.7', changefreq: 'monthly' },
  { path: '/guides', priority: '0.6', changefreq: 'monthly' },
  { path: '/news', priority: '0.7', changefreq: 'weekly' },
  { path: '/about', priority: '0.5', changefreq: 'yearly' },
  { path: '/contact', priority: '0.6', changefreq: 'yearly' },
];

function getBlogSlugs() {
  try {
    const content = fs.readFileSync(BLOG_POSTS_PATH, 'utf-8');
    // Simple regex to extract slugs from the TS file
    // Matches: slug: "some-slug-value"
    const slugRegex = /slug:\s*"([^"]+)"/g;
    const slugs = [];
    let match;
    
    while ((match = slugRegex.exec(content)) !== null) {
      slugs.push(match[1]);
    }
    
    return slugs;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

function generateSitemap() {
  const blogSlugs = getBlogSlugs();
  const today = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add static routes
  staticRoutes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.path === '/' ? '' : route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // Add blog posts
  blogSlugs.forEach(slug => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/news/${slug}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.6</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  fs.writeFileSync(OUTPUT_PATH, xml);
  console.log(`Sitemap generated at ${OUTPUT_PATH} with ${staticRoutes.length + blogSlugs.length} URLs`);
}

generateSitemap();
