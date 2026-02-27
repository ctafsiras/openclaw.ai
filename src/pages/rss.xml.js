import rss from '@astrojs/rss';
import { getPublishedBlogPosts } from '../lib/blog';

export async function GET(context) {
  const posts = await getPublishedBlogPosts();

  return rss({
    title: 'OpenClaw Blog',
    // original: description: 'Updates and news from OpenClaw — The AI that actually does things',
    description: 'ওপেনক্ল (OpenClaw) এর আপডেট এবং খবরাখবর — এমন এক এআই যেটা আসলেই কাজের কাজ করে (বাকিগুলোর মতো শুধু বকচর করে না)',
    site: context.site ?? 'https://openclaw.ai',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}`,
    })),
  });
}
