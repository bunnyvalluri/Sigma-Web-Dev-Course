/**
 * ==========================================================================
 * Sigma Web Development Course - Video 135
 * Topic: Styling Strategies in Next.js
 * File: page.js
 * 
 * Description:
 *   Exploring CSS Modules (.module.css), Tailwind CSS, and global styles in Next.js applications.
 * ==========================================================================
 */
import Image from "next/image";
import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <div className={styles.red}>
      Hey
    </div>
  );
}
