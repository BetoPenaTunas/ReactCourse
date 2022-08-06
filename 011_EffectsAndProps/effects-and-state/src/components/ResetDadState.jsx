const ResetDadState = ({users,setusers}) => {
  return (
    <div style={{margin:"3rem"}}>
        <button onClick={()=>setusers([])}>Update State</button>
    </div>
  )
}

export default ResetDadState