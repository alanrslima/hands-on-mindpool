export interface QuestionCategoryProps {
  id: number;
  name: string;
}

export interface QuestionProps {
  id: string;
  createdAt: string;
  title: string;
  category: QuestionCategoryProps;
}
