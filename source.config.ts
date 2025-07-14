import {
  defineDocs,
  defineConfig,
  defineCollections,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    // @ts-ignore
    schema: frontmatterSchema.extend({
      isInProgress: z.boolean().optional(),
      isAlpha: z.boolean().optional(),
      isNew: z.boolean().optional(),
    }),
  },
  meta: {
    schema: metaSchema.extend({
      isInProgress: z.boolean().optional(),
      isAlpha: z.boolean().optional(),
      isNew: z.boolean().optional(),
    }),
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});

export const blog = defineCollections({
  dir: "content/blog",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
  type: "doc",
});
