import { redirect } from "next/navigation";

/** The OSS app is the editor; the marketing site lives in DrawCMS Cloud. */
export default function Home() {
  redirect("/editor");
}
