"use client";

import Navbar from "@/components/Navbar";
import NavPath from "@/components/NavPath";
import BottomFooter from "@/components/FooterBottom";

export default function page() {
  const servicesPath = [{ label: "Home", href: "/" }, { label: "Services" }];
  return (
    <div className="bg-zinc-300 dark:bg-black font-inter min-h-screen">
      <Navbar className="absolute" />
      <NavPath path={servicesPath} />
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vel
          commodi nostrum eligendi quam illo aut modi, tempore veritatis magni
          molestias aperiam similique harum iusto dicta! Sint suscipit rerum
          aliquam, minus repellat porro voluptatem commodi illo at non, deleniti
          blanditiis ut obcaecati incidunt tempore cum ducimus! Repudiandae
          mollitia asperiores repellendus commodi! Architecto exercitationem
          explicabo quaerat dolor vero sunt minima, quidem sequi officiis
          maiores assumenda excepturi, voluptatum a iure! Dolorum facere error,
          iste quo eum, qui recusandae ea impedit iusto voluptates non atque
          quos at corrupti doloremque magnam, reiciendis aperiam aut eligendi
          veniam accusamus voluptas laboriosam. Commodi quibusdam optio quasi
          quis.
        </div>
      </main>
      <BottomFooter />
    </div>
  );
}
