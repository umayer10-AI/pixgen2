"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const p = usePathname()
    const { data: session } = authClient.useSession()
    const user = session?.user

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

        <ul className="flex items-center gap-5 text-sm font-semibold">
          <li>
            <Link href={"/"}>{p==='/' ? <Button size="sm" className='bg-linear-to-r from-green-500 via-blue-500 bg-green-500'>Home</Button>:<button>Home</button>}</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>{p==='/all-photos' ? <Button size="sm" className='bg-linear-to-r from-green-500 via-blue-500 bg-green-500'>All Photos</Button>:<button>All Photos</button>}</Link>
          </li>
          <li>
            <Link href={"/pricing"}>{p==='/pricing' ? <Button size="sm" className='bg-linear-to-r from-green-500 via-blue-500 bg-green-500'>Pricing</Button>:<button>Pricing</button>}</Link>
          </li>
          <li>
            <Link href={"/profile"}>{p==='/profile' ? <Button size="sm" className='bg-linear-to-r from-green-500 via-blue-500 bg-green-500'>Profile</Button>:<button>Profile</button>}</Link>
          </li>

        </ul>

        <div className="flex gap-4">
          {
             user? <div className="flex items-center gap-3">
                      <Link href={'/profile'}>
                      <Avatar size="sm">
                        <Avatar.Image alt="John Doe" referrerPolicy="no-referrer" src={user?.image} />
                        <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                      </Avatar></Link>
                      <Button onClick={async() => await authClient.signOut()} size="sm" variant="danger">Sign Out</Button>
                  </div>
             : <ul className="flex items-center gap-2 text-sm">
                <li>
                  <Link href={"/signup"}><Button className={'bg-linear-to-r from-pink-500 via-purple-500 bg-red-500'}>SignUp</Button></Link>
                </li>
                <li>
                  <Link href={"/signin"}><Button variant="secondary">SignIn</Button></Link>
                </li>
              </ul>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;