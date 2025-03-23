import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'contentEncoded'],
      ['media:content', 'mediaContent'],
      ['media:thumbnail', 'mediaThumbnail'],
      ['enclosure', 'enclosure'],
      ['description', 'description'],
    ],
  },
});

export async function GET() {
  try {
    const feed = await parser.parseURL('https://rss.beehiiv.com/feeds/cp7VX0xIQr.xml');
    
    const posts = feed.items.map((item) => {
      // Get the full content, prioritizing content:encoded
      const content = item.contentEncoded || item.content || item.description || '';

      // Clean up the content while preserving original formatting
      const cleanContent = content
        // Remove potentially problematic scripts
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
        .replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, '')
        // Remove "powered by beehiiv" text and any containing elements
        .replace(/<[^>]*>powered by beehiiv<\/[^>]*>/gi, '')
        .replace(/powered by beehiiv/gi, '')
        // Ensure links open in new tab
        .replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ')
        // Add lazy loading to images
        .replace(/<img /g, '<img loading="lazy" ');

      // Extract the first image for the featured image
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      const image = imgMatch ? imgMatch[1] : null;

      return {
        title: item.title,
        subtitle: item.description,
        content: cleanContent,
        image: image || item.enclosure?.url || item['media:content']?.$.url || item['media:thumbnail']?.$.url,
        publishedAt: item.pubDate,
        link: item.link,
      };
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch RSS feed' },
      { status: 500 }
    );
  }
} 