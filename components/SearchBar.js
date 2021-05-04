import { useState, useRef } from 'react';
import { useOutsideAlerter } from '../helpers';

function SearchBar() {
  // support multiple modes (like spotlight-style, medium, small, etc.)
  // default mode for now will be wide

  // TODO: create search functionality.
  // TODO: enable search on Enter key press.
  const [isFocused, setIsFocused] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setIsFocused(false));

  return (
    <div className="w-100 flex justify-center py-16">
      <input ref={wrapperRef} type="text" onClick={() => { if (!isFocused) setIsFocused(true) } } placeholder="Search for anime..." className={(isFocused ? "cursor-text" : "cursor-pointer") + " duration-75 text-2xl w-2/3 h-14 rounded-l-xl px-6 outline-none placeholder-gray-400 bg-gray-700 focus:placeholder-opacity-50 focus:bg-gray-800"} />
      <button className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 focus:outline-none px-4 text-xl rounded-r-xl select-none">Search</button>
    </div>
  );
}

export default SearchBar;