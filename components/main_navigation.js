import styles from './main_navigation.module.css'
import Link from 'next/link'

export default function MainNavigation() {
  const items = [
    {
      link: "tech",
      name: "Technologies",
    },
    {
      link: "mission",
      name: "Mission",
    },
    {
      link: "office",
      name: "Office",
    },
    {
      link: "careers",
      name: "Careers",
    }
  ]

  const links = items.map((link, i) => {
    return (
      <li key={i}>
        <Link
          href={"/" + link.link}
        >
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
