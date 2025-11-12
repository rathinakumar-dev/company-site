import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const domainOptions = [
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
];

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-32 pb-16 sm:pb-24 md:pb-32 -top-16">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-sky-300 via-white to-amber-200 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
      <div className="absolute inset-x-0 top-0 -z-10 flex justify-center">
        <div className="h-72 w-full max-w-2xl -translate-y-1/2 rounded-full bg-linear-to-br from-sky-400/40 via-cyan-400/30 to-amber-300/40 blur-3xl dark:from-sky-500/20 dark:via-cyan-400/10 dark:to-purple-500/10" />
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-8 text-center lg:max-w-2xl lg:text-left">
          <Badge className="mx-auto w-fit rounded-full bg-amber-500/15 px-4 py-1 text-amber-700 shadow-sm ring-1 ring-amber-500/30 dark:bg-amber-400/10 dark:text-amber-200 dark:ring-amber-400/40 lg:mx-0">
            Premium Digital Experiences
          </Badge>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl md:leading-[1.15] dark:text-white">
              Launch a fast, modern website that makes your brand impossible to ignore.
            </h1>
            <p className="text-base text-slate-600 sm:text-lg md:text-xl dark:text-slate-300">
              From strategic discovery to launch, we build future-ready products, ultra-fast hosting, and scalable platforms tailored for ambitious teams.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button className="h-12 w-full rounded-full bg-slate-900 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 sm:w-auto sm:px-8">
              Start a project
            </Button>
            <Button
              variant="outline"
              className="h-12 w-full rounded-full border-slate-300 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:w-auto sm:px-8"
            >
              View our work
            </Button>
          </div> 
        </div>

        <div className="relative mx-auto w-full max-w-lg rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-2xl backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
          <div className="absolute -top-24 right-6 hidden h-48 w-48 rounded-full bg-linear-to-br from-amber-300/40 via-sky-300/30 to-pink-300/40 blur-3xl sm:block dark:from-amber-400/20 dark:via-indigo-400/10 dark:to-purple-500/10" />
          <div className="relative space-y-6">
            <div className="space-y-2 text-center lg:text-left">
              <p className="text-sm font-medium uppercase tracking-wide text-amber-600 dark:text-amber-300">
                Domain availability
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Secure your perfect domain in seconds
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Search across global extensions and lock in the best name before it&apos;s taken.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <Input
                type="text"
                placeholder="Your brand Name" 
                className="w-60"
              />
              <div className="shrink-0">
                <Select>
                  <SelectTrigger className="h-12 w-full min-w-28  border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-100 [&>svg]:h-5 [&>svg]:w-5 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800">
                    <SelectValue placeholder=".com" />
                  </SelectTrigger>
                  <SelectContent className=" border-slate-100 bg-white p-1 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                    {domainOptions.map(({ label, value }) => (
                      <SelectItem
                        key={value}
                        value={value}
                        className="text-sm hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800"
                      >
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-[29rem] rounded-2xl bg-amber-500 text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-400 dark:text-slate-950">
              Check availability
            </Button>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                  .com
                </Badge>
                <Badge className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                  .in
                </Badge>
                <Badge className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                  .org
                </Badge>
                <Badge className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                  +10 more
                </Badge>
              </div>
              <span>Instant setup • Free privacy lock</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
