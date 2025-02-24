declare module "*.svg" {
    const content: string;
    export default content;
  }

  declare module "*.jpg" {
    const content: React.ImgHTMLAttributes;
    export default content;
  }

  declare module '*.jpg';