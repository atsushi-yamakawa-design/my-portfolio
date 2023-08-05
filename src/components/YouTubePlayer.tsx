import React, { useEffect, useRef } from 'react';
import useYouTubeAPI from './useYouTubeAPI';

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const playerRef = useRef<YT.Player | null>(null);
  const apiLoaded = useYouTubeAPI();

  useEffect(() => {
    if (apiLoaded) {
      createPlayer();
    }

    function onPlayerReady(event: YT.PlayerEvent): void {
      // playerRef.current?.playVideo();
    }

    function onPlayerStateChange(event: YT.OnStateChangeEvent): void {
      console.log('Player state changed to: ' + event.data);
    }

    function createPlayer(): void {
      playerRef.current = new window.YT.Player('player', {
        videoId: videoId,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    }
  }, [apiLoaded, videoId]);

  const handlePlay = (): void => {
    playerRef.current?.playVideo();
  };

  const handlePause = (): void => {
    playerRef.current?.pauseVideo();
  };

  return (
    <div>
      <div id="player"></div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default YouTubePlayer;
