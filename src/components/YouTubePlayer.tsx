import React, { useEffect, useRef, useState } from 'react';
import useYouTubeAPI from './useYouTubeAPI';
import style from './YouTubePlayer.module.scss';
import Image from 'next/image';
import { ReactSVG } from 'react-svg';

interface YouTubePlayerProps {
  videoId: string;
  thumb: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, thumb }) => {
  const playerRef = useRef<YT.Player | null>(null);
  const apiLoaded = useYouTubeAPI();

  // 画面の表示状態を管理するステート
  const [isScreenVisible, setScreenVisible] = useState(true);

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
    // ボタンが押されたら画面を非表示にする
    setScreenVisible(false);
  };

  const handlePause = (): void => {
    playerRef.current?.pauseVideo();
    // ポーズすると再びスクリーンを表示する
    setScreenVisible(true);
  };

  return (
    <div className={style.ytPlayerWrapper}>
      <div id="player" className={style.player}></div>
      {isScreenVisible && (
        <div className={style.playerScreen} onClick={handlePlay}>
          <Image
            src={thumb}
            layout="responsive"
            width={640}
            height={400}
            alt=""
            className={style.screenBg}
          />
          <button className={style.playButton}>
            <ReactSVG
              src="/images/assets/play-button.svg"
              className={style.triangle}
              // style={{ width: '100%', height: 'auto' }}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default YouTubePlayer;
