import SubjectListItem from "./SubjectListItem";

export default function SubjectList(props) {
  const { entries } = props;

  const parsedEntries = Object.keys(entries).map((subject) => (
    <SubjectListItem key={subject} subject={subject} entries={entries[subject]} />
  ));

  return (
    <section>
      <h1>View all entries</h1>
      {parsedEntries}
    </section>
  );
}
