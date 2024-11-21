import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from './Icons';

export default function Header() {
  return (
    <>
      <nav className='fixed z-[4] w-full flex items-center justify-between bg-opacity-50 py-4 md:py-6 px-3 text-lg border-bottom'>
        <div className='flex'>
          <div className='mr-[14vh] flex cursor-pointer items-center font-medium text-sm md:text-base'>
            <Link href='/'>Joshua Edo</Link>
          </div>
        </div>
        <div className='md:hidden cursor-pointer justify-end space-x-10 flex'>
          <Link
            href='https://joshuaedo.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='https://joshuaedo.sirv.com/joshuaedo/public/images/original/me-modified.png'
              alt="Joshua Edo's Logo"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div className='md:flex cursor-pointer justify-end space-x-10 hidden'>
          <Link
            href='https://joshuaedo.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='https://joshuaedo.sirv.com/joshuaedo/public/images/original/me-modified.png'
              alt="Joshua Edo's Logo"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href='https://twitter.com/j0shuaedo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitterIcon />
          </Link>
          <Link
            href='https://github.com/joshuaedo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GithubIcon />
          </Link>
          <Link
            href='https://www.linkedin.com/in/joshuaedo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon />
          </Link>
          <Link
            href='https://youtube.com/@edojoshua'
            target='_blank'
            rel='noopener noreferrer'
          >
            <YoutubeIcon />
          </Link>
        </div>
      </nav>
    </>
  );
}
