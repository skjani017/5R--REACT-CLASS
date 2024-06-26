import React from "react";
import { Card } from "./component/card/card.js";
import { ImageComponent } from "./component/image/imageComponent.js";
import { ListParentOrdered } from "./component/list/listParent.js";
import ButtonComponent from "./component/button/button.js";
import "./index.css";
import ButtonComponentClass from "./component/class-components/button.js";
import TodoComponent from "./component/todo/todo.js";



const App = () => {
    const isLogin = true;

  return (
    <div>
     {/* <ButtonComponentClass/>  */}
     <TodoComponent/>
       </div>
  );
};

export default App;
