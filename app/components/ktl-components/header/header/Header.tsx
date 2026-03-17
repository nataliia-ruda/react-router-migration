import { useState, useRef, useEffect } from 'react';
import kotlinLogo from '../../../../assets/images/favicon.svg';
import styles from './Header.module.scss';

type NavItem = {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
};

const navLinks: NavItem[] = [
  {
    label: 'Solutions',
    href: '#',
    submenu: [
      { label: 'Multiplatform Mobile', href: '/docs/multiplatform-mobile-getting-started.html' },
      { label: 'Multiplatform for other platforms', href: '/docs/multiplatform-get-started.html' },
      { label: 'Server-side', href: '/docs/server-overview.html' },
      { label: 'Web frontend', href: '/docs/js-overview.html' },
      { label: 'Data science', href: '/docs/data-science-overview.html' },
      { label: 'Android', href: '/docs/android-overview.html' },
    ],
  },
  { label: 'Docs', href: '/docs/home.html' },
  { label: 'Community', href: '/community/' },
  { label: 'Teach', href: '/education/' },
  {
    label: 'Play',
    href: 'https://play.kotlinlang.org',
    submenu: [
      { label: 'Playground', href: 'https://play.kotlinlang.org' },
      { label: 'Hands-on', href: '/docs/kotlin-hands-on.html' },
      { label: 'Examples', href: 'https://play.kotlinlang.org/byExample' },
      { label: 'Koans', href: 'https://play.kotlinlang.org/koans' },
    ],
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (label: string, hasSubmenu: boolean) => {
    if (!hasSubmenu) {
      setActiveDropdown(null);
      return;
    }
    setActiveDropdown(prev => (prev === label ? null : label));
  };

  return (
    <header className={styles.nav} ref={navRef}>
      <div className={styles.inner}>
        <div className={styles.logoWrapper}>
          <a href="https://kotlinlang.org/" className={styles.logo}>
            <img src={kotlinLogo} alt="Kotlin" />
            <span className={styles.logoText}>Kotlin</span>
          </a>
          <a href="https://kotlinlang.org/docs/releases.html" className={styles.version}>
            v1.6.20
          </a>
        </div>

        <ul className={styles.links}>
          {navLinks.map((link) => {
            const hasSubmenu = !!link.submenu;
            const isActive = activeDropdown === link.label;

            return (
              <li key={link.label} className={styles.navItem}>
                <a
                  href={hasSubmenu ? undefined : link.href}
                  className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
                  onClick={(e) => {
                    if (hasSubmenu) e.preventDefault();
                    handleNavClick(link.label, hasSubmenu);
                  }}
                >
                  {link.label}
                </a>

                {hasSubmenu && isActive && (
                  <div className={styles.dropdown}>
                    {link.submenu!.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className={styles.dropdownItem}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <button
          className={styles.burger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

     
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <div key={link.label}>
            <a
              href={link.submenu ? undefined : link.href}
              className={styles.mobileLink}
              onClick={() => !link.submenu && setIsOpen(false)}
            >
              {link.label}
            </a>
            {link.submenu && (
              <div className={styles.mobileSubmenu}>
                {link.submenu.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={styles.mobileSubmenuItem}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}