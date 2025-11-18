import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
          <p className="max-w-[410px] mt-6">
            A modern blog platform where ideas come to life. Share your
            thoughts, discover new perspectives, and connect with a community of
            writers and readers. From technology insights to personal stories,
            every voice matters.
          </p>
        </div>

        <div className="flex justify-end w-full md:w-[45%]">
          <div className="min-w-[200px]">
            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
              Connect
            </h3>
            <ul className="text-sm space-y-1">
              <li>
                <a
                  href="https://github.com/singhHariom1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hariom-singh6199/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/BarbellToBinary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/barbell2binary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:singh.hariom6199@gmail.com"
                  className="hover:underline transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Designed and developed by{" "}
        <span className="font-bold text-primary">Hariom Singh</span>
        &nbsp;• {new Date().getFullYear()} • All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
