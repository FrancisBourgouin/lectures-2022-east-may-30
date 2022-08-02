import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const { githubData } = props;

  const parsedCommits = githubData.map((commit) => (
    <CommitListItem message={commit.commit.message} />
  ));
  return <ul>{parsedCommits}</ul>;
}
