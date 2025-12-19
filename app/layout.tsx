
import React from "react";
import "./globals.css";
import { Providers } from "../components/Providers";
import { DevTools } from "../components/DevTools";

/**
 * RootLayout represents the standard Next.js App Router layout.
 * It manages the global providers and shared UI elements like DevTools.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="antialiased bg-slate-50 text-slate-900 min-h-screen">
      <Providers>
        {children}
        <DevTools />
      </Providers>
    </div>
  );
}
