import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center p-3 px-4">
        {/* Left Side */}
        <div className="flex gap-4">
          <MenuItem title="Home" address="/" Icon={AiFillHome} />
          <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <DarkModeSwitch />

          <Link href="/" className="flex items-center gap-1">
            <span className="bg-amber-500 py-1 px-2 rounded-lg text-2xl font-bold">
              IMDb
            </span>

            <span className="hidden sm:inline text-xl">
              Clone
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
