# Introduction
##DailyC : 오늘의 외출 코디 공유
유행하는 코디를 확인할 수 있으며, 날씨에 맞는 원하는 테마별 코디를 확인할 수 있습니다
친구들간 코디 공유를 통해 서로 안겹치게 옷을 입을 수 있습니다

# Duration
2023.12.26 ~ 2024.01.03

# Development Environment
- NextJS 14
- typeScript
- tailwind CSS
- MUI CSS

# Data Manamgement
- Recoil
- React-query v5
- next
- supabase

# Features
- 회원가입과 로그인
supabase Authentication을 이용해 회원가입과 로그인 구현
- 마이 페이지
내가 작성한 글, 북마크한 글, 좋아요한 글을 supabase database를 통해 가져와 보여줍니다
프로필 수정은 supabase Authentication으로 닉네임과 유저 이미지를 교체 구현
- 인기 카드
좋아요가 높은 순으로해서 데이터를 정리해 구현
- 카테고리
작성자가 글을 쓸 때 남긴 해시태그별 코디 리스트 정리 화면
- 코디 상세페이지
코디 카드 작성자의 상세 글 내용이 나와있는 정보 페이지
해당 게시물에서 좋아요나 북마크 기능들을 보여줄 수 있다

# Distribution
- Vercel
- Glitch

# Deployment Address
- https://daily-c-zeta.vercel.app/main
