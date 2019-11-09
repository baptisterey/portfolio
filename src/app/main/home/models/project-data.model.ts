export class ProjectData {
  name: string;
  images: Array<Image>;
  youtubeURL?: string;
}

export class Image {
  url: string;
  alt: string;
}
