import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>HOME </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/posts">
              <a>BLOG </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>ABOUT </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>CONTACT </a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        <p>WebSite | Next.js</p>
      </footer>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Next js || WebSite",
  description: "Descripcion de mi sitio web",
};
