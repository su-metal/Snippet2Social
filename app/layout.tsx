// app/layout.tsx
import React from "react";
import "./globals.css";
import { Providers } from "../components/Providers";
import { DevTools } from "../components/DevTools";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen">
        <Providers>
          {children}
          <DevTools />
        </Providers>
      </body>
    </html>
  );
}
