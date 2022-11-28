import companyData from '@/data/company.json'

type Props = {
  style?: React.CSSProperties
}

export default function CompanyCom({ style }: Props) {
  return (
    <>
      <div className='bg-yellow-100 h-[200%] grid place-items-center' style={style}>
        <h1>Companyコンポーネント</h1>
      </div>
    </>
  )
}
