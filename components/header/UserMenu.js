import Link from "next/link";
import styles from "./styles.module.scss";

export default function UserMenu({ loggedIn }) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to the Shop</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <img
            src='https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=826&t=st=1675771783~exp=1675772383~hmac=30f5161f06a57fd3cfa8c60020d679067eadebff431b887a536be55f66478814'
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>MrAltun</h3>
            <span>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
        </div>
      )}
      <ul>
        <li>
          <Link href='/profile'>Account</Link>
        </li>
        <li>
          <Link href='/profile/orders'>My Orders</Link>
        </li>
        <li>
          <Link href='/profile/messages'>Message Center</Link>
        </li>
        <li>
          <Link href='/profile/address'>Address</Link>
        </li>
        <li>
          <Link href='/profile/wishlist'>Wishlist</Link>
        </li>
        <li>
          <Link href='/'></Link>
        </li>
      </ul>
    </div>
  );
}
