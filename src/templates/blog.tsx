import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";
import { Locations as LocationsType } from "../types/autogen";

export const config: TemplateConfig = {
  stream: {
    $id: "blog",
    fields: ["id", "name", "slug"],
    filter: {
      entityTypes: ["blogStarter_blog"],
    },
    localization: {
      locales: ["en"],
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: "/locations/assets/yext-favicon.ico",
        },
      },
    ],
  };
};

const Blog: Template<TemplateRenderProps<LocationsType>> = ({ document }) => {
  const { name } = document;

  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default Blog;
