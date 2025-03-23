import './globals.css'

export const metadata = {
  title: 'The REACH Report',
  description: 'The latest insights in marketing, social media, and the creator economy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script 
          data-beehiiv-publication-id="pub_32491422-c94a-40b2-baec-c90cbb498271"
          src="https://embed.beehiiv.com/subscribe.js"
          async
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}