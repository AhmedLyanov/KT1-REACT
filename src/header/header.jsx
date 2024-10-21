import React from "react";
import './module.css'
import logo from '../images/Logotype.svg'
import Dino from '../images/Dino.png'

function Header(){
    return(
        <header>
        <div class="Header-Content-Top">

            <div class="logotype-Container">
                <picture>
                    <img src={logo} width="118px" height="119px"/> 
                </picture>
            </div>


            <div class="Navbar-Box-Header">
                <nav>
                    <div class="Button-Click-Header" id="Button-Header-Type-1">
                        <a href="#">О нас</a>
                    </div>
                    <div class="Button-Click-Header" id="Button-Header-Type-2">
                        <a href="#">Услуги</a>
                    </div>
                    <div class="Button-Click-Header" id="Button-Header-Type-3">
                        <a href="#">Аренда</a>
                    </div>
                </nav>
            </div>


            <div class="Main-Button-Header">
                <button class="Header-Button" id="">Связаться</button>
            </div>
        </div>
        <div class="Header-Content-Center">
            <div class="Main-Text-Header-Content-Center">
                <div class="Title-Text-Header-Center">
                    <h1>Веломастерская “Велозар”</h1>
                </div>
                <div class="Description-Header-Center">
                    Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, 
                    которые смогли превратить свое увлечение и хобби в профессию. 
                    Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил 
                    Вам только радость и удовольствие от езды.
                </div>
            </div>
            <div class="Image-Dino-Box">
                <picture>
                    <img src={Dino} alt="Фото динозавра"  width="543px" height="533x"/> 
                </picture>
            </div>
        </div>



    </header>
    )
}

export default Header