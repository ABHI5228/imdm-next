import NavbarItem from "./NavbarItem"
import SearchBar from "./SearchBar"

export default function Navbar() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6 items-center flex-wrap '>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
        <SearchBar />

    </div>
  )
}
