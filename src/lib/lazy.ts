import { Images } from "@/constants/Image";

class LazyService {
  private readonly ErrorImg: string = Images.img_default_post;

  /**
   * Ленивая загрузка фотографий
   */
  public createImageObserver(
    imgRef: any,
    src: string,
    setPoster: any,
    setLoaded: any,
    onErrorSrc = this.ErrorImg
  ) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setPoster(src);
              setLoaded(true);
            };
            img.onerror = () => {
              setPoster(onErrorSrc);
              console.log(src);
              setLoaded(true);
            };

            if (imgRef.current) {
              observer.unobserve(imgRef.current);
            }
          }
        });
      },
      {
        rootMargin: "50px",
        threshold: 0,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }
}

export default new LazyService();
