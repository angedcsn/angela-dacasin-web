import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "../../components/icons";

export const metadata = {
  title: "About",
  description: "VP of Developer Experience at Vercel.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hi, I&apos;m Angela. Most folks know me as <b>Ange</b> online.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          Ever since I was young, I have been fascinated by the power of
          computers and the endless possibilities that they offer.
        </p>
        <hr />
        <p>
          I started learning programming languages in 1st year, where I was
          introduced to the basics of HTML, CSS, and JavaScript. Since then, I
          have continued to expand my <b>knowledge</b> and skills in various
          programming languages, including Python, Java, C++, and SQL.
        </p>
        <p>
          Currently, I am pursuing a degree in Computer Science, where I am{" "}
          <b>learning</b> not only how to code but also the theoretical
          foundations of computer and <b>data science</b>. I am excited to be
          part of a constantly evolving field and to be able to use my skills to
          create solutions to real-world problems.
        </p>
        <p className="mb-8">
          Apart from programming, I enjoy tinkering with gadgets, reading tech
          blogs, and watching tech-related videos on YouTube. I am also
          passionate about fitness and <b>healthy living</b>, and I try to
          incorporate these values into my daily routine.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/_angedcsn/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <InstagramIcon />
              <div className="ml-3">Instagram</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://web.facebook.com/angedacasin03"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <FacebookIcon />
              <div className="ml-3">Facebook</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
