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
     <ImageComponent src="https://wallpapers.com/images/high/vijay-devarakonda-red-suit-1ptc8fcbqr1r31fj.webp" 
      width="100"
       height="100"
       alt="DQ"
       /> 

<ImageComponent src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/dq_0-three_four.jpg?VersionId=kHxjnQkOaE0QJuRZqvZj0yr4rDK.Cb2D" 
      width="100"
       height="100"
       alt="DQ"
       /> 

    </div>
  );
};


export default App ;
