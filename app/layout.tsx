import { FC, PropsWithChildren } from "react";
import "./globals.css";

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
