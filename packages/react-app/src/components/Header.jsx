import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/MartinYeung5/hackathon_project" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="Goal Diggers"
        //subTitle=""
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
