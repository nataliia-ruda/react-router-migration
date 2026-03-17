import jetbrainsLogo from '../../../assets/jetbrains-logo.svg';
import styles from './Footer.module.scss';

const socialLinks = [
  {
    title: 'Kotlin on GitHub',
    href: 'https://github.com/JetBrains/kotlin',
    icon: (
      <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.9 9.2a8.94 8.94 0 01-6.4 8.6.392.392 0 01-.4-.4v-3a1.58 1.58 0 00-.5-1.2 3.734 3.734 0 003.9-3.4 4.244 4.244 0 00-.9-3.5c.29-.79.217-1.669-.2-2.4a7.24 7.24 0 00-2.4.9c-1.44-.4-2.96-.4-4.4 0a4.62 4.62 0 00-2.3-.9h-.1A2.75 2.75 0 004 6.3a4.075 4.075 0 00-.9 3.5A3.81 3.81 0 007 13.2c-.198.148-.34.36-.4.6a2.638 2.638 0 00-.1.7 1.943 1.943 0 01-2.2-.5c-.5-.8-.9-1.2-1.4-1.3-.5-.1-.6.2-.6.2.079.26.26.476.5.6.387.216.674.575.8 1a1.827 1.827 0 001.2 1.2 3.915 3.915 0 001.9 0v1.7a.297.297 0 01-.4.3A8.82 8.82 0 010 9.2a8.95 8.95 0 0117.9 0z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: 'Kotlin on Twitter',
    href: 'https://twitter.com/kotlin',
    icon: (
      <svg width="20" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.29 16.25A11.59 11.59 0 0018 4.58v-.53a8.3 8.3 0 002-2.13 8.36 8.36 0 01-2.36.65A4.16 4.16 0 0019.45.3a8.19 8.19 0 01-2.61 1 4.11 4.11 0 00-7 3.75A11.7 11.7 0 011.39.75a4.11 4.11 0 001.27 5.48A4.06 4.06 0 01.8 5.71a4.11 4.11 0 003.29 4 4.13 4.13 0 01-1.85.07 4.12 4.12 0 003.83 2.85A8.25 8.25 0 011 14.47a7.94 7.94 0 01-1-.06 11.69 11.69 0 006.29 1.84z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: 'Kotlin on Slack',
    href: 'https://surveys.jetbrains.com/s3/kotlin-slack-sign-up',
    icon: (
      <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.63 9.49a1.895 1.895 0 00-1.89 1.89v4.73a1.89 1.89 0 103.78 0v-4.73a1.895 1.895 0 00-1.89-1.89zM.01 11.38a1.89 1.89 0 103.78 0V9.49H1.91a1.897 1.897 0 00-1.9 1.89zM6.63 0a1.89 1.89 0 100 3.78h1.89v-1.9A1.886 1.886 0 006.63 0zM1.89 8.53h4.74a1.89 1.89 0 100-3.78H1.89a1.89 1.89 0 000 3.78zm14.2-3.79a1.895 1.895 0 00-1.89 1.89v1.89h1.89a1.89 1.89 0 100-3.78zM9.48 1.89v4.74a1.89 1.89 0 103.78 0V1.89a1.89 1.89 0 10-3.78 0zm3.78 14.22a1.895 1.895 0 00-1.89-1.89H9.48v1.89a1.89 1.89 0 103.78 0zm2.85-6.62h-4.74a1.89 1.89 0 100 3.78h4.74a1.89 1.89 0 100-3.78z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: 'Kotlin on Reddit',
    href: 'https://www.reddit.com/r/Kotlin/',
    icon: (
      <svg width="20" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 9.068a2.183 2.183 0 00-2.186-2.186 2.2 2.2 0 00-1.524.61c-1.505-1.076-3.566-1.775-5.86-1.865L11.434.932l3.261.699a1.559 1.559 0 003.119-.072A1.56 1.56 0 0016.254 0c-.609 0-1.147.358-1.397.878l-3.638-.77a.381.381 0 00-.287.053.347.347 0 00-.161.251L9.659 5.645c-2.33.072-4.426.77-5.95 1.864a2.2 2.2 0 00-1.523-.61 2.183 2.183 0 00-.896 4.176c-.036.22-.054.441-.053.664 0 3.368 3.924 6.11 8.763 6.11s8.764-2.723 8.764-6.11c0-.223-.018-.444-.054-.664A2.208 2.208 0 0020 9.069zm-15.018 1.56a1.56 1.56 0 013.118 0c0 .86-.698 1.559-1.559 1.559-.86.017-1.559-.7-1.559-1.56zm8.728 4.139c-1.076 1.075-3.119 1.147-3.71 1.147-.61 0-2.652-.09-3.71-1.147a.4.4 0 010-.573.4.4 0 01.574 0c.68.68 2.115.913 3.136.913 1.022 0 2.473-.232 3.136-.913a.401.401 0 01.574 0 .436.436 0 010 .573zm-.287-2.563a1.56 1.56 0 010-3.118c.86 0 1.56.699 1.56 1.56 0 .841-.7 1.558-1.56 1.558z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: 'Kotlin on Stack Overflow',
    href: 'https://stackoverflow.com/questions/tagged/kotlin',
    icon: (
      <svg width="16" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.527 17.27V12.19h1.685v6.764H0v-6.763h1.685v5.078h11.842z" fill="currentColor" />
        <path
          d="M3.546 11.71l8.274 1.73.35-1.664-8.274-1.73-.35 1.664zM4.64 7.77l7.661 3.568.7-1.532-7.66-3.59-.7 1.554zm2.123-3.765l6.501 5.407 1.073-1.292-6.501-5.406-1.073 1.291zM10.966 0L9.609 1.007l5.034 6.785L16 6.785 10.966 0zM3.37 15.562h8.448v-1.685H3.371v1.685z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: 'Kotlin on YouTube',
    href: 'https://www.youtube.com/channel/UCP7uiEZIqci43m22KDl0sNw',
    icon: (
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.005 5.617c.43.633.702 1.36.795 2.119.124 1.146.191 2.299.2 3.452v1.618a34.375 34.375 0 01-.2 3.454 4.808 4.808 0 01-.795 2.116 2.772 2.772 0 01-2.003.904c-2.8.215-7.002.222-7.002.222s-5.2-.05-6.8-.214a3.27 3.27 0 01-2.205-.912 4.8 4.8 0 01-.795-2.117 34.354 34.354 0 01-.2-3.453v-1.618c.009-1.154.075-2.306.2-3.452.093-.76.365-1.486.795-2.12a2.76 2.76 0 012.003-.901c2.799-.217 6.997-.217 6.997-.217h.01s4.198 0 6.997.217a2.76 2.76 0 012.003.902zM15.755 12L9.501 8.249v7.502L15.754 12z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const footerLinks = [
  { label: 'Contributing to Kotlin', href: 'https://kotlinlang.org/docs/contribute.html' },
  { label: 'Releases', href: 'https://kotlinlang.org/releases.html' },
  { label: 'Press Kit', href: 'https://kotlinlang.org/foundation/resources.html' },
  { label: 'Security', href: 'https://kotlinlang.org/docs/security.html' },
  { label: 'Blog', href: 'https://blog.jetbrains.com/kotlin/' },
  { label: 'Issue Tracker', href: 'https://youtrack.jetbrains.com/issues/KT' },
  { label: 'Brand assets', href: 'https://kotlinlang.org/foundation/resources.html' },
  { label: 'Careers', href: 'https://www.jetbrains.com/careers/' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.social}>
              <span className={styles.socialTitle}>Stay in touch:</span>

              <div className={styles.socialList}>
                {socialLinks.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                    className={styles.socialLink}
                    aria-label={item.title}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            <nav className={styles.links} aria-label="Footer links">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className={styles.legal}>
              <p className={styles.copyright}>
                Kotlin™ is protected under the{' '}
                <a href="https://kotlinfoundation.org/" target="_blank" rel="noopener noreferrer">
                  Kotlin Foundation
                </a>{' '}
                and licensed under the{' '}
                <a
                  href="https://www.apache.org/licenses/LICENSE-2.0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apache 2 license
                </a>
                .
              </p>
            </div>
          </div>

          <div className={styles.right}>
            <a
              href="https://www.jetbrains.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
              aria-label="JetBrains"
            >
              <img src={jetbrainsLogo} alt="JetBrains" className={styles.logo} />
            </a>

            <p className={styles.supportedBy}>
              Supported and developed by{' '}
              <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">
                JetBrains
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}