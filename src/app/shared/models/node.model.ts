export interface  Node {
  id: number;
  title: string;
  imgURL: string;
  teaser?: string;
  content: string;
  created?: Date;
  _links: any;
}

