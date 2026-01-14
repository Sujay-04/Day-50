const reels = [
  {
    username: "sujay.codes",
    likeCount: 1245,
    isLiked: true,
    commentCount: 98,
    caption: "Day 12 of learning MERN 🚀 Consistency > Motivation",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768368830/vedio7_1_gn6vmw.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/11.jpg",
    shareCount: 42,
    isFollowed: true
  },
  {
    username: "dev_diaries",
    likeCount: 876,
    isLiked: false,
    commentCount: 34,
    caption: "Frontend vs Backend 😅 Which side are you on?",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768307176/vedio3_l6czed.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/21.jpg",
    shareCount: 18,
    isFollowed: false
  },
  {
    username: "mern.journey",
    likeCount: 3421,
    isLiked: true,
    commentCount: 211,
    caption: "MongoDB + Express + React + Node 💻🔥",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768307191/vedio2_z3wkcs.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 120,
    isFollowed: true
  },
  {
    username: "uiux.daily",
    likeCount: 654,
    isLiked: false,
    commentCount: 27,
    caption: "Clean UI is not optional ✨",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768307098/vedio5_xbvwbd.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/45.jpg",
    shareCount: 9,
    isFollowed: false
  },
  {
    username: "code.with.raj",
    likeCount: 1987,
    isLiked: true,
    commentCount: 143,
    caption: "JavaScript arrays explained in 30 seconds ⚡",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768317185/vedio6_daeyf6.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/54.jpg",
    shareCount: 66,
    isFollowed: true
  },
  {
    username: "react.rookie",
    likeCount: 432,
    isLiked: false,
    commentCount: 19,
    caption: "useEffect finally makes sense 😭",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768307098/vedio5_xbvwbd.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/61.jpg",
    shareCount: 7,
    isFollowed: false
  },
  {
    username: "tech.explained",
    likeCount: 2890,
    isLiked: true,
    commentCount: 175,
    caption: "Why async/await is better than promises 👀",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768368830/vedio7_1_gn6vmw.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/63.jpg",
    shareCount: 94,
    isFollowed: true
  },
  {
    username: "daily.codes",
    likeCount: 721,
    isLiked: false,
    commentCount: 41,
    caption: "Small progress every day 📈",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768307176/vedio3_l6czed.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/70.jpg",
    shareCount: 15,
    isFollowed: false
  },
  {
    username: "fullstack.life",
    likeCount: 4102,
    isLiked: true,
    commentCount: 302,
    caption: "Building projects > Watching tutorials 💯",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768307191/vedio2_z3wkcs.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/77.jpg",
    shareCount: 188,
    isFollowed: true
  },
  {
    username: "coding.memories",
    likeCount: 538,
    isLiked: false,
    commentCount: 23,
    caption: "That feeling when the bug finally fixes itself 🐛😂",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768368830/vedio7_1_gn6vmw.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/81.jpg",
    shareCount: 11,
    isFollowed: false
  }
];
let allReels = document.querySelector('.all-reels')
function addData(){let sum = ''
reels.forEach(function (elem,idx) {
    sum = sum+`<div class="reels">
                    <video autoplay loop muted src="${elem.video}" class="vedio"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id = ${idx} class="like">
                            <h4 class="like-icon">${elem.isLiked?'<i class=" love ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
                            
                        </div>
                        

                    </div>
                </div>
                `
})
allReels.innerHTML=sum;}

// console.log(sum)


addData()

allReels.addEventListener('click',(dets)=>{
  console.log(dets.target)
})