import Link from 'next/link'

export default function Page({ page }) {
  return (
    <li>
      <Link href="/page/[id]" as={`/page/${page.id}`}>
        <a>{page.title}</a>
      </Link>
    </li>
  )
}
