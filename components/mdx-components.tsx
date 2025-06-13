import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { CounterCard } from "@/components/ui/counter-card";
import { StatsGrid } from "@/components/ui/stats-grid";
import Journey from "./layout/journey/journey";

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    Accordion,
    Accordions,
    blockquote: (props) => <Callout>{props.children}</Callout>,
    Callout,
    Card,
    Cards,
    CounterCard,
    File,
    Files,
    Folder,
    ImageZoom,
    StatsGrid,
    Step,
    Steps,
    Tab,
    Tabs,
    TypeTable,
    ...components,
  };
}

export function getBlogMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    Accordion,
    Accordions,
    ImageZoom,
    Journey: Journey,
    ...components,
  };
}
