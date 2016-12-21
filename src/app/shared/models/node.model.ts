export interface  Node {
  nid: number;
  title: string;
  imgURL: string;
  teaser?: string;
  content: string;
  created?: Date;
  _links: any;
}

