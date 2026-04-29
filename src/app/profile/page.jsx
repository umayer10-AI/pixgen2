"use client";
import { ModalTask } from "@/component/ModalTask";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import React from "react";

const page = () => {
  const { data: session } = authClient.useSession();
  console.log(session);
  const user = session?.user;

  return (
    <div className="flex justify-center mt-10">
      <div className="border w-80 flex items-center flex-col shadow rounded-xl space-y-3 py-8">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt="John Doe"
            referrerPolicy="no-referrer"
            src={user?.image}
          />
          <Avatar.Fallback className="text-3xl">{user?.name?.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <h2 className="font-bold text-xl">{user?.name}</h2>
        <h2 className="text-muted font-semibold">{user?.email}</h2>
        <ModalTask></ModalTask>
      </div>
    </div>
  );
};

export default page;
