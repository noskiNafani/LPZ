

(() => {

  
  let videos = [
    '/1.mp4',
    '/2.mp4',
  ];

  const video = document.querySelector('#video');
  let i = 0;
  video.addEventListener('ended', () => {
    if (i === videos.length - 1) {
      i = 0;
      video.src = videos[i]
    } else {
      video.src = videos[++i]
    }



  })


})()

