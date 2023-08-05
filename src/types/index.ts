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
