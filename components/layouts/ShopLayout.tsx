import Head from "next/head"
import { Navbar } from "@/components/ui"

interface ShopLayoutProps {
  title: string
  pageDescription: string
  imageFullUrl?: string
  children?: React.ReactNode
}

const ShopLayout = ({ children, title, pageDescription, imageFullUrl }:ShopLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />
        
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {
          imageFullUrl
          ? (
            <meta name="og:image" content={imageFullUrl} />
          )
          : ''
        }

      </Head>

      <nav>
        <Navbar />
      </nav>

      {/* TODO: Sidebar */}

      <main style={{
        margin: '80px auto',
        maxWidth: '1440px',
        padding: '0px 30px'
      }}>
        {children}
      </main>

      {/* Footer */}
      <footer>
        {/* TODO: mi custom footer */}
      </footer>
    </>
  )
}

export default ShopLayout