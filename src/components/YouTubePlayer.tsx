import React, { useEffect, useRef, useState } from 'react';

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const playerRef = useRef<YT.Player | null>(null);
  const [isClientSide, setClientSide] = useState(false);

  useEffect(() => {
    setClientSide(true);

    window.YTConfig = {
      host: 'https://www.youtube.com',
    };

    if (typeof window.YT === 'undefined') {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = createPlayer;

    function onPlayerReady(event: YT.PlayerEvent): void {
      playerRef.current?.playVideo();
    }

    function onPlayerStateChange(event: YT.OnStateChangeEvent): void {
      console.log('Player state changed to: ' + event.data);
    }

    function createPlayer(): void {
      if (typeof window.YT !== 'undefined') {
        playerRef.current = new window.YT.Player('player', {
          videoId: videoId,
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
      }
    }

    return () => {
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, [videoId]);

  const handlePlay = (): void => {
    playerRef.current?.playVideo();
  };

  const handlePause = (): void => {
    playerRef.current?.pauseVideo();
  };

  if (!isClientSide) {
    return null;
  }

  return (
    <div>
      <div id="player"></div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default YouTubePlayer;
