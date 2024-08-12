import React from "react";
import Link from "next/link";

async function fetchRepoContents(name) {
  const response = await fetch(
    `https://api.github.com/repos/MinhajJamraiz/${name}/contents`,
    { next: { revalidate: 60 } }
  );
  const repoContents = response.json();
  return repoContents;
}
const RepoDirs = async ({ name }) => {
  let found = true;
  const repoContents = await fetchRepoContents(name);

  if (repoContents.status) {
    found = false;
    return <>{repoContents.message}</>;
  }
  const dirs = repoContents.filter((content) => content.type === "dir");

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {found &&
          dirs.map((dir) => (
            <li key={dir.path}>
              <Link href={dir._links.html} target='_blank'>
                {dir.path}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default RepoDirs;
