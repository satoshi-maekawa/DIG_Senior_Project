import React, { useContext, useState } from "react";
import "./Login.css";
import { NewValContext } from "../App2";
import { Auth } from 'aws-amplify';


export default function Login(){
    const [, , , , , setUser, , setCognito] = useContext(NewValContext);
    const [formValues, setFormValues] = useState({"user-id":"", password:""});

    async function signIn() {
      if(formValues["user-id"]!=="" && formValues["password"] !== ""){
        if(!isNaN(Number(formValues["user-id"]))){
          try {
            const user = await Auth.signIn(String(formValues["user-id"]), formValues["password"]);
            if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
              await Auth.completeNewPassword(user, formValues["password"]);
            };
            setCognito(1);
            setUser(user.username)
          } 
          catch (error) {
            alert("IDまたはパスワードが間違っています")
          };
        }else{
          alert("UserIDに数値以外の文字が入力されています")
        }
      }else{
        alert("UserIDまたはパスワードが入力されていません")
      }
    }

  return (
    <>
        <section className="formContainer">
        <article>
            <nav>
                <h1>KMT ZAMAS</h1>
            </nav>
            <section>
                <p>USER ID：</p>
                <input type="text" pattern="^[0-9]+$" name="user-id" placeholder="user id  (※number only)" value={formValues["user-id"]} 
                minLength={4} onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}/>
                <p>PASSWORD：</p>
                <input type="password" pattern="^[a-zA-Z0-9]+$" name="password" placeholder="password" value={formValues.password} 
                minLength={4} onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} onKeyPress={e=>{if (e.code==="Enter"){signIn()}}}/>
                <button onClick={signIn} >LOGIN</button>
            </section>
        </article>
        </section>
    </>
  );
};
