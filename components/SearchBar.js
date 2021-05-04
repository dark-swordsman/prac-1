import { useState, useRef, useEffect } from 'react';
import { useOutsideAlerter } from '../helpers';

function SearchBar() {
  // support multiple modes (like spotlight-style, medium, small, etc.)
  // default mode for now will be wide
  const [isFocused, setIsFocused] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setIsFocused(false));

  return (
    <div className="w-100 flex justify-center py-16">
      <input ref={wrapperRef} type="text" onClick={() => setIsFocused(!isFocused)} placeholder="Search for anime..." className={(isFocused ? "cursor-text" : "cursor-pointer") + " duration-75 text-2xl w-3/4 h-14 rounded-xl px-6 outline-none placeholder-gray-400 bg-gray-700 focus:placeholder-opacity-50 focus:bg-gray-800"} />
    </div>
  );
}

export default SearchBar;