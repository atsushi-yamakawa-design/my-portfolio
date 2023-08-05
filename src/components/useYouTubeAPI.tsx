import { useEffect, useState } from 'react';

const useYouTubeAPI = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // check if the YouTube IFrame API script is loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      const firstScriptTag = document.getElementsByTagName('script')[0];

      // check if parentNode exists before inserting script
      if (firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }

      window.onYouTubeIframeAPIReady = () => {
        setIsLoaded(true);
      };
    } else {
      setIsLoaded(true);
    }
  }, []);

  return isLoaded;
};

export default useYouTubeAPI;
