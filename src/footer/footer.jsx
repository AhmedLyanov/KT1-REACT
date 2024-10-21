import React from "react";
import './module.css'
import footerImg from '../images/Footer.png'

function Footer() {
    return(
        
    <footer>

    <div className="Content-Footer-Left">
       <img src={footerImg} width="637" height="800px"/> 
    </div>

    <div className="Content-Footer-Right">
        <div className="Table-Description">
            <div className="Text-Content-Footer-Right-1">
                Прокат велосипедов
            </div>
            <div className="Text-Content-Footer-Right-2">
                У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!
            </div>
        </div>
    </div>

</footer>

    )
}

export default Footer