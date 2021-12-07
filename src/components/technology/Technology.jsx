import Progressbar from './Progressbar'
import './technology.css'
import { DiDotnet, DiReact, DiHtml5, DiPython } from 'react-icons/di';

export default function Technology() {
    
    return (
        <div className="technology-wrapper">
            <div className="technology-container">
                <h2>Technology</h2>
                <p>I've worked with a range of technologies in the web & Mobile development world. From Back-end To UI/UX design</p>
                <ul>
                    <li>
                    <picture>
                        <DiReact size="3rem"/>
                        <h4>Front-End</h4>
                        <p>Experience in  ReactJS</p>
                    </picture>
                    </li>
                    <li>
                    <picture>
                        <DiDotnet size="3rem" />
                        <h4>Back-End</h4>
                        <p>Experience in asp.net core Web Api and SQL databases</p>
                    </picture>
                    </li>
                    <li>
                    <picture>
                        <DiHtml5 size="3rem" />
                        <h4>UX/UI</h4>
                        <p>Hands on experience in HTML5 and CSS </p>
                    </picture>
                    </li>
                  
                    <li>
                    <picture>
                        <DiPython size="3rem" />
                        <h4>ML & Ai</h4>
                        <p>Master in Machine learning & Artificial Intelligience</p>
                    </picture>
                    </li>
                 
                </ul>
                <div className="t-left">
                    <h4 style={{textAlign:'center'}}>Frontend</h4>
                <Progressbar bgcolor="#59b256" progress='95'  height={20} label="HTML5 & CSS3"/>
                <Progressbar bgcolor="#59b256" progress='90'  height={20} label="Javascript / Typescript"/>
                <Progressbar bgcolor="#59b256" progress='88'  height={20} label="ReactJS"/>
                <Progressbar bgcolor="#59b256" progress='60'  height={20} label="Razor Pages"/>

                
              
                </div>
                <div className="t-right">
                <h4 style={{textAlign:'center'}}>Backend</h4>
                <Progressbar bgcolor="#59b256" progress='95'  height={20} label="C# "/>
                <Progressbar bgcolor="#59b256" progress='90'  height={20} label="asp.net core WebApi "/>
                <Progressbar bgcolor="#59b256" progress='90'  height={20} label="MS SQL"/>
                <Progressbar bgcolor="#59b256" progress='65'  height={20} label="MongoDb"/>
                </div>
            </div>
        </div>
    )
}
