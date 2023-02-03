import React from "react";
import footerStyles from "./footer.module.css";
import Link from "@docusaurus/Link";

const linksList = [
  {
    title: "Docs",
    items: [
      {
        label: "Quick Start",
        href: "/docs/Learn/Quickstart/Get an API Key",
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        label: "Twitter",
        href: "https://twitter.com/aresearchgroup",
      },
      {
        label: "Join Slack",
        href: "https://filecoin.io/slack",
      },
      {
        label: "Stack Overflow",
        href: "https://stackoverflow.com/questions/tagged/ipfs",
      },
      {
        label: "Feedback",
        href: "/feedback",
      },
    ],
  },
  {
    title: "More",
    items: [
      {
        label: "GitHub",
        href: "https://github.com/pin-storage/",
      },
      {
        label: "Documentation Source Code",
        href: "https://github.com/pin-storage/estuary-docusaurus",
      },
    ],
  },
];

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.items}>
        {linksList.map((linkItem, index) => (
          <ul key={index}>
            <h3>{linkItem.title}</h3>
            {linkItem.items.map((item, ind) => (
              <Link key={ind} href={item.href}>
                <li>
                  <p>{item.label}</p>
                </li>
              </Link>
            ))}
          </ul>
        ))}
        <ul>
          <li>
            <img
              src="/img/icons/horizontal_gradient.png"
              className={footerStyles.logo}
            />
          </li>
          <li>
            <div className={footerStyles.icons}>
              <span>Follow Us</span>
              <a target="_blank" href="https://twitter.com/aresearchgroup">
                <div className={footerStyles.twitter} />
              </a>
              <a target="_blank" href="https://filecoin.io/slack">
                <div className={footerStyles.slack} />
              </a>

              <a
                target="_blank"
                href="https://stackoverflow.com/questions/tagged/ipfs"
              >
                <div className={footerStyles.stack} />
              </a>
            </div>
          </li>
        </ul>
      </div>
      {copyright && (
        <div
          style={{
            textAlign: "center",
            width: "100%",
          }}
          className="footer__bottom text--center"
        >
          {copyright}
        </div>
      )}
    </footer>
  );
}
