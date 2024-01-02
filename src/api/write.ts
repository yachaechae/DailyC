import { supabase } from "@/lib/supabase-config";

export async function getAllPosts(): Promise<postType[]> {
  const { data: posts, error } = await supabase
    .from("posts")
    .select()
    .returns<postType[]>();

  if (error || null) {
    console.log("Error creating a posts data", error);
    throw new Error("error while fetching posts data");
  }
  return posts;
}

export async function getEventByPost(
  item: string,
  id: number
): Promise<postType[]> {
  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq(item, id)
    .returns<postType[]>();

  if (error || null) {
    console.log("Error creating a posts data", error);
    throw new Error("error while fetching posts data");
  }
  return data;
}

export async function getEventByPostDelete(item: string, id: number) {
  const { data, error } = await supabase.from("posts").delete().eq(item, id);

  if (error) console.log("Error delete a posts data", error);
  else return "성공";
}

// 좋아요, 북마크 기능
// 좋아요, 북마크 해당 포스트 가져오기
export async function getEventByTable(table: string, item: string, id: number) {
  const { data, error } = await supabase.from(table).select().eq(item, id);

  if (error) console.log("Error table data", error);
  return data;
}

// 좋아요, 북마크 추가
export async function getEventByTableAdd(
  table: string,
  post_id: number,
  user_id: string
) {
  const { data, error } = await supabase
    .from(table)
    .insert([
      {
        user_id,
        post_id,
      },
    ])
    .select();

  if (error) {
    console.log("Error add a table data", error);
    return "실패";
  } else return data;
}

// 좋아요, 북마크 삭제
export async function getEventByTableDelete(
  table: string,
  item: string,
  id: number
) {
  const { data, error } = await supabase.from(table).delete().eq(item, id);

  if (error) {
    console.log("Error delete a table data", error);
    return "실패";
  } else return "성공";
}

// // 좋아요, 북마크 post 정보
export async function getEventByTableFetch(
  tableName: string,
  selectedItem: string,
  item: string,
  id: number
) {
  const { data, error } = await supabase
    .from(tableName)
    .select(selectedItem)
    .eq(item, id);

  if (error) {
    console.log("Error update a table data", error);
    return error;
  } else return data;
}

// 좋아요 post에 수정
export async function getEventByTableLikesUpdate(
  tableName: string,
  updateData: string[],
  item: string,
  id: number
) {
  const { data, error } = await supabase
    .from(tableName)
    .update({ likes: updateData })
    .eq(item, id)
    .select();

  if (error) {
    console.log("Error update a table data", error);
    return "실패";
  } else return data;
}

// 북마크 post에 수정
export async function getEventByTableBookmarksUpdate(
  tableName: string,
  updateData: string[],
  item: string,
  id: number
) {
  const { data, error } = await supabase
    .from(tableName)
    .update({ bookmarks: updateData })
    .eq(item, id)
    .select();

  if (error) {
    console.log("Error update a table data", error);
    return "실패";
  } else return data;
}
