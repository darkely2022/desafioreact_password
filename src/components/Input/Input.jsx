

const Input =(props)=>{

    const validapassword =(e)=>{
        props.setIsPasswordValid(e.target.value===props.password)
    }

    return(
        <div>
        <label>Nombre</label>
        <input></input>
        <br></br>
        <label>Contraseña</label>
        <input onChange={validapassword}></input>
        </div>
    )  

}

export default Input;