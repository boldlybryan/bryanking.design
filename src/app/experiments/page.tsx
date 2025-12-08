import Link from 'next/link'

export default function ExperimentsPage() {
  return (
    <div>
      <Link href="/" className='block mb-4'>Go home</Link>
      <h1 className="heading mb-2">Experiments</h1>
      <ul className="list-disc list-inside">
        <li>
          <Link href="/experiments/query/" className='underline'>Segment Builder</Link>
        </li>
      </ul>
    </div>
  )
}