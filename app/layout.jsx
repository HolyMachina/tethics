import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Image from 'next/image'
 
export const metadata = {
 title: {
    default: 'Tethics',
    template: '%s | Tethics'
  },
  generator: 'Next.js',
  applicationName: 'Nextra',
  authors: [{name: "Josephine Troiani"},{name: "Josie Troiani"}],
  openGraph: {
    siteName: 'Josie\'s Blog',
    locale: 'en_US',
    image: '',
    type: 'website'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
 
const navbar = (
  <Navbar
    logo={
    <>
      <span><b>Tethics</b><br />A look at ethics in tech.</span>
    </>
    }
    projectLink='https://lgbtqia.space/@holymachina'
    projectIcon={
      <svg width="24" height="24">
      <image width="24" height="24" href="/images/mastodon-logo.png" alt="Mastodon Logo" />
      </svg>
    }
    chatLink='https://bsky.app/profile/lastcontact.space'
    chatIcon={
      <svg width="24" height="24">
      <image width="24" height="24" href="/images/bluesky-logo.png" alt="BlueSky Logo" />
      </svg>
    }
  />
)

const footer = (
  <Footer>
    <span suppressHydrationWarning>
        Hit me up on <a rel="me" href="https://lgbtqia.space/@holymachina">Mastodon</a>, <a href="https://bsky.app/profile/lastcontact.space" rel="nofollow">Bluesky</a>, or <a href="https://www.linkedin.com/in/jotroian" rel="nofollow">LinkedIn</a>.
      <br />
        <a href="https://last-contact.net/">Tethics</a> &#169; {new Date().getFullYear()} by <a href="https://last-contact.net/about/aboutjosie">Josephine Troiani</a> is licensed under Creative Commons.
      <br />
        <a rel="nofollow" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0<Image width={80} height={15} src='/images/byncsa-80x15.png' alt="Official CC BY-NC-SA press kit banner." rel="nofollow" /></a>
      </span>
  </Footer>
)
 
export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{hue: 351, saturation: 100, lightness: {light: 32, dark: 76}}}>
        {
        /* Your additional tags should be passed as `children` of `<Head>` element */
        <meta name="rating" content="14 years" />
        }
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/HolyMachina/tethics/tree/main"
          editLink={null}
          feedback={
            {
              content:"Website error or typographical error? Yell at Josie here."
            }
          }
          sidebar={
            {
              defaultMenuCollapseLevel: 1,
              autoCollapse: true
            }
          }
          footer={footer}
          navigation={false}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}