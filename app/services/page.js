"use client";

import Navbar from "@/components/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const page = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-zinc-300 dark:bg-black font-inter min-h-screen">
      <Navbar className="absolute" />
      <Breadcrumb className="w-full h-66 bg-zinc-100/50  dark:bg-zinc-800 object-contain flex justify-center items-center shadow-sm relative -top-16">
        <BreadcrumbList className="px-4 mt-8">
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-sm md:text-base text-zinc-900 dark:text-white font-medium">
              What We Do
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          saepe, voluptatem atque itaque omnis facilis voluptates blanditiis nam
          ratione minus accusamus, quis debitis aliquam magni voluptatum quo
          odit voluptas iusto?
        </div>
      </main>
      <div className="footer-legal border-t border-gray-800 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {year} Goldmine Infotech Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="/privacy"
              className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="/sitemap"
              className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
