declare module "astro:content" {
  interface ContentEntryMap {
    blog: {
      id: string;
      slug: string;
      body: string;
      collection: "blog";
      data: {
        title: string;
        description: string;
        pubDate: Date;
        author: string;
        tags?: string[];
        draft?: boolean;
      };
    };
  }
}

export {};
