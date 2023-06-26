import React from "react";
import { useNavigate, useParams } from "react-router-dom";

// 프로필에서 사용 할 데이터
const profileData = {
  donghun: {
    name: "정동훈",
    description: "Safehomes @ Inc. 사람을 좋아하는 회사",
  },
  gildong: {
    name: "홍길동",
    description: "동화책 주인공입니다.",
  },
};

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const profile = profileData[username];

  //   console.log("useparam = ", useParams());
  //   console.log("navigate = ", navigate);

  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <div onClick={() => navigate(-1)}>뒤로가기</div>
    </div>
  );
};

export default Profile;
