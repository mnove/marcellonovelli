import { docs, blog as blogPosts } from "@/.source";
import { create } from "@/components/ui/icon";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createMDXSource } from "fumadocs-mdx";
import { SidebarItem } from "@/components/sidebar-item";
export const source = loader({
  pageTree: {
    attachFile(node, file) {
      // // you can access its file information
      // console.log(file?.data);
      const isInProgress = file?.data.isInProgress ?? false;

      const isAlpha = file?.data.isAlpha ?? false;
      const isNew = file?.data.isNew ?? false;

      node.name = (
        <SidebarItem
          name={node.name as string}
          isInProgress={isInProgress}
          isAlpha={isAlpha}
          isNew={isNew}
        />
      );

      return node;
    },
  },
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (icon && icon in icons)
      return create({ icon: icons[icon as keyof typeof icons] });
  },
});

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts, []),
});
