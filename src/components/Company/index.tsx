type Props = {
  style?: React.CSSProperties
}

export default function CompanyCom({ style }: Props) {
  return (
    <>
      <div className='h-full bg-yellow-100 grid place-items-center' style={style}>
        <h1>Companyコンポーネント</h1>
      </div>
    </>
  )
}
