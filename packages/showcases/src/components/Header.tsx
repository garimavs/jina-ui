import React from "react";
import Image from "next/image";
import logo from "../images/logo.svg";
import slack from "../images/slack.svg";
import github from "../images/github.svg";

type HeaderLinkProps = {
  url: string;
  children: React.ReactNode;
  icon: React.ReactNode;
};

const HeaderItem = ({ icon, children, url }: HeaderLinkProps) => (
  <a
    className="flex flex-row items-center ml-8"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
    <div className="ml-3">{children}</div>
  </a>
);

const linkItems = [
  {
    url: "https://get.jina.ai",
    text: "get.jina.ai",
    icon: <Image src={github} alt="Github" />,
  },
  {
    url: "https://slack.jina.ai",
    text: "slack.jina.ai",
    icon: <Image src={slack} alt="Slack" />,
  },
];

export const Header = () => {
  return (
    <div className="border-b-2 border-gray-100 sticky px-8 py-4 flex flex-row items-center">
      <div className="flex-1">
        <Image src={logo} alt="Jina" />
      </div>
      {linkItems.map(({ url, icon, text }, idx) => (
        <HeaderItem icon={icon} url={url} key={idx}>
          {text}
        </HeaderItem>
      ))}
    </div>
  );
};