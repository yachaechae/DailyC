declare type inputsType = {
  id: number;
  gender: string;
  height: string;
  title: string;
  content: string;
};

declare type postType = {
  id: number;
  gender: string;
  height: string;
  title: string;
  content: string;
  create_at: string;
  update_at: string | null;
  writedId: string;
  writedName: string;
  tags: string[];
  mainImg: string;
  subImg: string[];
  likes: string[];
  bookmarks: string[];
};

declare type writeUserType = {
  id: string | undefined;
  email: string | undefined;
};
