import { FC, PropsWithChildren } from "react";
import "@/app/globals.css";
import StickyNavBar from "@/components/layout/stickyNavBar";
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: "它像一颗",
  description: "观测记录",
};

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <body>
        <StickyNavBar></StickyNavBar>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
