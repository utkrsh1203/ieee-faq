// import logo from "./logo.svg";
import "./App.css";
import Faq from "./faq2.png";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function myFunction(i) {
  // var j = i + 1;
  var s = "#ques" + i;
  var ans = document.querySelector(s + " .ans");
  // console.log(x);
  var plus = document.querySelector(s + " .plus");
  var minus = document.querySelector(s + " .minus");

  var allAns = document.querySelectorAll(".ans");
  var allPlus = document.querySelectorAll(".plus");
  var allMinus = document.querySelectorAll(".minus");

  // var elems = document.querySelectorAll(className);
  // , length = elems.length;

  if (ans.style.display === "none") {
    // document.querySelector("#ques1 .ans").style.display = "none";

    for (let i = 0; i < allAns.length; i++) {
      allAns[i].style.display = "none";
    }
    for (let i = 0; i < allPlus.length; i++) {
      allPlus[i].style.display = "block";
    }
    for (let i = 0; i < allMinus.length; i++) {
      allMinus[i].style.display = "none";
    }

    ans.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
  } else {
    minus.style.display = "none";
    plus.style.display = "block";
    ans.style.display = "none";
  }
}

// import data from "./data";
function App() {
  return (
    <div className='App'>
      <section>
        <div className='container'>
          <h1>Frequently Asked Questions</h1>
          <div className='image'>
            <img className='mainimage' src={Faq} />
          </div>
          <div className='faq'>
            {data.map((item, i) => {
              return (
                <div key={i} className='que' id={item.id}>
                  <button className='link' onClick={() => myFunction(i)}>
                    {item.ques}
                    <FaPlus className='plus' id='plus' />
                    <FaMinus className='minus' id='minus' />
                  </button>
                  <div className='ans'>
                    <p>{item.ans}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

const data = [
  {
    id: "ques0",
    ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam perspiciatis veniam!",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus est eaque cum culpa ratione itaque in expedita,repellendus incidunt provident ex nihil praesentium quas iureunde repellat dolorem deserunt quidem aperiam nemo sed neque.Rem, accusantium. Odio cumque, itaque corporis nobis sequi, etconsequatur iure rerum eveniet, deserunt vero quam!",
  },
  {
    id: "ques1",
    ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam perspiciatis veniam!",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus est eaque cum culpa ratione itaque in expedita,repellendus incidunt provident ex nihil praesentium quas iureunde repellat dolorem deserunt quidem aperiam nemo sed neque.Rem, accusantium. Odio cumque, itaque corporis nobis sequi, etconsequatur iure rerum eveniet, deserunt vero quam!",
  },
  {
    id: "ques2",
    ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam perspiciatis veniam!",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus est eaque cum culpa ratione itaque in expedita,repellendus incidunt provident ex nihil praesentium quas iureunde repellat dolorem deserunt quidem aperiam nemo sed neque.Rem, accusantium. Odio cumque, itaque corporis nobis sequi, etconsequatur iure rerum eveniet, deserunt vero quam!",
  },
  {
    id: "ques3",
    ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam perspiciatis veniam!",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus est eaque cum culpa ratione itaque in expedita,repellendus incidunt provident ex nihil praesentium quas iureunde repellat dolorem deserunt quidem aperiam nemo sed neque.Rem, accusantium. Odio cumque, itaque corporis nobis sequi, etconsequatur iure rerum eveniet, deserunt vero quam!",
  },
  {
    id: "ques4",
    ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam perspiciatis veniam!",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus est eaque cum culpa ratione itaque in expedita,repellendus incidunt provident ex nihil praesentium quas iureunde repellat dolorem deserunt quidem aperiam nemo sed neque.Rem, accusantium. Odio cumque, itaque corporis nobis sequi, etconsequatur iure rerum eveniet, deserunt vero quam!",
  },
];

export default App;
