import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
import CatalogList from "~/catalog/CatalogList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const url =
    "http://localhost:5222/api/catalog/items?PageSize=10&PageIndex=0&name=&type=1&brand=1&api-version=2.0";
  const response = await fetch(url);
  const result = await response.json();
  console.log("RES:");
  console.log(result);
  return result;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <CatalogList count={loaderData.count} />;
}
