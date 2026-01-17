export default function Report() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Your Report</h1>
      <p>This is where the printable report will appear.</p>
      <p><b>Note:</b> This is a free version. Report content is static.</p>
      <p style={{ marginTop: "20px" }}>
        <button onClick={() => window.print()}>Print Report</button>
      </p>
    </div>
  );
}
