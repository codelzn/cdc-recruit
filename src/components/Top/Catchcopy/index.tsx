import { useTopData } from '@/store'

export default function Catchcopy() {
  const catchcopy = useTopData((state) => state.catchcopy)
  return (
    <>
      <h1>{catchcopy.title}</h1>
    </>
  )
}
