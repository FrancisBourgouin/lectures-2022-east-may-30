export default function SubjectListItem(props) {
  const { subject, entries } = props;

  const parsedEntries = entries.map((entry) => <li key={entry.id}>{entry.content}</li>);
  return (
    <article>
      <h1>{subject}</h1>
      <ul>{parsedEntries}</ul>
    </article>
  );
}
