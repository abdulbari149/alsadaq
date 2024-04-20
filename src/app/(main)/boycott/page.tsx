import BoycottPage from "@/components/screens/boycott";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Boycott Products | Al Sadaq'
}

const page = () => {
  return <BoycottPage />
}

export default page;