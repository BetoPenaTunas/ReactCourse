import React from 'react'

export const User = ({name,id,email}) => {
  return (
    <div>
        <p>Id:{id}, Nombre:{name}, Email:{email}</p>
    </div>
  )
}

export default User