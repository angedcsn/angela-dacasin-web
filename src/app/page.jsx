import Link from "next/link";
import Image from "next/image";
import {
  GitHubIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "../components/icons";
import { name, about, bio, avatar } from "./data/info";

export const revalidate = 60;

export default function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale aspect-square"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/_angedcsn/"
            className="flex items-center gap-2"
          >
            <InstagramIcon />
            follow me on instagram
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://facebook.com/angeladacasin03"
            className="flex items-center gap-2"
          >
            <FacebookIcon /> add me on facebook
          </a>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
    </section>
  );
}
