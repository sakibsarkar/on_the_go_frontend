import AboutUsView from "@/views/AboutUsView";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About us - On the go",
  description: "Travel media",
};
const page = () => {
  return <AboutUsView />;
};

export default page;
