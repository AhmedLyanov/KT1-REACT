import React from "react";
import './module.css'
import section1 from '../images/Section 1.png'
function Main(){
    return(
        <main>

        <section class="Section-Main-Element-1" role="main">

            <div class="Content-Section-1-Left">
               <div class="Description-Content-Left">
                <div class="Title-Section-1">
                    <h1>Что мы предлагаем</h1>
                </div>
                <div class="Description-Section-1">
                    В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда,
                    ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО 
                    велосипеда помогает избежать многих проблем и дорогого ремонта.  
                    Все работы выполняем качественно и с душой. 
                </div>
               </div>
            </div>
            <div class="Image-Element-Section-1">
                <picture>
                     <img src={section1} alt=""/>
                </picture>
            </div>
            
        </section>
        <section class="Section-Main-Element-2" role="main">

            <div class="Description-Content-Center">
                <div class="Description-Section-2-Type-1">
                    Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.
                </div>
                <div class="Description-Section-2-Type-2">
                    А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.
                </div>
            </div>

        </section>
        <section class="Section-Main-Element-3" role="main">
            <div class="Cards-Container">
                <div class="Card-Element-Section-3-Type-1">
                    <div class="Div-Line-Box">
                        Годовое ТО
                    </div>
                </div>
                <div class="Card-Element-Section-3-Type-2">
                    <div class="Div-Line-Box">
                        Выравнивание колес
                    </div>
                </div>
                <div class="Card-Element-Section-3-Type-3">
                    <div class="Div-Line-Box">
                        Настройка переключателей
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Main