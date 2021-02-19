import styles from './main_navigation.module.css'
import Link from 'next/link'

export default function MainNavigation() {
  const items = [
    {
      link: "tech",
      name: "Technologies",
      key: "tech"
    },
    {
      link: "mission",
      name: "Mission",
      key: "mission"
    },
    {
      link: "office",
      name: "Office",
      key: "office"
    },
    {
      link: "careers",
      name: "Careers",
      key: "careers"
    }
  ]

  const links = items.map((link) => {
      return (
        <li>
          <Link href={link.link}>
            <a>{link.name}</a>
          </Link>
        </li>
      );
  });

  return (
    <ul className={styles.main_navigation_menu}>
      {links}
    </ul>
  )
}
