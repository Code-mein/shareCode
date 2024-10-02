
import short from "short-uuid"
export default function Home() {

  return (
    <div>
    <a href={`http://localhost:5173/code/`+short.generate()}>OPEN A SHEET</a>
    </div>
  )
}
