import { AnalyticsProvider } from "@yext/pages-components";
import { TemplateProps } from "@yext/pages/*";

export interface MainProps {
  children?: React.ReactNode;
  templateData: TemplateProps;
}

export const Main = ({ children, templateData }: MainProps) => {
  return (
    <AnalyticsProvider
      apiKey={YEXT_PUBLIC_EVENTS_API_KEY}
      currency="USD"
      templateData={templateData}
      productionDomains={[YEXT_PUBLIC_PROD_DOMAIN]}
      enableDebugging={true}
    >
      <div className="relative min-h-screen">{children}</div>
    </AnalyticsProvider>
  );
};
