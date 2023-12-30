import React from "react";
import Link from "next/link";

function Logo() {
  return (
    <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
      <Link href="/">RemindMe</Link>
    </h1>
  );
}

export default Logo;
