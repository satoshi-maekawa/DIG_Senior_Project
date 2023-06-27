import { useContext, useEffect } from "react";
import { VariableContext } from "../../App";
import { useState } from "react";
const fetchURL = process.env.NODE_ENV === "production" ? "https://dig-zamas.com:3456" : "http://localhost:3456";

export default function UserProfile(){
    const [, ,postedArray , , , userData, ,src,setSrc] = useContext(VariableContext);
    const [cont, setCont] = useState("career")

    useEffect(()=>{
        (async ()=>{
            const res = await fetch(fetchURL+`/aws/${userData["user-id"]}`).then(e=>e.json());
            setSrc(res.src);
        })()
    })
    
    return(
        <section className="left">
            <figure>
                {src.src !== "" 
                 ? <img src={`data:image/png;base64,${src}`} alt="profile" />
                 : <img src="./systemImages/hoshi52.png" alt="profile" />
                }
                <h2>{`${userData["first-name"]} ${userData["last-name"]}`}</h2>
            </figure>
            <table>
                <tbody>
                    <tr>
                        <th>🖌️</th>
                        <td>{postedArray.filter(e => e["user-id"]===userData["user-id"]).length}</td>
                        <th>⭐️</th>
                        <td>{postedArray.filter(e => e["user-id"]===userData["user-id"]).map(e=>e.zamas).reduce((init,val)=>{return init+val},0)}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <nav className="profhead">
                    <label>
                        <input name="a1" id="career" style={{display:"none"}} type="radio" onChange={e=>setCont(e.target.id)} defaultChecked={true}/>
                        <p>career</p>
                    </label>
                    <label>
                        <input name="a1" id="position" style={{display:"none"}} type="radio" onChange={e=>setCont(e.target.id)}/>
                        <p>position</p>
                    </label>
                    <label>
                        <input name="a1" id="character" style={{display:"none"}} type="radio" onChange={e=>setCont(e.target.id)}/>
                        <p>character</p>
                    </label>
                </nav>
                <article>
                    {
                        (()=>{
                            switch(cont){
                                case "career":
                                    return (
                                        <>
                                        <h3>異動歴</h3>
                                        {userData.career.map((e,ind)=>{
                                            return <li key={ind} className="listcont">{`${e["date-c"]}`} <br />　　{`${e.career}`}</li>
                                        })}
                                        </>
                                    )
                                case "position":
                                    return(
                                        <>
                                        <h3>{userData["role"]}</h3>
                                        </>
                                    )
                                case "character":
                                    return (
                                        <>
                                            <h3 style={{marginBottom:"1vh"}}>{userData["16person"]}</h3>
                                            <hr />
                                            <p style={{margin:"0",backgroundColor:"lightgray"}}>{userData.supple}</p>
                                            <hr />
                                            <a href="https://www.16personalities.com/ja/%E6%80%A7%E6%A0%BC%E8%A8%BA%E6%96%AD%E3%83%86%E3%82%B9%E3%83%88" target="_blank" rel="noreferrer">
                                                <img src="https://www.16personalities.com/static/images/system/logo.svg" style={{maxWidth:"80%",marginTop:"1.5vh",}} alt="test" />
                                            </a>
                                        </>
                                    )
                            }
                        })()
                    }
                </article>

            </div>
        </section>
    );
}