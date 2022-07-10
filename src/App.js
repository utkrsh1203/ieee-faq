import logo from './logo.svg';
import './App.css';
import Faq from './faq2.png'
import Plus from './plus.png'
import Minus from './minus.png'
function App() {
  return (
    <div className="App">
        <section>
          
      <div class="container">
      <h1>Frequently Asked Questions</h1>
        <div class="image">
          <img class="mainimage" src={Faq}/>
        </div>
          <div class="faq">
          
               {/* <!-- question1--> */}
            <div class="que" id="question1">
             <a class="link" href="#question1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam perspiciatis veniam!
              <img class="plus" src={Plus}/>
               <img  class="minus"src={Minus}/>
              </a>
             <div class="ans">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus est eaque cum culpa ratione itaque in expedita, repellendus incidunt provident ex nihil praesentium quas iure unde repellat dolorem deserunt quidem aperiam nemo sed neque. Rem, accusantium. Odio cumque, itaque corporis nobis sequi, et consequatur iure rerum eveniet, deserunt vero quam!</p>

             </div>
            </div>

            {/* <!-- question2--> */}
            <div class="que" id="question2">
              <a class="link" href="#question2">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam perspiciatis veniam!
               <img class="plus" src={Plus}/>
               <img  class="minus"src={Minus}/>
                   
               </a>
              <div class="ans">
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorum maxime distinctio ducimus laborum, delectus quo iusto perspiciatis quis ex.
          </p>
              </div>
             </div>

               {/* <!-- question3--> */}
            <div class="que" id="question3">
              <a class="link" href="#question3">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam perspiciatis veniam!
               <img class="plus" src={Plus}/>
               <img  class="minus"src={Minus}/>
               </a>
              <div class="ans">
                  <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat itaque, voluptatum iure dolor placeat omnis ut dolorem iusto veniam cum doloribus, sapiente harum perspiciatis inventore, officia atque natus eius nobis illum eos at velit. Accusamus maiores, tempore eos autem error, repudiandae dignissimos nam officiis voluptates, optio quas cupiditate culpa.</p>
              </div>
             </div>

               {/* <!-- question4--> */}
            <div class="que" id="question4">
              <a class="link" href="#question4">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam perspiciatis veniam!
               <img class="plus" src={Plus}/>
               <img  class="minus"src={Minus}/>
               </a>
              <div class="ans">
                  <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vel repellendus natus! Aperiam, cum dolore fuga facere necessitatibus illum illo dolor eius tenetur sequi quibusdam harum? Amet, mollitia atque! Et excepturi facere consectetur! Nemo non cupiditate reiciendis nulla. Fuga delectus sunt fugiat veritatis dolores exercitationem earum voluptates cupiditate quidem facilis!</p>
              </div>
             </div>
               {/* <!-- question5--> */}
            <div class="que" id="question5">
              <a class="link" href="#question5">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam perspiciatis veniam!
               <img class="plus" src={Plus}/>
               <img  class="minus"src={Minus}/>
               </a>
              <div class="ans">
                  <p>

                  
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis sequi sapiente omnis odit rem eaque animi eius, qui cum optio est molestiae saepe! Saepe alias nesciunt harum adipisci maiores error eos ab, facilis odit vel iure omnis recusandae nobis amet sit expedita obcaecati tenetur, similique officia accusantium velit! Laboriosam!</p>
              </div>
             </div>


          </div>
      </div>
  </section>
    </div>
    
  );
}

export default App;
