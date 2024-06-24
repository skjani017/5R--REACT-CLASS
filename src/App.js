import React from "react";
import { Card } from "./component/card/card.js";
import { ImageComponent } from "./component/image/imageComponent.js";
import { ListParentOrdered } from "./component/list/listParent.js";
import ButtonComponent from "./component/button/button.js";
import "./index.css";

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
      {/* {isLogin ? (
        <div>
          <h3>Wellcome user good afternoon</h3>
          <ImageComponent />
          <Card />
        </div>
      ) : (
        <h3>Please login to access the app</h3>
      )} */}

      {isLogin && (
        <React.Fragment>
           {/* <button onClick={()=>{}} className="buttonText">
            Click me
          </button> */}
          <h3>Wellcome user good afternoon</h3>
          {/* <ListParentOrdered /> */}
          {/* <ImageComponent />
          <Card /> */}
          <ButtonComponent/>
         
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
