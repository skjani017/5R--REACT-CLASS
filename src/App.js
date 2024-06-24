import React from "react";
import { Card } from "./component/card/card.js";
import { ImageComponent } from "./component/image/imageComponent.js";
import { ListParentOrdered } from "./component/list/listParent.js";
import ButtonComponent from "./component/button/button.js";
import "./index.css";
import FirstComponent from "./component/bootstrap/first-component.js";
import CustomAccordion from "./component/accordion/accordion.js";
import CustomProgressBar from "./component/progress-bar/progress-bar.js";

const App = () => {
  const isLogin = true;
  // if (isLogin) {
  //   return (
  //     <>
  //       <h3>Wellcome user good afternoon</h3>
  //       <ImageComponent />
  //       <Card />
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h3>Please login to access the app</h3>
  //     </>
  //   );
  // }
  return (
    <div>
      <CustomProgressBar/>
     <FirstComponent/>
    

    </div>
  );
};

export default App;
