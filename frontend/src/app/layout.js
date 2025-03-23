import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
});

export const metadata = {
  title: 'The REACH Report',
  description: 'The latest insights in marketing, social media, and the creator economy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d, s, id, a, h) {
                w.beehiivObject = h;
                w[h] = w[h] || function() {
                  (w[h].q = w[h].q || []).push(arguments)
                };
                w[h].l = 1 * new Date();
                a = d.createElement(s);
                a.async = 1;
                a.src = id;
                document.head.appendChild(a);
              })(window, document, 'script', 'https://dash.beehiiv.com/v1/api.js', {}, 'beehiiv');
            `
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}