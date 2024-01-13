import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import './LoginForm.css';


  const LoginForm = ({ type }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [phone, setPhone] = useState("");
    const [regis, setRegis] = useState('none');
  
    
    const checkType = () => {
      if (type === 'Register') {
        setRegis('block');
      }
    };
    
    useEffect(() => {
      checkType();
    },[type]);

    const submitFunc= ()=>{
      const data={
        name:name,
        email:email,
        pass:pass,
        phone:phone
      }
      console.log(data);
    }



  return (
    <div className='loginform'>
      <div className="login_div" style={{ backgroundImage: `url("https://imgs.search.brave.com/9b9UUaJ5Qkk_gnPVE_MXpqoqJQSbNKXhRUxm3_jbS7c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzEwMTQvNTc1/LzY2NS9tdW5uYXIt/aGlsbC1pbmRpYS13/YWxscGFwZXItcHJl/dmlldy5qcGc")` }}>
        <div className="form_div">
          <div className="login_left"></div>



          <div className="login_right">


            <h1 className='formHeading'>{type}</h1>
            <div className="form_input">

              <div className="div_input" style={{ display: regis }}>
                <ion-icon name="person-outline"></ion-icon>
                <input type="text" name="" value={name} id="name" placeholder='Name' onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="div_input" style={{ display: regis }}>
                <ion-icon name="call-outline"></ion-icon>
                <input type="text" name=""  value={phone} id="phone" placeholder='Phone No' onChange={(e) => setPhone(e.target.value)}/>
              </div>

              <div className="div_input">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" name="" value={email} id="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="div_input">
                <ion-icon name="lock-open-outline"></ion-icon>
                <input type="password" value={pass} name="" id="pass" placeholder='Password' onChange={(e) => setPass(e.target.value)}/>
              </div>

              <div className="btn">

                <button className='submitBtn' onClick={submitFunc}>{type}</button>
                <div>

                  <a>Forgot Password?</a>
                  {
                    type === "Register" ? <Link to='/login' className='hotLink'><p>Login</p></Link> :
                      <Link to='/register' className='hotLink'><p>Register</p></Link>
                  }
                </div>
              </div>

            </div>
            <div className="oAuth centerElements">
              <ion-icon name="logo-google"></ion-icon>
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
