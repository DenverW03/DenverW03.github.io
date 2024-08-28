import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-toggle/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "inclinedev",
  description: "portfolio website for inclindev/Denver Whiteley",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</body>
    </html>
  );
}
