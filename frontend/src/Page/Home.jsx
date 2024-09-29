import {useNavigate} from "react-router-dom"
import short from "short-uuid"
export default function Home() {

    const navigation = useNavigate()

    const redirectButton = () => {
        const id = short.generate()
        navigation(`/code/${id}`, {
            replace: true
        }) 
        }
  return (
    <div>
    <button onClick={redirectButton}>Code</button>
    </div>
  )
}
