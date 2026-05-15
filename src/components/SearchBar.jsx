"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();
    const query = input.trim();
    if (!query) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("s", query);
    params.delete("genre");
    router.push(`/?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search movies..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-48 px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
      <button
        type="submit"
        className="px-3 py-1 text-sm font-semibold rounded-lg bg-amber-500 hover:bg-amber-600 text-white transition-colors"
      >
        Search
      </button>
    </form>
  );
}
