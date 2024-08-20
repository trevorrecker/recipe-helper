"use client";

import Link from "next/link";
import styles from "./styles.module.scss";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Recipe Helper</h1>

      <div className="secondary">
        Development Preview v{process.env.NEXT_PUBLIC_PACKAGE_VERSION}
      </div>
      <div className="secondary">{process.env.NEXT_PUBLIC_ENV_NAME}</div>
      <div style={{ marginTop: "2rem" }}>
        <Link href="/login">Log In</Link>
      </div>
    </div>
  );
}
