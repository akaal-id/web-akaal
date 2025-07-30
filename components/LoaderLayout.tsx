"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoaderLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/80">
        <div className="spinner relative flex items-center justify-center mb-6">
          <div className="spinner1 absolute"></div>
        </div>
        <div className="text-white text-xl font-regular animate-pulse">loading...</div>
        <style jsx global>{`
          .spinner {
            background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
            width: 100px;
            height: 100px;
            animation: spinning82341 1.7s linear infinite;
            text-align: center;
            border-radius: 50px;
            filter: blur(1px);
            box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
          }
          .spinner1 {
            background-color: rgb(36, 36, 36);
            width: 100px;
            height: 100px;
            border-radius: 50px;
            filter: blur(10px);
          }
          @keyframes spinning82341 {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}
