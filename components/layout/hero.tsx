"use client";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { LineShadowText } from "../magicui/line-shadow-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Feature } from "./hero.client";

const w1 = "Software";
const w2 = "Engineer";
console.log(w1, w2);

export const Hero = () => {
  const [devMode, setDevMode] = useState(false);
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center py-32 ">
        <DashedLineContainer>
          <VerticalDashedLine
            className="md:-left-10"
            width="calc(100% + 80px)"
            mobileWidth="100%"
          />
          <h1 className="relative text-3xl sm:text-4xl  py-5 text-muted-foreground font-thin">
            Hello, I&apos;m Marcello
          </h1>
          <VerticalDashedLine />

          {/* <div className="mx-auto py-10 flex flex-row items-center px-4 flex-wrap text-center w-full gap-4 justify-center max-w-screen-lg">
            <h1 className="text-balance text-7xl font-semibold leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl ">
              I&apos;m a
            </h1>
            <div className="hidden lg:block text-2xl tracking-normal leading-normal border p-4 bg-gray-100 dark:bg-zinc-900 font-mono rounded-lg font-normal">
              <span className="text-muted-foreground mr-4">1</span>
              <span className="text-orange-400">console</span>.
              <span className="text-blue-400">log</span>
              <span className="text-orange-400">(</span>
              <span className="text-green-400">"Software"</span>,
              <span className="text-green-400">"Engineer"</span>
              <span className="text-orange-400">)</span>;
            </div>{" "}
            <div className="block lg:hidden text-2xl tracking-normal leading-normal border p-4 bg-gray-100 dark:bg-zinc-900 font-mono rounded-lg font-normal text-left text-nowrap">
              <p>
                <span className="text-muted-foreground mr-4">1</span>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-orange-400">w1</span>{" "}
                <span className="text-teal-500">=</span>{" "}
                <span className="text-green-400">"Software"</span>;
              </p>
              <p>
                <span className="text-muted-foreground mr-4">2</span>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-orange-400">w1</span>{" "}
                <span className="text-teal-500">=</span>{" "}
                <span className="text-green-400">"Engineer"</span>;
              </p>
              <p>
                <span className="text-muted-foreground mr-4">3</span>
                <span className="text-yellow-400">console</span>.
                <span className="text-blue-400">log</span>
                <span className="text-yellow-400">(</span>
                <span className="text-orange-400">w1</span>,{" "}
                <span className="text-orange-400">w2</span>
                <span className="text-yellow-400">)</span>;
              </p>
            </div>
            <h1 className="text-balance text-7xl font-semibold leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              and Web{" "}
              <LineShadowText className="italic" shadowColor={shadowColor}>
                Designer
              </LineShadowText>
            </h1>
          </div> */}

          <div
            style={{ position: "relative" }}
            className="mx-auto py-10 flex flex-row items-center px-4 flex-wrap text-center w-full gap-4 justify-center max-w-screen-lg  relative"
          >
            <AnimatePresence mode="wait">
              {devMode ? (
                <motion.div
                  key="technical"
                  // initial={{ opacity: 0, rotateX: -90 }}
                  // animate={{ opacity: 1, rotateX: 0 }}
                  // exit={{ opacity: 0, rotateX: 90 }}
                  // transition={{ duration: 0.5 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ ease: "easeInOut" }}
                  style={{ position: "relative", paddingLeft: 5 }}
                  className="p-2 rounded-md"
                >
                  <div className="mx-auto py-10 flex flex-row items-center px-4 flex-wrap text-center w-full gap-4 justify-center max-w-screen-lg">
                    <h1 className="text-balance text-7xl font-semibold leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl ">
                      <span className="text-muted-foreground">I&apos;m a</span>
                    </h1>
                    <div className="hidden lg:block text-2xl tracking-normal leading-normal border p-4 bg-gray-100 dark:bg-zinc-900 font-mono rounded-lg font-normal">
                      <span className="text-muted-foreground mr-4">1</span>
                      <span className="text-orange-400">console</span>.
                      <span className="text-blue-400">log</span>
                      <span className="text-orange-400">(</span>
                      <span className="text-green-400">
                        &quot;Software&quot;
                      </span>
                      ,
                      <span className="text-green-400">
                        &quot;Engineer&quot;
                      </span>
                      <span className="text-orange-400">)</span>;
                    </div>{" "}
                    <div className="block lg:hidden text-2xl tracking-normal leading-normal border p-4 bg-gray-100 dark:bg-zinc-900 font-mono rounded-lg font-normal text-left text-nowrap">
                      <p>
                        <span className="text-muted-foreground mr-4">1</span>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-orange-400">w1</span>{" "}
                        <span className="text-teal-500">=</span>{" "}
                        <span className="text-green-400">
                          &quot;Software&quot;
                        </span>
                        ;
                      </p>
                      <p>
                        <span className="text-muted-foreground mr-4">2</span>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-orange-400">w1</span>{" "}
                        <span className="text-teal-500">=</span>{" "}
                        <span className="text-green-400">
                          &quot;Engineer&quot;
                        </span>
                        ;
                      </p>
                      <p>
                        <span className="text-muted-foreground mr-4">3</span>
                        <span className="text-yellow-400">console</span>.
                        <span className="text-blue-400">log</span>
                        <span className="text-yellow-400">(</span>
                        <span className="text-orange-400">w1</span>,{" "}
                        <span className="text-orange-400">w2</span>
                        <span className="text-yellow-400">)</span>;
                      </p>
                    </div>
                    <h1 className="text-balance text-7xl font-semibold leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                      <span className="text-muted-foreground">and</span> Web{" "}
                      <LineShadowText
                        className="italic"
                        shadowColor={shadowColor}
                      >
                        Designer
                      </LineShadowText>
                    </h1>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="easy"
                  // initial={{ opacity: 0, rotateX: -90 }}
                  // animate={{ opacity: 1, rotateX: 0 }}
                  // exit={{ opacity: 0, rotateX: 90 }}
                  // transition={{ duration: 0.5 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ ease: "easeInOut" }}
                  style={{ position: "relative", paddingLeft: 5 }}
                  className="p-2 rounded-md"
                >
                  <h1 className='className="text-balance text-6xl font-semibold leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl "'>
                    <span className="text-muted-foreground">I&apos;m a</span>{" "}
                    Software Engineer{" "}
                    <span className="text-muted-foreground">and</span> Web
                    Designer
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <VerticalDashedLine />

          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4 relative py-10 px-8">
              <div className="w-full flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <Switch
                    id="dev-mode"
                    checked={devMode}
                    onCheckedChange={setDevMode}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="dev-mode" className="text-teal-500">
                    Try Dev Mode!
                  </Label>
                </div>
              </div>
              <VerticalDashedLine />
              <div className="flex flex-row gap-4">
                <Button variant="outline" size="lg">
                  Projects
                </Button>
                <Button size="lg">Personal Docs</Button>
              </div>

              <div>100% free to reach out. Forever!</div>

              <HorizontalDashedLine
                className="hidden md:block"
                height="calc(100% + 56px)"
                side="left"
              />
              <HorizontalDashedLine
                className="hidden md:block"
                height="calc(100% + 56px)"
                side="right"
              />
            </div>
          </div>
          <VerticalDashedLine />
          <HorizontalDashedLine
            className="-top-14"
            height="calc(100% + 112px)"
            side="left"
          />

          <HorizontalDashedLine
            className="-top-14"
            height="calc(100% + 112px)"
            side="right"
          />
          <DashedCircle className="-top-12 -left-12" />
        </DashedLineContainer>
      </div>
      <DashedLineContainer>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl tracking-tight font-semibold ">
            Welcome to my <span className="italic">personal documentation</span>{" "}
            site.
          </h1>

          <p>
            I decided to collect all the info about myself, my projects, ideas,
            and experiments here.
          </p>
          <p>Why a docu you might ask?</p>
          <p>
            Well, I wanted to have a place where I can write down my thoughts,
            ideas, and projects in a structured way. Plus, I am used to writing
            documentation for my projects, so why not do the same for my
            personal stuff?
          </p>
        </div>
      </DashedLineContainer>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-r border-dashed border-primary/20 mt-20">
          <div>
            <Feature>
              <div className="flex flex-row gap-3">
                <h1 className="text-3xl uppercase tracking-tight text-muted-foreground font-thin">
                  Latest
                </h1>

                <Badge variant="outline">
                  Live Data{" "}
                  <span className="relative flex size-3 ml-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-teal-500"></span>
                  </span>
                </Badge>
              </div>
            </Feature>
          </div>
          <div>
            <Feature>
              <Table className="">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      {" "}
                      <span className="font-mono text-muted-foreground">
                        Current Location:
                      </span>{" "}
                    </TableCell>
                    <TableCell> Around Europe 🌍</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      {" "}
                      <span className="font-mono text-muted-foreground">
                        Timezone:
                      </span>{" "}
                    </TableCell>
                    <TableCell> CEST (UTC+2)</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      {" "}
                      <span className="font-mono text-muted-foreground">
                        Languages:
                      </span>{" "}
                    </TableCell>
                    <TableCell> English, Italian, Spanish</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Feature>
          </div>
          <div className="h-full">
            <Feature>
              <span className="font-mono text-muted-foreground">
                Currently working on:
              </span>{" "}
              <Button variant="link" asChild>
                <a
                  href="
                "
                  className="text-primary"
                >
                  stackzero/commerce-ui
                </a>
              </Button>
            </Feature>
          </div>
        </div>
        <div className="border-t border-dashed border-primary/20"></div>
      </div>
    </div>
  );
};

export const StickyHeader = () => {
  return (
    <div className="fixed w-full top-4 bg-transparent shadow-md z-50">
      <div className="flex items-center w-full justify-center">
        <div className="supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto  flex h-[58px] w-max gap-2 rounded-2xl border p-2 backdrop-blur-md">
          <h1 className="text-xl font-bold">Sticky Header</h1>
        </div>
      </div>
    </div>
  );
};

const DashedLineContainer = ({ children }: { children: React.ReactNode }) => {
  const container = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      className="flex flex-col size-full relative"
      variants={container}
      initial="initial"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

const VerticalDashedLine = ({
  className,
  width = "100%",
  mobileWidth = "100%",
}: {
  className?: string;
  width?: string;
  mobileWidth?: string;
}) => {
  const isMobile = useIsMobile();
  const variants = {
    initial: { width: "0%", opacity: 0.6 },
    visible: {
      width: isMobile ? mobileWidth : width,
      opacity: 0.2,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.div
      variants={variants}
      className={cn(
        "relative border-dashed border-t border-primary",
        className
      )}
    />
  );
};

const HorizontalDashedLine = ({
  className,
  side,
  height = "100%",
}: {
  className?: string;
  side: "left" | "right";
  height?: string;
}) => {
  const variants = {
    initial: { height: "0%", opacity: 0.6 },
    visible: { height, opacity: 0.2, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={variants}
      className={cn(
        "border-dashed border-l border-primary absolute top-0",
        side === "left" ? "left-0" : "right-0",
        className
      )}
    />
  );
};

const DashedCircle = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute hidden md:block", className)}>
      <motion.div className="relative" initial="initial" animate="visible">
        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="absolute inset-0"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ strokeDashoffset: 283 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-primary/20"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
