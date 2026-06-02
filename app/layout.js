import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "The Gift Card Cafe — Sell Gift Cards & Daily Deals in 5 Minutes",
  description:
    "The #1 gift card platform for spas, salons, restaurants and service businesses. Free to start, set up in 5 minutes, keep 90%+ of your revenue.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-coffee-900">
        {children}
      </body>
    </html>
  );
}
