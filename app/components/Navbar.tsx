import Link from 'next/link';
import { FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa';
export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sitcky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between items-center flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Ahmed Alawneh
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4">
          <Link
            className="text-white/90 hover:text-white"
            href="https://t.me/ProgrammerLevi"
            target="_black"
          > 
            <FaTelegram />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/a7mad1112"
            target="_black"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.linkedin.com/in/ahmedalalawneh/"
            target="_black"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </nav>
  );
}
