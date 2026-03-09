import { useEffect, useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Home } from "@/pages/Home";
import { CaseStudy } from "@/pages/CaseStudy";
import { StoryPage } from "@/pages/Story";
import { FAQ } from "@/pages/FAQ";
import { Impressum } from "@/pages/Impressum";
import { Datenschutz } from "@/pages/Datenschutz";

function getPage() {
  return window.location.hash || "#/";
}

export function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const onHash = () => {
      setPage(getPage());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  let content;
  switch (page) {
    case "#/story":
      content = <StoryPage />;
      break;
    case "#/case-study":
      content = <CaseStudy />;
      break;
    case "#/faq":
      content = <FAQ />;
      break;
    case "#/impressum":
      content = <Impressum />;
      break;
    case "#/datenschutz":
      content = <Datenschutz />;
      break;
    default:
      content = <Home />;
      break;
  }

  return <PageLayout>{content}</PageLayout>;
}
