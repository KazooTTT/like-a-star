import { FC, PropsWithChildren } from "react";
import "./globals.css";
import StickyNavBar from "@/components/layout/stickyNavBar";

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
