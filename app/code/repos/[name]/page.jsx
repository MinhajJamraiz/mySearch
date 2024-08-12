import React from "react";
import Repo from "./../../../components/repo";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import RepoDirs from "./../../../components/repoDirs";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
      <Link className='btn btn-back' href='/code/repos'>
        <FaArrowLeft className='arrow--back' /> Go Back
      </Link>
      <Suspense fallback={<div>Loading Repositories ...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories ...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
