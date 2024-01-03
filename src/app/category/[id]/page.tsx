"use client";
import { getEventByPost } from "@/api/write";
import BasicCard from "@/components/main/card/BasicCard";
import Nav from "@/components/main/nav/Nav";
import { Button, Menu, MenuItem } from "@mui/material";
import { Jua } from "next/font/google";
import React, { useEffect, useState } from "react";
const jua = Jua({ weight: "400", subsets: ["latin"] });

export default function CategoryDetail({ params }: { params?: any }) {
  const [postData, setPostData] = useState<postType[]>([]);
  const [tagList, setTagList] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>("태그");
  const [selectedTagList, setSelectedTagList] = useState<postType[]>(postData);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    async function fetchData(params: { id: string }) {
      try {
        const data: postType[] = await getEventByPost("gender", params.id);
        setPostData(data);
      } catch (error) {
        return (
          <>
            <div>게시글을 불러오던 중 에러가 발생했습니다</div>
          </>
        );
      }
    }
    fetchData(params);
  }, []);

  useEffect(() => {
    let tags: string[] = [];
    postData.forEach((post) => {
      tags = tags.concat(post.tags);
    });
    setTagList(tags);
    if (selectedTag === "태그") {
      setSelectedTagList(postData);
    }
  }, [postData]);

  const tagSet = new Set(tagList);

  const tagArr = Array.from(tagSet);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const tagSearch = () => {
    if (selectedTag) {
      const filteredPosts = postData.filter(
        (post) => post.tags?.includes(selectedTag),
      );
      setSelectedTagList(filteredPosts);
    }
  };

  return (
    <>
      <Nav />
      <div className="container mt-[5rem] flex min-h-[75dvh] flex-col">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className={`${jua.className} w-fit p-0 text-4xl text-black`}
        >
          {selectedTag}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {tagArr.map((tag, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                handleClose();
                setSelectedTag(tag);
                tagSearch();
              }}
            >
              {tag}
            </MenuItem>
          ))}
        </Menu>
        <div className="mt-8 flex flex-wrap gap-16">
          {selectedTagList.map((post, index) => (
            <BasicCard data={post} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
