import {Link} from "react-router-dom"
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
    {
      name:"Create Account",
      path: "/createAccount"
    },
    {
      name:"Login",
      path: "/login"
    },
  ]
  return (
    <div className='flex justify-between px-10 w-full '>
      <div>
        SHARE.CODE
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

</div>
    </div>
  )
}
