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
  create_at: Date;
  update_at: Date | null;
  writedId: string;
  writedName: string;
  tags: string[];
  mainImg: string;
  subImg: string[];
};

declare type writeUserType = {
  id: string | undefined;
  email: string | undefined;
};
