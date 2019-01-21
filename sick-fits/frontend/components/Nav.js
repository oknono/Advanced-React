import Link from "next/link";

const Nav = () => (
  <div>
    <Link href="/sell">
      <a>A link to Sell page</a>
    </Link>
    <Link href="/index">
      <a>Take me hooooome</a>
    </Link>
  </div>
);

export default Nav;
