import { useState } from "react";

function App() {


  const [todos, settodos] = useState([])
  const [input, setinput] = useState("")
  function addtodo(e){
    e.preventDefault();
    if(input.trim()){
      settodos([...todos,input.trim()]);
      setinput("")
    }

  }
  function deleteTodo(index){
    const newtodos=todos.filter((_,i)=>i!==index)
    settodos(newtodos)


   

  }




  return (
    <>
      <div className="w-full h-screen ] bg-zinc-900 p-[10vw] flex flex-col justify-center items-center  ">
        <div className="flex justify-center w-fit ">
          <form onSubmit={addtodo} className="flex justify-center  gap-[1vw]">
            <input
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
              className=" outline-none border-none text-2xl  w-[20vw] h-[2vw] text-black"
            ></input>
            <button className=" flex justify-center items-center  w-[2vw] h-[2vw] rounded-md text-white bg-blue-500 text-2xl px-[3vw] py-[1.2vw] ">
              Add
            </button>
           
          </form>
        </div>

        <ul>
          {todos.map((item, index) => {
            return (
              <li
                className=" mb-[1vw] mt-[1vw] w-[40vw] text-2xl bg-white px-[1vw] py-[1vw]"
                key={index}
              >
                {item}

                <button
                  onClick={() => deleteTodo(index)}
                  className="ml-4 text-red-500 ml-[30vw]"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
