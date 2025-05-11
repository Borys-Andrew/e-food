import { Menu } from "lucide-react";

import Logo from "@/assets/Logo.svg?react";

import { Icon } from "../icon";

export const Header = () => {
  return (
    <header className="container w-screen border border-blue-500">
      <div className="flex items-center justify-between border border-red-500">
        <Icon
          icon={Logo}
          title="Company Logo"
          className="cursor-pointer transition-colors delay-75 ease-in-out hover:text-orange-500"
        />
        <Menu size={22} />
      </div>
    </header>
  );
};
