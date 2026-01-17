import Link from "next/link";

export default function Pricing() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Pricing</h1>
      <p>Pay $39 for the full assessment report.</p>
      <Link href="/assessment">
        <a style={{ color: "blue" }}>Start Assessment</a>
      </Link>
    </div>
  );
}
