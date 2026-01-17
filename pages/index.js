import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>BlosmBox</h1>
      <p><b>Relationship Assessments…</b> How many boxes do you tick?</p>
      <Link href="/pricing">
        <a style={{ color: "blue" }}>Start Assessment</a>
      </Link>
    </div>
  );
}
