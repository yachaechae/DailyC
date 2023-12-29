import { supabase } from "@/lib/supabase-config";

export async function getAllPosts() {
  const { data: posts, error } = await supabase.from("posts").select();

  if (error) console.log("Error creating a posts data", error);
  // console.log("posts data created successfully", posts);
  return posts;
}

export async function getEventByPostId(id: string) {
  const { data, error } = await supabase.from("posts").select().eq("id", id);

  if (error) console.log("Error creating a posts data", error);
  // console.log("posts data created successfully", data);
  return data;
}
