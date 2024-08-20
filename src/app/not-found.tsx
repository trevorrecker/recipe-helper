import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        width: "300px",
        padding: "2rem",
        margin: "200px auto",
        textAlign: "center"
      }}
    >
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
