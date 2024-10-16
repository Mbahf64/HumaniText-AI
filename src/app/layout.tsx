import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HumaniText AI",
  description: "Humanize AI text",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div
          style={{ position: "relative", width: "100%", minHeight: "100vh" }}
        >
          {/* Particles as background */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              minHeight: "100vh",
              zIndex: -1, // Behind the content
              pointerEvents: "none", // Makes sure particles don’t interfere with user interaction
            }}
          >
           <img src="./bg.png" alt="bg" className="h-screen w-screen" />
          </div>

          {/* Children content */}
          <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
        </div>
      </body>
    </html>
  );
}
