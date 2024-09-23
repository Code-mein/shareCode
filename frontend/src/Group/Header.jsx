import React from 'react'

export default function Header() {
  const heads = [
    "Home",
    "About",
    "Log In",
    "Create Account",
  ]
  return (
    <div className='flex justify-between px-10 w-full '>
      <div>
        SHARE.CODE
      </div>
      <div className=' flex  gap-10   '>
      {
        heads.map((head) => {
          return (
            <div>
              {head}
            </div>
          )
      })
    }

</div>
    </div>
  )
}
