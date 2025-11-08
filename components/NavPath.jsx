import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const NavPath = ({ path, className = "" }) => {
  return (
    <Breadcrumb
      className={`w-full h-66 bg-zinc-100/50 dark:bg-zinc-800 flex justify-center items-center shadow-sm relative -top-16 ${className}`}
    >
      <BreadcrumbList
        className="px-4 flex items-center gap-2 whitespace-nowrap"
        style={{ minHeight: 48 }} 
      >
        {path.map((item, idx) => (
          <React.Fragment key={item.label}>
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink
                  href={item.href}
                  className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="text-sm md:text-base text-zinc-900 dark:text-white font-medium">
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {idx < path.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NavPath;
