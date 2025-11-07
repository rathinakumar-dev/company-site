"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[105rem] md:h-[120rem] py-0 md:py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] -top-16"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 px-4 w-full left-0 z-40 top-20 md:top-8">
      <h1 className="text-2xl text-center md:text-7xl font-bold text-black dark:text-white mt-6 md:mt-0">
        Build a Fast, Modern Website <br /> That Grows Your Business
      </h1>
      <p className="max-w-2xl text-base text-center mx-auto md:text-xl mt-8 dark:text-neutral-200">
        We craft custom web solutions from the ground up designed for startups
        and mid-sized enterprises ready to scale.
      </p>
      <div className="mt-16 px-6 md:px-0">
        <div className="w-full max-w-3xl bg-white dark:bg-neutral-900 px-6 py-8 mx-auto rounded-2xl shadow-md border border-gray-200 dark:border-neutral-800 transition-colors duration-300">
          {/* Title */}
          <p className="mb-6 text-lg font-semibold text-gray-800 dark:text-gray-100 text-center md:text-left">
            Find your expected Domain name?
          </p>

          {/* Search Form */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-center w-full">
            {/* Input Field */}
            <Input
              type="text"
              placeholder="Enter Your Domain Name"
              className="w-full md:flex-1 h-10 bg-white dark:bg-neutral-800 border border-gray-400 dark:border-neutral-700 rounded-lg px-4 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
            />

            {/* Domain Extension Select */}
            <div className="w-full md:w-48">
              <Select>
                <SelectTrigger className="w-full h-10 border border-gray-400 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white font-semibold rounded-lg transition-colors [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-black dark:[&>svg]:text-white">
                  <SelectValue placeholder="Select Domain" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-neutral-800 text-black dark:text-white border border-gray-200 dark:border-neutral-700">
                  {[
                    { label: "All", value: "all" },
                    { label: ".com", value: "com" },
                    { label: ".net", value: "net" },
                    { label: ".org", value: "org" },
                    { label: ".info", value: "info" },
                    { label: ".biz", value: "biz" },
                    { label: ".in", value: "in" },
                    { label: ".co.in", value: "co.in" },
                    { label: ".net.in", value: "net.in" },
                    { label: ".org.in", value: "org.in" },
                    { label: ".gen.in", value: "gen.in" },
                    { label: ".firm.in", value: "firm.in" },
                    { label: ".ind.in", value: "ind.in" },
                    { label: ".ac.in", value: "ac.in" },
                    { label: ".edu.in", value: "edu.in" },
                  ].map(({ label, value }) => (
                    <SelectItem
                      key={value}
                      value={value}
                      className="hover:bg-gray-100 dark:hover:bg-neutral-700 cursor-pointer transition-colors"
                    >
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-black dark:text-black font-medium text-md px-6 h-10 rounded-lg transition-colors">
              Submit
            </Button>

            {/* Popular Extensions Badge */}
            <Badge className="w-full md:w-32 text-center py-2 px-4 text-sm bg-zinc-700 dark:bg-zinc-200 text-white dark:text-black rounded-lg">
              .com .in .org
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-52 md:h-82 w-[20rem] md:w-[30rem] relative shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      {/* <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2> */}
    </motion.div>
  );
};
