import { IconBrandAmazon } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex flex-col items-center">
        <div className="text-xl leading-4">A Z</div>
        <IconBrandAmazon size={40} stroke={1} />
      </div>
    </Link>
  );
};

export default Logo;
