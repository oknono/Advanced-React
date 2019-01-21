import Link from "next/link";

const Home = props => (
  <div>
    <p>This is the index page</p>
    <Link href="/sell">
      <a>A link to Sell page</a>
    </Link>
  </div>
);

export default Home;
