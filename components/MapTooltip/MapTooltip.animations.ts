export const tooltipAnimation = {
  container: {
    initial: {
      opacity: 1,
      maxHeight: 0,
    },
    animate: {
      opacity: 1,
      maxHeight: "50rem",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.25, type: "tween", ease: "easeIn" },
    },
  },
  image: (imageLoaded: boolean) => {
    return {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: imageLoaded ? 1 : 0,
        transition: {
          duration: 0.5,
          type: "tween",
          ease: "easeOut",
          delay: 0.25,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.25,
          type: "tween",
          ease: "easeIn",
        },
      },
    };
  },
  content: (contentIndex: number) => {
    return {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "tween",
          ease: "easeOut",
          delay: contentIndex * 0.25,
        },
      },
      exit: {
        opacity: 0,
        transition: { duration: 0.25, type: "tween", ease: "easeIn" },
      },
    };
  },
};
