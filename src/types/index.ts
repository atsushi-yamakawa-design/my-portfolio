// 作品
export type Works = {
  id: string;
  title: string;
  year: string;
  thumb: {
    url: string;
  };
  header: {
    url: string;
  };
  content: string;
  contentEn: string;
  credit: string;
  workImgs: [
    {
      fieldId: string;
      img: {
        url: string;
        height: number;
        width: number;
      };
      width: string;
    }
  ];
};

// 設定
export type Settings = {
  topSlider: [
    {
      fieldId: string;
      title: string;
      slideImg: {
        url: string;
      };
      slideLink: string;
    }
  ];
  aboutText: string;
  aboutTextEn: string;
  profilePhoto: {
    url: string;
  };
  awards: [
    {
      fieldId: string;
      year: string;
      value: string;
      valueEn: string;
    }
  ];
  exhibitions: [
    {
      fieldId: string;
      year: string;
      value: string;
      valueEn: string;
    }
  ];
};

// 展示
export type Exhibitions = {
  id: string;
  title: string;
  period: string;
  venue: string;
  thumb: {
    url: string;
  };
  movie?: string;
  header: {
    url: string;
  };
  content: string;
  contentEn: string;
  exImgs: [
    {
      fieldId: string;
      img: {
        url: string;
        height: number;
        width: number;
      };
      width: string;
    }
  ];
};

// youtube
declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YTConfig: {
      host: string;
    };
    YT: {
      Player: {
        new (elementId: string, options: YTPlayerOptions): YTPlayerInstance;
      };
    };
  }
}

export interface YTPlayerOptions {
  height: string;
  width: string;
  videoId: string;
  events: {
    onReady: (event: any) => void;
    onStateChange: (event: any) => void;
  };
}

export interface YTPlayerInstance {
  playVideo: () => void;
  stopVideo: () => void;
  destroy: () => void;
}
