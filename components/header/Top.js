import { useState } from "react";
import Link from "next/link";
import UserMenu from "./UserMenu";
import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";

export default function Top() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <img
              src='https://www.seekpng.com/png/full/1010-10107808_-soloveika-free-christmas-train.png'
              alt=''
            />
            <span>Turkiye / USD</span>
          </li>
          <li>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <BsSuitHeart />
            <Link href='/profile/wishlist'>
              <span>Wishlist</span>
            </Link>
          </li>
          <li>
            {loggedIn ? (
              <li>
                <div className={styles.flex}>
                  <img src='https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=826&t=st=1675771783~exp=1675772383~hmac=30f5161f06a57fd3cfa8c60020d679067eadebff431b887a536be55f66478814' />
                  <span>Name</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            <UserMenu />
          </li>
        </ul>
      </div>
    </div>
  );
}
