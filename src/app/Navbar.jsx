"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const p = usePathname()

  return (
    <div className="border-b">
      <nav className=" flex justify-between items-center w-[90%] mx-auto py-3 max-w-7xl">
        <div className="flex gap-2 items-center">
          <Image
            src={"/image.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            {/* <Link href={"/"}>Home</Link> */}
            <Link href={"/"}>{p==='/' ? <Button className='bg-linear-to-r from-pink-500 via-purple-500 bg-red-500'>Home</Button>:<Button variant="outline">Home</Button>}</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center  text-sm">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;