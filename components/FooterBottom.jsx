const year = new Date().getFullYear();

const BottomFooter = () => {
  return (
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
            href="https://maps.app.goo.gl/f9Kbyi7K3WrhVLsGA"
            className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
          >
            Sitemap
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
