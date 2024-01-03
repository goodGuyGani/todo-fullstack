
import React from "react";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import AvatarMenu from "./AvatarMenu";

function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between p-4  px-8 h-[60px]">
      <Logo />
      <div className="flex gap-4 items-center">
        <ThemeSwitcher />
        <AvatarMenu />
      </div>
    </nav>
  );
}

export default NavBar;
