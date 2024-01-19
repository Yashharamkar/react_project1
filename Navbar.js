import React from 'react'

function Navbar({ItemFilter,menuList}) {
  return (
    <>
       <nav className='navbar'>
            <div className='btn-group'>
                {
                    menuList.map((currElement)=>{
                        return(<button className='btn-group__item' onClick={()=>
                            ItemFilter(currElement)
                        }>{currElement}</button>)
                    })
                }

                
             
                
            </div>
        </nav>
    </>
  )
}

export default Navbar
