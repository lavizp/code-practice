// import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React, { useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { useRouter } from "next/router";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";
import Logout from "../ui/Buttons/Logout";
import { authModalState } from "@/atoms/authModalAtom";
import Timer from "./Timer";

type TopbarProps = {
  problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
  // const [user] = useAuthState(auth);
  const [user, setUser] = useState<boolean>(false);
  const setAuthModalState = useSetRecoilState(authModalState);
  const router = useRouter();

  const handleProblemChange = (isForward: boolean) => {
    const { order } = problems[router.query.pid as string] as Problem;
    const direction = isForward ? 1 : -1;
    const nextProblemOrder = order + direction;
    const nextProblemKey = Object.keys(problems).find(
      (key) => problems[key].order === nextProblemOrder
    );

    if (isForward && !nextProblemKey) {
      const firstProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === 1
      );
      router.push(`/problems/${firstProblemKey}`);
    } else if (!isForward && !nextProblemKey) {
      const lastProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === Object.keys(problems).length
      );
      router.push(`/problems/${lastProblemKey}`);
    } else {
      router.push(`/problems/${nextProblemKey}`);
    }
  };

  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div
        className={`flex w-full items-center justify-between ${
          !problemPage ? "max-w-[1200px] mx-auto" : ""
        }`}
      >
        <Link href="/" className="h-[22px] flex-1">
          <Image
            src="data:image/jpeg;base64,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"
            alt="Logo"
            height={30}
            width={30}
          />
        </Link>

        {problemPage && (
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              onClick={() => handleProblemChange(false)}
            >
              <FaChevronLeft />
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer"
            >
              <div>
                <BsList />
              </div>
              <p>Problem List</p>
            </Link>
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              onClick={() => handleProblemChange(true)}
            >
              <FaChevronRight />
            </div>
          </div>
        )}

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div>
            <a
              href="https://www.buymeacoffee.com/burakorkmezz"
              target="_blank"
              rel="noreferrer"
              className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
            >
              Premium
            </a>
          </div>
          {!user && (
            <Link
              href="/auth"
              onClick={() =>
                setAuthModalState((prev) => ({
                  ...prev,
                  isOpen: true,
                  type: "login",
                }))
              }
            >
              <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded ">
                Sign In
              </button>
            </Link>
          )}
          {user && problemPage && <Timer />}
          {user && (
            <div className="cursor-pointer group relative">
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div
                className="absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg
								z-40 group-hover:scale-100 scale-0
								transition-all duration-300 ease-in-out"
              >
                {/* TODO-MUST: User.email here */}
                <p className="text-sm">{"user-email-here"}</p>
              </div>
            </div>
          )}
          {user && <Logout />}
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
