(async function() {
    const targetCount = 100;
    const videoLinks = new Set();
  
    // Function to scroll down and wait for new content to load.
    async function scrollAndCollect() {
      window.scrollTo(0, document.documentElement.scrollHeight);
      // Wait 2 seconds for YouTube to load new videos (adjust delay if needed)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Select all video links on the page and add their hrefs to the set.
      document.querySelectorAll('a#video-title-link').forEach(link => {
        if (link.href) {
          videoLinks.add(link.href);
        }
      });
      
      console.log(`Collected ${videoLinks.size} video links so far...`);
    }
  
    // Continue scrolling and collecting until we have at least 100 links.
    while (videoLinks.size < targetCount) {
      await scrollAndCollect();
    }
  
    // Convert the Set to an Array and take the first 100 links.
    const linksArray = Array.from(videoLinks).slice(0, targetCount);
    console.log(targetCount, " video links collected:", linksArray);
  })();
  