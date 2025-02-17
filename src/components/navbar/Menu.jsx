import React from "react";
import NavLink from "./NavLink";

const Menu = ({ display }) => {
  return (
    <div
      className={`shadow-md ${display} p-10 rounded-lg opacity-90 bg-slate-50 absolute top-20 right-0`}
    >
      <ul className="flex flex-col items-center gap-2 ">
        <NavLink sectionName="Home" section="home" offset={-100} />
        <NavLink sectionName="About us" section="about-us" offset={50} />
        <NavLink sectionName="Services" section="services" offset={0} />
        <NavLink sectionName="Contact" section="contact" offset={20} />
        <hr class="w-48 h-1 opacity-50 mx-auto my-2 bg-blue-950 border-0 rounded" />
        <li>
          <a
            href="#"
            className="uppercase text-orange-400 text-lg font-bold hover:text-blue-950 transition-all "
          >
            Book a call
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
