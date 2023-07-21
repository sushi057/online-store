import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href={"/"}>OnlineStore</Link>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/products"}>All Products</Link>
        <Link href={"/categories"}>Categories</Link>
        <Link href={"/account"}>Account</Link>
        <Link href={"/cart"}>Cart (0)</Link>
      </nav>
    </header>
  );
}

export default Header;
