import {
  defineDocs,
  defineConfig,
  defineCollections,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});

export const blog = defineCollections({
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
  type: "doc",
});
