import Link from 'next/link';
import options from '../../utilities/contact-us-options';

const socialMedia = [
    {
      name: 'Facebook',
      url: options.socialMedia.Facebook,
      icon: (
        <svg
          fill="#f26621"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path d="M22.675 0H1.325C.592 0 0 .593 0 1.326v21.348C0 23.408.593 24 1.325 24H12.82v-9.29H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.1 2.794.144v3.24l-1.918.001c-1.503 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.592 1.325-1.326V1.326C24 .593 23.408 0 22.675 0z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: options.socialMedia.Instagram,
      icon: (
        <svg
          fill="#f26621"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.063 2.633.344 3.608 1.319.975.975 1.256 2.243 1.319 3.608.058 1.267.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.344 2.633-1.319 3.608-.975.975-2.243 1.256-3.608 1.319-1.267.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.344-3.608-1.319-.975-.975-1.256-2.243-1.319-3.608C2.175 15.784 2.163 15.404 2.163 12s.012-3.584.07-4.85c.063-1.366.344-2.633 1.319-3.608.975-.975 2.243-1.256 3.608-1.319C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.014 7.052.072 5.773.13 4.535.336 3.522 1.35 2.508 2.364 2.302 3.602 2.244 4.882 2.186 6.162 2.172 6.571 2.172 12s.014 5.838.072 7.118c.058 1.279.264 2.517 1.278 3.531.973.973 2.211 1.219 3.491 1.278 1.279.058 1.688.072 7.118.072s5.838-.014 7.118-.072c1.279-.058 2.517-.264 3.531-1.278.973-.973 1.219-2.211 1.278-3.491.058-1.279.072-1.688.072-7.118s-.014-5.838-.072-7.118c-.058-1.279-.264-2.517-1.278-3.531-.973-.973-2.211-1.219-3.491-1.278C16.838.014 16.429 0 12 0zm0 5.838a6.163 6.163 0 100 12.325A6.163 6.163 0 0012 5.838zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.882 0 1.44 1.44 0 012.882 0z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: options.socialMedia.LinkedIn,
      icon: (
        <svg
          fill="#f26621"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.08 20.16H3.56V9.04h3.52v11.12zM5.32 7.65c-1.13 0-1.85-.74-1.85-1.65C3.47 5.35 4.19 4.6 5.4 4.6s1.85.75 1.85 1.7c-.01.91-.72 1.65-1.93 1.65zm15.1 12.51h-3.51v-5.66c0-1.42-.51-2.39-1.77-2.39-1 0-1.59.7-1.85 1.37-.1.25-.13.6-.13.94v5.73H9.66s.05-9.3 0-10.26h3.51v1.45c-.01.02-.03.04-.04.07h.04v-.07c.47-.73 1.31-1.76 3.18-1.76 2.32 0 4.06 1.52 4.06 4.78v6.8h-.02z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: options.socialMedia.Twitter,
      icon: (
        <svg
          fill="#f26621"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.937 4.937 0 002.168-2.725 9.876 9.876 0 01-3.127 1.196 4.924 4.924 0 00-8.388 4.482A13.978 13.978 0 011.671 3.149a4.908 4.908 0 001.523 6.57 4.903 4.903 0 01-2.23-.616v.061a4.923 4.923 0 003.946 4.827 4.936 4.936 0 01-2.224.084 4.932 4.932 0 004.604 3.417A9.87 9.87 0 010 21.544a13.939 13.939 0 007.548 2.213c9.057 0 14.012-7.496 14.012-13.986 0-.213-.005-.425-.015-.637A10.025 10.025 0 0024 4.59l-.046-.021z" />
        </svg>
      ),
    },
  ];

const SocialMediaLinks = () => {
    return (
        <div className="flex space-x-4">
            {socialMedia.map((media) => (
                <Link key={media.name} href={media.url} legacyBehavior>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={media.name}
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                    >
                        {media.icon}
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default SocialMediaLinks;