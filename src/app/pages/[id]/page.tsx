import React, { FunctionComponent } from "react";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Intro from "@/components/Intro";
import { metaData } from "@/data/meta_data";
import { checkFile, getFileNames } from "@/utils/function";

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  return metaData(id)
}

export async function generateStaticParams() {
  const files: any[] = await getFileNames();

  return files.map((file: any) => ({
    id: file.id,
  }));
}

const Page: FunctionComponent<PageProps> = async ({ params: { id } }) => {
  const path = await checkFile(id);

  if (!path) {
    notFound();
  }

  const DynamicPage = dynamic(() => import(`../../../data/${path}`),  {ssr: false});
  // {
  //   loading: () => <p>Loading...</p>,
  // },
  return (
    <div>
      <Nav />
      {/* <Intro /> */}
      <DynamicPage />
      <Footer />
    </div>
  );
};

export default Page;
