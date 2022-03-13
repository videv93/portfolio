import useSWR from 'swr'
import Person from '../components/Person'
import Page from '../components/Page'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/page', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((p, i) => (
        <Page key={i} page={p} />
      ))}
    </ul>
  )
}
