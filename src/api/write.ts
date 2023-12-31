import { supabase } from "@/lib/supabase-config";

export async function getAllPosts(): Promise<postType[]> {
	const { data: posts, error } = await supabase.from("posts").select().returns<postType[]>();

	if (error || null) {
		console.log("Error creating a posts data", error);
		throw new Error("error while fetching posts data");
	}
	return posts;
}

export async function getEventByPost(item: string, id: string) {
	const { data, error } = await supabase.from("posts").select().eq(item, id);

	if (error) console.log("Error creating a posts data", error);
	return data;
}

export async function getEventByPostDelete(item: string, id: string) {
	const { data, error } = await supabase.from("posts").delete().eq(item, id);

	if (error) console.log("Error delete a posts data", error);
	else return "성공";
}
