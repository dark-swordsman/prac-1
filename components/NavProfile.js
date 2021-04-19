import { useState, useRef } from 'react';

import { useOutsideAlerter } from '../helpers';

function NavProfile() {
  const [dropdown, setDropdown] = useState(false);

  const dropdownItems = [
    {
      name: 'test link',
      link: 'https://www.google.com'
    },
    {
      name: 'test link',
      link: 'https://www.google.com'
    },
    {
      name: 'test link',
      link: 'https://www.google.com'
    },
    {
      name: 'test link',
      link: 'https://www.google.com'
    },
    {
      name: 'test link',
      link: 'https://www.google.com'
    }
  ];

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setDropdown(false));
  
  return (
    <div ref={wrapperRef} className="h-full float-right select-none">
      <div onClick={() => setDropdown(!dropdown)} className={"flex items-center px-4 cursor-pointer h-full" + " " + (dropdown ? "bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-900")}>
        <div className="pr-12">Fancy Username</div>
        <img
          src="https://www.placecage.com/50/50"
          alt="profile picture"
          className="rounded-full h-10"
        />
      </div>
      {!dropdown ? null : 
        <div className="z-50 w-full">
          <ul className="w-40 float-right bg-gray-200 dark:bg-gray-800">
            {dropdownItems.map((item, i) => {
              return (
                <li key={i} className={"cursor-pointer px-4 h-9 hover:bg-gray-300 dark:hover:bg-gray-700 border-gray-500" + " " + (dropdownItems.length - 1 == i ? "border" : "border-t border-r border-l")}>
                  <a className="w-full h-full flex items-center" href={item.link}>{item.name}</a>
                </li>
              )
            })}
          </ul>
        </div>
      }
    </div>
  );
}

export default NavProfile;