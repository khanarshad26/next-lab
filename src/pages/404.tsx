import Link from "next/link"

const Error = ({statusCode = 404, title = 'Oops! Page Not Found'}) => {
  return (
    <>
    <div className="error-page">
      <div className="e404">{statusCode}</div>
      <div className="pageNoFound">{title}</div>
      <div className="go-back">Please click <Link href="/" >here</Link> to go back</div>
    </div>
    </>
  )
}

export default Error