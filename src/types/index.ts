export type Works = {
  id: string;
  title: string;
  thumb?: {
    url?: string;
  };
  header?: {
    url: string;
  };
  content: string;
  credit: string;
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
  profilePhoto: {
    url: string;
  };
  awards: [
    {
      fieldId: string;
      year: string;
      value: string;
    }
  ];
  exhibitions: [
    {
      fieldId: string;
      year: string;
      value: string;
    }
  ];
};
