import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex flex-row p-4 bg-slate-500">
      <p className="uppercase">Matrical Defunkt</p>
      <div className="flex grow"></div>
      <Link className="uppercase p-1" href={"/"}>
        HOME
      </Link>
      <Link className="uppercase p-1" href={"/projects"}>
        PROJECTS
      </Link>
      <Link className="uppercase p-1" href={"/about"}>
        ABOUT
      </Link>
      <Link className="uppercase p-1" href={"/contact"}>
        CONTACT
      </Link>
    </nav>
  );
}
