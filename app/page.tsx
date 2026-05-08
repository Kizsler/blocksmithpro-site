import { RECOVERED_HOME_HTML } from "./_recovered-home";

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: RECOVERED_HOME_HTML }} />;
}
