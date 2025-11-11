import { Link,useNavigate } from "react-router-dom";


const LoginPage = () => {

    const handleLogin = (e)=>{
        e.preventDefault()
        const navigate = useNavigate()
        
        const peticion = fetch(`http://localhost:4000/api/login`,{
            method:`POST`,
            body:{username,password},
            headers:
            {
                "Content-Type":"aplication/json"
            },
        })
    }

  return (
    <>
      <h2>LoginPage</h2>
    </>
  );
};
