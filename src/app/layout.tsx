import { Metadata } from "next";
import "./styles/globals.css";

import Footer from "./@core/layout/Footer";

export const metadata: Metadata = {
  title: "YallaMotor",
  description: "Find new & used cars for sale in UAE",
  openGraph: {
    title: 'YallaMotor',
    description: 'Find new & used cars for sale in UAE',
    url: 'https://your-site-url.com',
    siteName: 'YallaMotor',
    images: [
      {
        url: 'https://your-site-url.com/logo.png',
        width: 800,
        height: 600,
        alt: 'YallaMotor Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="antialiased" suppressHydrationWarning={true}>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </body>
  </html>
  );
}
