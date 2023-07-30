import Link from "next/link";
import Image from "next/image";
import { GithubIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from "./Icons";

export default function Header() {
  return (
    <>
      <nav
        className={`fixed z-[4] w-screen flex h-[12vh] items-center justify-between bg-opacity-50 p-7 text-lg`}
      >
        <div className="flex">
          <div
            className={`mr-[14vh] flex cursor-pointer items-center font-medium`}
          >
            <Link href="/">Joshua Edo</Link>
          </div>
        </div>
        <div className={`md:flex cursor-pointer justify-end space-x-10 hidden`}>
          <Link
            href="https://joshuaedo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://joshuaedo.sirv.com/joshuaedo/public/images/original/me-modified.png"
              alt="Joshua Edo's Logo"
              width={25}
              height={25}
            />
          </Link>
          <Link
            href="https://twitter.com/thegr8joshua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </Link>
          <Link
            href="https://github.com/joshuaedo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joshuaedo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://youtube.com/@edojoshua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon />
          </Link>
        </div>
      </nav>
    </>
  );
}
