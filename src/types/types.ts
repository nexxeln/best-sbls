export interface ImageAndSlug {
  src:
    | "/images/part-1.png"
    | "/images/part-2.png"
    | "/images/part-3.png"
    | "/images/part-4.png"
    | "/images/part-5.png";
  alt: "part-1" | "part-2" | "part-3" | "part-4" | "part-5";
  slug:
    | "Some Boring, Love Stories"
    | "Some Boring, Love Stories, Pt.2"
    | "Some Boring, Love Stories, Pt.3"
    | "some boring love stories, pt.4"
    | "some boring love stories pt 5";
}
