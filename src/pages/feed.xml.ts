import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

const parser = new MarkdownIt();

export async function GET(context: any) {
  const posts = await getCollection("blog", (post) => !post.data.draft);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .slice(0, 10)
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.slug}/`,
        content: sanitizeHtml(parser.render(post.body)),
      })),
    customData: `<language>en-us</language>`,
  });
}
