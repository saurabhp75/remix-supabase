import { useLoaderData } from "@remix-run/react";
import supabase from "utils/supabase";
import type { LoaderFunctionArgs } from "@remix-run/node";

// eslint-disable-next-line no-empty-pattern
export const loader = async ({}: LoaderFunctionArgs) => {
  const { data } = await supabase.from("messages").select();
  return { messages: data ?? [] };
};

export default function Index() {
  const { messages } = useLoaderData<typeof loader>();
  return <pre>{JSON.stringify(messages, null, 2)}</pre>;
}
