// Big two-tone statement headline used across the page:
// a solid-ink lead sentence followed by a muted continuation.
export default function SectionStatement({ lead, trail, id }) {
  return (
    <h2 className="statement" id={id}>
      <span className="statement__lead">{lead}</span>{" "}
      <span className="statement__trail">{trail}</span>
    </h2>
  );
}
