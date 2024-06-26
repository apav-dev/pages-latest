import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import {
  AnalyticsScopeProvider,
  HoursStatus,
  Image,
  Link,
} from "@yext/pages-components";

import { Main } from "../layouts/Main";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import { FeaturedBlog } from "../components/FeaturedBlog";
import { Home as HomeEntityType } from "../types/autogen";

export const config: TemplateConfig = {
  stream: {
    $id: "home",
    localization: { locales: ["en"] },
    fields: [
      "name",
      "slug",
      "blogStarter_coverPhoto",
      "blogStarter_featuredBlogs.id",
      "blogStarter_featuredBlogs.name",
      "blogStarter_featuredBlogs.slug",
      "blogStarter_featuredBlogs.blogStarter_coverPhoto",
      "blogStarter_featuredBlogs.blogStarter_description",
      "blogStarter_featuredBlogs.datePosted",
      "blogStarter_featuredBlogs.blogStarter_blogAuthor",
      "blogStarter_featuredBlogs.c_premium",
    ],
    filter: { entityIds: ["blogStarter_home"] },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: "Blog Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: "/liberty.ico",
        },
      },
    ],
  };
};

const Home: Template<TemplateRenderProps<HomeEntityType>> = (data) => {
  const { document } = data;

  return (
    <Main templateData={data}>
      <AnalyticsScopeProvider name={"header"}>
        <Header logo={document._site?.logo} />
      </AnalyticsScopeProvider>
      <main className="mx-auto max-w-5xl px-6 pb-52">
        <div className="flex flex-col gap-8 my-12">
          {document.blogStarter_coverPhoto && (
            <Image image={document.blogStarter_coverPhoto} />
          )}
          <h1 className="text-gray-900 font-bold text-4xl">
            Featured Articles
          </h1>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {document.blogStarter_featuredBlogs.map((blog) => (
              <FeaturedBlog blog={blog} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </Main>
  );
};

export default Home;
