import GitHubIcon from "./Icons/GitHubIcon";
import LinkedInIcon from "./Icons/LinkedInIcon";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <div
      className={`${
        darkMode ? "dark" : "light"
      } sticky inset-x-0 bottom-5 space-x-2 flex justify-center items-center `}
    >
      <h1 className="font-medium text-sm text-neutral-800 dark:text-neutral-200">
        © 2023 przezsamoha
      </h1>
      <div className="cursor-pointer flex items-center">
        <a
          type="button"
          href="https://github.com/przezsamoha"
          target={"_blank"}
          rel="noreferrer"
          className=" text-neutral-800 dark:text-neutral-200"
        >
          <GitHubIcon />
        </a>
      </div>
      <div className="cursor-pointer flex items-center">
        <a
          type="button"
          href="https://www.linkedin.com/in/magdalena-horwat/"
          target={"_blank"}
          rel="noreferrer"
          className=" text-neutral-800 dark:text-neutral-200"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}
