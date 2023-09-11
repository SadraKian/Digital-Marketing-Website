interface NavProps {
  isMobileNavVisible: boolean;
  setIsMobileNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ServicesDetail {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
}

type ArticleSection = {
  section_title: string;
  section_content: string;
};

interface Article {
  id: number;
  title: string;
  date: string;
  imageSrc: string;
  intro: string;
  sections: ArticleSection[];
  conclusion: string;
}
