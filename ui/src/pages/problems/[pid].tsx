import axiosInstance from "@/apiconfig/axiosInstance";
import Workspace from "@/components/Workspace/Workspace";
import Topbar from "@/components/common/Topbar";
// import { problems } from "@/utils/problems/index";
import { IProblem } from "@/utils/types/problem";
import React from "react";
import { useQueries, useQuery } from "react-query";

type ProblemPageProps = {
  problem: IProblem;
};

const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) => {
  return (
    <div>
      <Topbar problemPage />
      <Workspace problem={problem} />
    </div>
  );
};
export default ProblemPage;

// fetch the local data
//  SSG
// getStaticPaths => it create the dynamic routes
export async function getStaticPaths() {
  let res = await axiosInstance.get("/problem");
  let problems: IProblem[] = res.data;
  const paths = problems.map((item: IProblem) => ({
    params: { pid: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

// getStaticProps => it fetch the data

export async function getStaticProps({ params }: { params: { pid: string } }) {
  const { pid } = params;
  let res = await axiosInstance.get(`/problem/${pid}/`);
  let problem: IProblem = res.data;
  if (!problem) {
    return {
      notFound: true,
    };
  }
  problem.handlerFunction = problem.handlerFunction;
  return {
    props: {
      problem,
    },
  };
}
