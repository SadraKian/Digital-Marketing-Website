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

type Article = {
  id: number;
  title: string;
  date: string;
  categories: string[];
  imageSrc: string;
  intro: string;
  sections: ArticleSection[];
  conclusion: string;
};

type ThemeContextType = {
  isThemeDark: boolean;
  setIsThemeDark: React.Dispatch<React.SetStateAction<boolean>>;
  presets: string[];
  setPresets: React.Dispatch<React.SetStateAction<string[]>>;
};

type SettingsContextType = {
  isSettingsOpen: boolean;
  setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type PresetsButtonProps = {
  setPresets: React.Dispatch<React.SetStateAction<string[]>>;
  preset: string[];
  currentPreset: string[];
};

type BlogPostProps = {
  post: Article;
  isThemeDark: boolean;
  presets: string[];
};

type BlogDetails = {
  id: number;
  author: string;
  tag?: { id: number; title: string };
  category?: { id: number; title: string };
  created_at: string;
  title: string;
  text: string;
  image?: string;
};

type PaginationProps = {
  count: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
};

type ContactUsInfo = {
  title: string;
  email: string;
  text: string;
};
