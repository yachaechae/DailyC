import { supabase } from "@/lib/supabase-config";

export async function getAllPosts() {
  const { data: posts, error } = await supabase.from("posts").select();

  if (error) console.log("Error creating a posts data", error);
  return posts;
}

export async function getEventByPost(item: string, id: string) {
  const { data, error } = await supabase.from("posts").select().eq(item, id);

  if (error) console.log("Error creating a posts data", error);
  return data;
}
