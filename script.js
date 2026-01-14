const reels = [
  {
    ismuted :true,
    username: "sujay.codes",
    likeCount: 1245,
    isLiked: true,
    commentCount: 98,
    caption: "Day 12 of learning MERN 🚀 Consistency > Motivation",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768374121/videoplayback_fw9sfk.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/11.jpg",
    shareCount: 42,
    isFollowed: true
  },
  {
    ismuted :true,
    username: "dev_diaries",
    likeCount: 876,
    isLiked: false,
    commentCount: 34,
    caption: "Frontend vs Backend 😅 Which side are you on?",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768374120/videoplayback_3_qvmvik.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/21.jpg",
    shareCount: 18,
    isFollowed: false
  },
  {
    ismuted :true,
    username: "mern.journey",
    likeCount: 3421,
    isLiked: true,
    commentCount: 211,
    caption: "MongoDB + Express + React + Node 💻🔥",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768374120/videoplayback_5_muqduv.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 120,
    isFollowed: true
  },
  {
    ismuted :true,
    username: "uiux.daily",
    likeCount: 654,
    isLiked: false,
    commentCount: 27,
    caption: "Clean UI is not optional ✨",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768374120/videoplayback_2_hzgwtl.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/45.jpg",
    shareCount: 9,
    isFollowed: false
  },
  {
    ismuted :true,
    username: "code.with.raj",
    likeCount: 1987,
    isLiked: true,
    commentCount: 143,
    caption: "JavaScript arrays explained in 30 seconds ⚡",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768374120/videoplayback_6_yxhlzr.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/54.jpg",
    shareCount: 66,
    isFollowed: true
  },
  {
    ismuted :true,
    username: "react.rookie",
    likeCount: 432,
    isLiked: false,
    commentCount: 19,
    caption: "useEffect finally makes sense 😭",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768374119/videoplayback_4_v4xev0.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/61.jpg",
    shareCount: 7,
    isFollowed: false
  },
  {
    ismuted :true,
    username: "tech.explained",
    likeCount: 2890,
    isLiked: true,
    commentCount: 175,
    caption: "Why async/await is better than promises 👀",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768374119/videoplayback_1_wwlgzk.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/63.jpg",
    shareCount: 94,
    isFollowed: true
  },
  {
    ismuted :true,
    username: "daily.codes",
    likeCount: 721,
    isLiked: false,
    commentCount: 41,
    caption: "Small progress every day 📈",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768374121/videoplayback_fw9sfk.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/70.jpg",
    shareCount: 15,
    isFollowed: false
  },
  {
    ismuted :true,
    username: "fullstack.life",
    likeCount: 4102,
    isLiked: true,
    commentCount: 302,
    caption: "Building projects > Watching tutorials 💯",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768374120/videoplayback_2_hzgwtl.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/77.jpg",
    shareCount: 188,
    isFollowed: true
  },
  {
    ismuted :true,
    username: "coding.memories",
    likeCount: 538,
    isLiked: false,
    commentCount: 23,
    caption: "That feeling when the bug finally fixes itself 🐛😂",
    video: "https://res.cloudinary.com/dyk04agf0/video/upload/v1768374119/videoplayback_4_v4xev0.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/81.jpg",
    shareCount: 11,
    isFollowed: false
  }
];
let allReels = document.querySelector('.all-reels')
function addData(){let sum = ''
reels.forEach(function (elem,idx) {
    sum = sum+`<div class="reels">
    
                    <video autoplay loop ${elem.ismuted ? 'muted' : ''}  src="${elem.video}" class="vedio">
                    </video>
                    <div class= "mute" id=${idx}>
                    ${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}
            
        </div>
                    

                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class="follow">${elem.isFollowed?'Unfollow':'Follow'}</button>
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
  if(dets.target.className=='like'){
    if(!reels[dets.target.id].isLiked){
    reels[dets.target.id].likeCount++
  reels[dets.target.id].isLiked=true
  }
  else{
    reels[dets.target.id].likeCount--
  reels[dets.target.id].isLiked=false
  }
  addData()
  }
  if(dets.target.className=='follow'){
    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed=true
    }
    else{
      reels[dets.target.id].isFollowed=false
    }
    addData()
  }
  if(dets.target.className=='mute'){
    if(!reels[dets.target.id].ismuted){
      reels[dets.target.id].ismuted=true
    }
    else{
      reels[dets.target.id].ismuted=false
    }
    addData()
  }
  
})