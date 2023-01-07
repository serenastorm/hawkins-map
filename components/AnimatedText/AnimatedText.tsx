import { useEffect, useState } from "react";

import styles from "./AnimatedText.module.scss";

type AnimatedTextType = { show: boolean };

export const AnimatedText = ({ show }: AnimatedTextType) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const ANIMATION_DURATION = 2500;
    if (show) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, ANIMATION_DURATION);
    }
  }, [show]);

  if (!show && !isAnimating) {
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="399"
      height="70"
      fill="none"
      viewBox="0 0 399 70"
      className={styles.animatedText}
      aria-hidden="true"
    >
      {/* A */}
      <path stroke="white" strokeWidth="8" d="M4.5 60l23-46 8 53.5"></path>
      <path stroke="white" strokeWidth="8" d="M6 43.5l30.5-1"></path>
      {/* H */}
      <path stroke="white" strokeWidth="8" d="M51.5 20L42 59.5"></path>
      <path stroke="white" strokeWidth="7" d="M41 37.5L76 40"></path>
      <path stroke="white" strokeWidth="8" d="M77 13L65.5 60.5"></path>
      {/* O */}
      <path
        stroke="white"
        strokeWidth="8"
        d="M82.5 55C79.498 53 77 37.5 99 23.5c0 0 13.5 9 8.499 22C106 50 97 62.5 82.499 55z"
      ></path>
      {/* Y */}
      <path stroke="white" strokeWidth="8" d="M113 21l19.5 22"></path>
      <path stroke="white" strokeWidth="8" d="M146 21l-17 18.5-2.5 22.5"></path>
      {/* S */}
      <path
        stroke="white"
        strokeWidth="8"
        d="M197.001 24.5C209 8 175.501 17 175.501 27c0 12 19-.5 23.5 10s-16.5 24.5-28 18.5c-4.141-3.5.001-10 4.501-12"
      ></path>
      {/* A */}
      <path
        stroke="white"
        strokeWidth="7"
        d="M206 56.392L223.065 22 229 62"
      ></path>
      <path stroke="white" strokeWidth="7" d="M207 44l23-1"></path>
      {/* I */}
      <path stroke="white" strokeWidth="8" d="M244 20.5l-7 40"></path>
      {/* L */}
      <path stroke="white" strokeWidth="8" d="M260 21.5L251 61"></path>
      <path stroke="white" strokeWidth="8" d="M244 55l32.5 2.5"></path>
      {/* O */}
      <path
        stroke="white"
        strokeWidth="8"
        d="M279.945 54.5c-3.001-2-5.5-17.5 16.5-31.5 0 0 13.5 9 8.5 22-1.5 4.5-10.5 17-25 9.5z"
      ></path>
      {/* R */}
      <path stroke="white" strokeWidth="6" d="M320.5 20.5l-7 41.5"></path>
      <path
        stroke="white"
        strokeWidth="7"
        d="M313.5 24c8.833 0 26.6 2.1 27 10.5-1 17.5-22 0-23 5.5L348 66.5"
      ></path>
      {/* S */}
      <path
        stroke="white"
        strokeWidth="7"
        d="M368.838 31.686c9.892-13.893-17.722-6.315-17.722 2.104 0 10.104 15.661-.42 19.371 8.42 3.71 8.84-13.601 20.627-23.081 15.576-3.413-2.947.001-8.42 3.71-10.104"
      ></path>
      {/* ! */}
      <path
        stroke="white"
        strokeWidth="7"
        d="M395 10l-7.5 39.75M385 63l1.25-6.625"
      ></path>

      {/* <g id="text">
        <path
          fill="#000"
          d="M23.66 12.956h7.295c.051 0 .203.71.456 2.128.304 1.419.634 3.294.988 5.624.406 2.28.836 4.915 1.292 7.904.456 2.99.912 6.055 1.368 9.196.507 3.09.988 6.156 1.444 9.196.456 3.04.862 5.802 1.216 8.284.355 2.432.634 4.434.836 6.004.254 1.57.406 2.483.456 2.736-.608 0-1.342-.025-2.204-.076a44.518 44.518 0 01-2.584-.228c-.81-.05-1.545-.152-2.204-.304-.608-.101-.988-.228-1.14-.38a225.67 225.67 0 00-.684-4.028c-.202-1.47-.43-2.938-.684-4.408-.202-1.47-.405-2.888-.608-4.256a37.164 37.164 0 01-.38-3.724c-2.38-.253-4.636-.279-6.764-.076s-4.205.355-6.232.456a404.584 404.584 0 00-3.42 6.536 134.433 134.433 0 01-3.572 6.384c-.1.152-.405.076-.912-.228a32.607 32.607 0 01-1.748-1.14 62.355 62.355 0 01-1.9-1.52 42.87 42.87 0 00-1.368-1.216c3.7-7.55 7.271-14.845 10.716-21.888A4075.01 4075.01 0 0123.66 12.956zm3.571 26.676a198.978 198.978 0 00-.76-7.144 54.107 54.107 0 00-.988-6.08 139.593 139.593 0 01-3.268 6.84 116.17 116.17 0 00-3.116 6.764 49.603 49.603 0 014.332-.456c1.571-.101 2.838-.076 3.8.076zM74.668 40.848c0 .152-.101.355-.304.608-.203.203-.43.405-.684.608a6.91 6.91 0 01-.76.532c-.203.152-.38.228-.532.228-.304 2.584-.71 5.346-1.216 8.284a193.902 193.902 0 01-1.596 8.132c-1.165.304-2.255.127-3.268-.532a17.308 17.308 0 01-2.812-2.28 35.39 35.39 0 001.824-7.068c.405-2.381.76-4.56 1.064-6.536a52.137 52.137 0 00-3.8-.304 85.362 85.362 0 00-3.8-.228 530.65 530.65 0 00-4.18-.304 241.31 241.31 0 01-4.636-.38c-.608 3.04-1.241 6.08-1.9 9.12-.608 3.04-1.267 6.08-1.976 9.12-1.419-.304-2.483-.76-3.192-1.368-.659-.608-1.267-1.47-1.824-2.584.557-2.584 1.14-5.32 1.748-8.208.659-2.888 1.317-5.801 1.976-8.74.659-2.99 1.292-5.928 1.9-8.816.608-2.939 1.19-5.725 1.748-8.36.557 0 1.165.076 1.824.228a4.77 4.77 0 011.748.608 3.573 3.573 0 011.368 1.064c.355.405.532.912.532 1.52.152.71.101 1.52-.152 2.432a30.564 30.564 0 01-.76 2.66l-.912 2.736c-.304.912-.456 1.723-.456 2.432a56.63 56.63 0 007.752.228c2.584-.101 5.472-.025 8.664.228a208.971 208.971 0 002.356-10.412 92.273 92.273 0 012.736-10.564c.557-.152 1.14-.203 1.748-.152.608.05 1.165.203 1.672.456a3.573 3.573 0 011.368 1.064c.355.405.557.887.608 1.444.101.912-.025 2.204-.38 3.876a87.38 87.38 0 01-1.292 5.244 134.22 134.22 0 01-1.444 5.32c-.507 1.672-.887 3.04-1.14 4.104-.152.456-.203.786-.152.988.101.203.203.43.304.684.101.254.177.583.228.988.101.405.101 1.039 0 1.9zM90.471 60.38c-2.128-.304-4.18-1.14-6.156-2.508s-3.521-2.862-4.636-4.484c-1.317-2.128-2.001-4.281-2.052-6.46-.05-2.178.33-4.306 1.14-6.384.81-2.077 1.95-4.078 3.42-6.004a44.836 44.836 0 014.94-5.32 50.394 50.394 0 015.548-4.408c1.925-1.317 3.699-2.407 5.32-3.268 1.723.558 3.395 1.393 5.016 2.508a22.606 22.606 0 014.332 3.876 18.665 18.665 0 013.04 4.864 13.761 13.761 0 011.14 5.472c0 2.787-.608 5.523-1.824 8.208a24.63 24.63 0 01-4.712 7.068 23.878 23.878 0 01-6.688 4.94c-2.533 1.267-5.143 1.9-7.828 1.9zm-7.524-6.536c2.33 1.368 4.763 1.85 7.296 1.444 2.534-.405 4.89-1.393 7.068-2.964 2.179-1.57 4.079-3.521 5.7-5.852 1.672-2.381 2.812-4.839 3.42-7.372.608-2.533.557-4.99-.152-7.372-.659-2.381-2.179-4.357-4.56-5.928-2.837 1.824-5.421 3.724-7.752 5.7-2.28 1.925-4.256 4.003-5.928 6.232a27.472 27.472 0 00-3.8 7.372c-.861 2.635-1.292 5.548-1.292 8.74zM112.137 24.052c.304-.354.735-.71 1.292-1.064a5.793 5.793 0 011.824-.76 7.713 7.713 0 012.128-.304c.709 0 1.368.178 1.976.532a174.552 174.552 0 014.788 6.156 69.138 69.138 0 014.408 6.688c.709-.81 1.647-1.874 2.812-3.192a1727.03 1727.03 0 013.572-4.18 372.214 372.214 0 013.648-4.028 103.512 103.512 0 012.812-2.964c.253-.253.633-.253 1.14 0 .507.253.988.634 1.444 1.14.507.507.887 1.09 1.14 1.748.304.608.38 1.14.228 1.596a356.867 356.867 0 00-6.992 7.524A574.979 574.979 0 00131.213 41c-.203 3.344-.38 6.562-.532 9.652a122.79 122.79 0 01-.836 9.424c-1.013.152-2.052-.025-3.116-.532-1.064-.557-1.925-1.09-2.584-1.596.051-1.267.101-2.61.152-4.028.051-1.47.127-2.939.228-4.408.101-1.52.203-2.99.304-4.408.152-1.419.304-2.736.456-3.952a135.117 135.117 0 01-3.344-4.712 102.39 102.39 0 00-3.116-4.56 53.228 53.228 0 00-3.192-4.18 30.081 30.081 0 00-3.496-3.648zM200.143 24.432c-.557.152-1.038.152-1.444 0a2.873 2.873 0 01-.912-.836 8.618 8.618 0 01-.532-1.368 66.037 66.037 0 01-.456-1.596c0-.253.102-.43.304-.532.254-.152.507-.507.76-1.064-1.418.05-3.217.228-5.396.532-2.128.253-4.256.71-6.384 1.368-2.128.659-4.028 1.495-5.7 2.508-1.672 1.014-2.736 2.255-3.192 3.724a9.063 9.063 0 004.56 1.52 57.19 57.19 0 005.092.076 32.961 32.961 0 015.016.076 8.532 8.532 0 014.408 1.52c3.142 2.027 5.194 4.206 6.156 6.536.963 2.33 1.115 4.661.456 6.992-.658 2.33-1.95 4.56-3.876 6.688-1.925 2.078-4.205 3.901-6.84 5.472a32.906 32.906 0 01-8.512 3.42c-2.989.71-5.902.861-8.74.456-1.064-.355-2.001-.81-2.812-1.368a15.05 15.05 0 01-2.128-1.9 28.432 28.432 0 01-1.9-2.28 62.511 62.511 0 00-1.824-2.66c.152-1.114.38-2.052.684-2.812.355-.81.76-1.57 1.216-2.28a22.98 22.98 0 011.672-2.204 28.505 28.505 0 001.824-2.584c.304 0 .634.076.988.228.355.152.71.355 1.064.608.355.254.634.558.836.912.254.304.38.659.38 1.064 0 .912-.177 1.748-.532 2.508-.354.76-.76 1.52-1.216 2.28-.456.71-.886 1.419-1.292 2.128a6.086 6.086 0 00-.76 2.28c1.672.71 3.344 1.039 5.016.988 1.672-.05 3.294-.33 4.864-.836a29.232 29.232 0 004.636-2.052 48.893 48.893 0 004.104-2.432 33.835 33.835 0 004.408-3.42c1.368-1.267 2.61-2.862 3.724-4.788.558-1.47.659-2.635.304-3.496-.354-.912-1.013-1.596-1.976-2.052-.912-.507-2.052-.836-3.42-.988a38.282 38.282 0 00-4.332-.38 130.947 130.947 0 00-4.332-.228c-1.418-.05-2.634-.202-3.648-.456-1.317 0-2.482-.481-3.496-1.444a10.346 10.346 0 01-2.204-3.572 12.81 12.81 0 01-.76-4.332c0-1.52.304-2.761.912-3.724 1.419-1.824 2.838-3.242 4.256-4.256 1.47-1.064 2.99-1.85 4.56-2.356a27.47 27.47 0 015.168-1.064c1.824-.202 3.851-.38 6.08-.532.659 0 1.394.076 2.204.228.811.152 1.546.38 2.204.684.659.253 1.216.583 1.672.988.456.405.684.861.684 1.368.912.912 1.444 1.723 1.596 2.432.152.659.076 1.318-.228 1.976-.304.659-.734 1.343-1.292 2.052a22.371 22.371 0 00-1.672 2.28zM219.967 21.772h5.472c.05 0 .228.912.532 2.736.354 1.824.734 4.104 1.14 6.84.456 2.736.912 5.726 1.368 8.968.506 3.192.962 6.207 1.368 9.044.456 2.787.81 5.168 1.064 7.144.304 1.976.481 3.09.532 3.344-.456 0-1.014-.025-1.672-.076a303.61 303.61 0 00-1.9-.152c-.608-.05-1.166-.101-1.672-.152-.456-.101-.735-.228-.836-.38a2471.52 2471.52 0 01-.988-6.308c-.355-2.28-.583-4.256-.684-5.928a24.585 24.585 0 00-5.092-.076c-1.622.152-3.167.279-4.636.38a112.269 112.269 0 00-2.584 4.864 93.087 93.087 0 01-2.66 4.788c-.102.102-.355.05-.76-.152-.355-.253-.76-.557-1.216-.912a15.972 15.972 0 00-1.444-1.14 18.246 18.246 0 00-.988-.836 4184.36 4184.36 0 007.98-16.34c2.533-5.27 5.092-10.488 7.676-15.656zm2.66 19.836c-.203-2.077-.38-3.825-.532-5.244a39.033 39.033 0 00-.76-4.56 74.92 74.92 0 01-2.356 5.016 65.551 65.551 0 00-2.356 5.092 28.48 28.48 0 013.192-.304c1.165-.101 2.102-.101 2.812 0zM241.198 60.152a7.535 7.535 0 01-1.824-.076 13.86 13.86 0 01-1.976-.456 18.485 18.485 0 01-1.748-.836c-.507-.355-.912-.734-1.216-1.14a523.182 523.182 0 013.192-17.86 2228.946 2228.946 0 013.572-17.936c.557.05 1.14.152 1.748.304.608.101 1.14.279 1.596.532.506.203.912.456 1.216.76.304.304.43.659.38 1.064-.304 2.432-.76 5.092-1.368 7.98a6795.3 6795.3 0 00-1.9 8.892 982.725 982.725 0 00-1.976 9.5 105.294 105.294 0 00-1.52 9.5l1.824-.228zM257.448 21.924c.304.102.76.228 1.368.38.608.152 1.191.355 1.748.608a5.537 5.537 0 011.444.76c.406.304.583.633.532.988a446.434 446.434 0 00-1.14 6.384 108.91 108.91 0 01-1.292 6.384 122.379 122.379 0 01-1.672 6.916 134.541 134.541 0 01-2.28 7.828c2.23.254 4.003.456 5.321.608 1.368.102 2.609.203 3.724.304 1.165.101 2.406.228 3.723.38 1.368.152 3.167.33 5.396.532.203.659.406 1.621.608 2.888.254 1.216.381 2.255.381 3.116-.507.254-1.065.304-1.673.152a9.55 9.55 0 00-1.52-.152c-2.026-.203-3.648-.38-4.864-.532a49.294 49.294 0 00-3.42-.456 56.897 56.897 0 00-3.496-.38 149.765 149.765 0 00-5.016-.304c0 .405-.177.735-.532.988-.304.203-.456.43-.456.684-.962.254-1.849.152-2.66-.304-.76-.506-1.342-.962-1.748-1.368-.709-.253-1.393-.33-2.052-.228-.709.05-1.266-.05-1.672-.304-.304-.253-.506-.633-.608-1.14a6.614 6.614 0 01-.228-1.748c0-.608.051-1.19.152-1.748.102-.608.203-1.064.304-1.368.406.203 1.014.33 1.824.38h2.28a330.95 330.95 0 003.724-15.2 327.151 327.151 0 013.8-15.048zM287.771 60.38c-2.128-.304-4.18-1.14-6.156-2.508s-3.521-2.862-4.636-4.484c-1.317-2.128-2.001-4.281-2.052-6.46-.05-2.178.33-4.306 1.14-6.384.811-2.077 1.951-4.078 3.42-6.004a44.861 44.861 0 014.94-5.32 50.48 50.48 0 015.548-4.408c1.926-1.317 3.699-2.407 5.32-3.268 1.723.558 3.395 1.393 5.016 2.508a22.546 22.546 0 014.332 3.876 18.665 18.665 0 013.04 4.864 13.761 13.761 0 011.14 5.472c0 2.787-.608 5.523-1.824 8.208a24.63 24.63 0 01-4.712 7.068 23.862 23.862 0 01-6.688 4.94c-2.533 1.267-5.142 1.9-7.828 1.9zm-7.524-6.536c2.331 1.368 4.763 1.85 7.296 1.444 2.534-.405 4.89-1.393 7.068-2.964 2.179-1.57 4.079-3.521 5.7-5.852 1.672-2.381 2.812-4.839 3.42-7.372.608-2.533.558-4.99-.152-7.372-.658-2.381-2.178-4.357-4.56-5.928-2.837 1.824-5.421 3.724-7.752 5.7-2.28 1.925-4.256 4.003-5.928 6.232a27.48 27.48 0 00-3.8 7.372c-.861 2.635-1.292 5.548-1.292 8.74zM326.461 43.356a139.121 139.121 0 004.636 4.104c1.723 1.419 3.471 2.863 5.244 4.332 1.774 1.47 3.572 2.99 5.396 4.56a161.345 161.345 0 015.32 4.788 68.541 68.541 0 01-.684 3.116c-.152.862-.38 1.85-.684 2.964a72.34 72.34 0 01-6.612-5.32 646.856 646.856 0 01-6.384-5.7 228.595 228.595 0 00-6.46-5.776 72.278 72.278 0 00-6.764-5.168 961.087 961.087 0 00-1.596 7.676 169.147 169.147 0 01-1.672 7.98c-.405.254-.937.38-1.596.38a5.737 5.737 0 01-1.824-.304 4.246 4.246 0 01-1.444-.684c-.405-.304-.557-.659-.456-1.064.558-2.432 1.09-5.016 1.596-7.752l1.52-8.36c.507-2.837.988-5.624 1.444-8.36a325.26 325.26 0 011.368-7.676c-1.064-.557-1.646-1.368-1.748-2.432-.101-1.114.127-2.102.684-2.964a37.593 37.593 0 015.852 0c2.078.152 4.13.43 6.156.836 2.027.405 3.927.963 5.7 1.672 1.824.659 3.395 1.444 4.712 2.356.659.405 1.267 1.064 1.824 1.976a10.344 10.344 0 011.368 3.04 10.77 10.77 0 01.38 3.344c-.05 1.115-.329 2.078-.836 2.888a8.34 8.34 0 01-2.736 2.584 15.285 15.285 0 01-3.572 1.596 31.373 31.373 0 01-4.028.836c-1.418.203-2.786.38-4.104.532zm-4.332-15.732a21.177 21.177 0 00-1.064 5.092 52.028 52.028 0 01-.532 5.092c1.419 0 3.218.05 5.396.152 2.179.05 4.282.026 6.308-.076 2.078-.152 3.851-.43 5.32-.836 1.47-.405 2.204-1.064 2.204-1.976 0-1.165-.582-2.204-1.748-3.116-1.114-.962-2.533-1.748-4.256-2.356-1.722-.659-3.622-1.14-5.7-1.444-2.077-.354-4.053-.532-5.928-.532z"
        ></path>
        <path
          fill="#000"
          d="M370.861 31.576c-.912.203-1.546-.05-1.9-.76a14.222 14.222 0 01-.76-2.356c0-.253.076-.43.228-.532.152-.101.354-.355.608-.76-1.166.05-2.635.203-4.408.456a31.2 31.2 0 00-5.168 1.064c-1.723.507-3.268 1.19-4.636 2.052-1.368.81-2.23 1.824-2.584 3.04a7.473 7.473 0 003.724 1.292c1.368.05 2.736.05 4.104 0a36.528 36.528 0 014.104.076 6.444 6.444 0 013.572 1.216c2.533 1.622 4.18 3.395 4.94 5.32.81 1.875.937 3.775.38 5.7-.507 1.875-1.546 3.673-3.116 5.396-1.571 1.723-3.42 3.218-5.548 4.484A26.636 26.636 0 01357.485 60c-2.432.557-4.788.684-7.068.38a9.566 9.566 0 01-2.28-1.14 16.293 16.293 0 01-1.748-1.52 60.807 60.807 0 01-1.52-1.9l-1.52-2.128c.101-.912.278-1.672.532-2.28.304-.658.658-1.267 1.064-1.824.405-.608.836-1.216 1.292-1.824a24.226 24.226 0 001.52-2.052c.456 0 1.013.228 1.672.684.658.405.988.938.988 1.596 0 .76-.152 1.444-.456 2.052a32.631 32.631 0 01-.988 1.824c-.355.557-.71 1.14-1.064 1.748a3.894 3.894 0 00-.608 1.824c1.368.558 2.736.836 4.104.836a14.693 14.693 0 003.952-.684 22.554 22.554 0 003.724-1.672 48.902 48.902 0 003.344-1.976 25.01 25.01 0 003.572-2.812c1.114-1.013 2.128-2.305 3.04-3.876.709-1.773.608-3.04-.304-3.8-.912-.76-2.204-1.267-3.876-1.52-1.622-.253-3.37-.38-5.244-.38-1.875 0-3.446-.152-4.712-.456-1.064 0-2.002-.405-2.812-1.216a7.786 7.786 0 01-1.824-2.888 10.783 10.783 0 01-.608-3.572c0-1.216.253-2.204.76-2.964 1.165-1.52 2.33-2.685 3.496-3.496a13.656 13.656 0 013.648-1.824c1.317-.456 2.71-.76 4.18-.912 1.469-.152 3.116-.304 4.94-.456.557 0 1.14.076 1.748.228a6.948 6.948 0 011.824.532c.557.203 1.013.482 1.368.836.354.304.532.659.532 1.064.76.71 1.19 1.368 1.292 1.976.152.557.101 1.115-.152 1.672-.203.507-.558 1.039-1.064 1.596-.456.558-.912 1.19-1.368 1.9zM391.034 43.432c-.963.405-1.9.279-2.812-.38a13.006 13.006 0 01-2.28-2.432c.355-.861.684-2.102.988-3.724.355-1.672.684-3.496.988-5.472.355-2.026.684-4.104.988-6.232.304-2.178.608-4.18.912-6.004.355-1.874.684-3.47.988-4.788.355-1.317.709-2.153 1.064-2.508.507-.557 1.089-.76 1.748-.608.709.101 1.317.43 1.824.988.557.507.963 1.14 1.216 1.9.253.71.228 1.393-.076 2.052a615.114 615.114 0 01-2.66 13.832 806.992 806.992 0 01-2.888 13.376zm-1.9 16.112a2.414 2.414 0 01-1.444.304 6.842 6.842 0 01-1.444-.456c-.456-.203-.887-.43-1.292-.684-.355-.304-.608-.582-.76-.836-.101-.608-.101-1.343 0-2.204.152-.861.329-1.722.532-2.584.203-.912.355-1.773.456-2.584.152-.81.177-1.495.076-2.052 1.013-.152 2.052-.076 3.116.228 1.064.253 1.672.76 1.824 1.52.101.608.076 1.318-.076 2.128a73.25 73.25 0 01-.532 2.432c-.203.81-.38 1.647-.532 2.508-.101.81-.076 1.57.076 2.28z"
        ></path>
      </g> */}
    </svg>
  );
};
