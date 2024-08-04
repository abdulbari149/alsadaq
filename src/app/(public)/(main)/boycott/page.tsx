import BoycottPage from "@/components/screens/Boycott";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Boycott Products | Al Sadaq'
}

const page = () => {
  return <BoycottPage />
}

export default page;