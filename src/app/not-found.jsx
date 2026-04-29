"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

const NotFound = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center px-4">
      
      <div className="text-center space-y-6">
        
        {/* 404 */}
        <h1 className="text-7xl font-black bg-linear-to-r from-green-500 via-blue-500 to-green-500 text-transparent bg-clip-text">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-bold">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-md mx-auto">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <div className="pt-4">
          <Link href="/">
            <Button className="bg-linear-to-r from-green-500 via-blue-500 to-green-500 text-white">
              Back to Home
            </Button>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default NotFound;