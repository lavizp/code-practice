import axiosInstance from "@/apiconfig/axiosInstance";
import ProblemsTable from "@/components/ProblemsTable";
import Topbar from "@/components/common/Topbar";
import HomePageLoading from "@/components/skeletons/HomePageLoading";
import { useState } from "react";
import { useQuery } from "react-query";

export default function Home() {
  const { data: problems, status: problemLoadingStatus } = useQuery(
    "problems",
    async () => {
      const res = await axiosInstance.get("problem/");
      return res.data;
    }
  );
  return (
    <main className="bg-dark-layer-2 min-h-screen">
      <Topbar />
      <h1
        className="text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
					uppercase mt-10 mb-5"
      >
        &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
      </h1>
      <div className="relative overflow-x-auto mx-auto px-6 pb-10">
        {problemLoadingStatus == "loading" && (
          <div className="max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse">
            {[...Array(10)].map((_, idx) => (
              <HomePageLoading key={idx} />
            ))}
          </div>
        )}
        <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
          {problemLoadingStatus == "success" && (
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b ">
              <tr>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Difficulty
                </th>

                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Solution
                </th>
              </tr>
            </thead>
          )}
          <ProblemsTable problems={problems} />
        </table>
      </div>
    </main>
  );
}
