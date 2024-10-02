import {Link} from "react-router-dom"
import short from "short-uuid"
export default function Header() {
  const heads = [
    {
      name:"Home",
      path: "/"
    },
    {
      name:"About",
      path: "/about"
    },
    // {
    //   name:"Create Account",
    //   path: "/createAccount"
    // },
    // {
    //   name:"Login",
    //   path: "/login"
    // },
  ]
  return (
    <div className='flex justify-between px-10 w-full '>
      <div>
        <Link to={"/"}>
        SHARE.CODE
        </Link>
      </div>
      <div className=' flex  gap-10   '>
      {
        heads.map((head, index) => {
          return (
            <Link to={head.path} key={index}>
              {head.name}
            </Link>
          )
      })
      
    }
        <a target="blank" href={`http://localhost:5173/code/`+short.generate()}>Sheet</a>


</div>
    </div>
  )
}
