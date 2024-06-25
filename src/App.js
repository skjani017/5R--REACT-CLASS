import React from "react";
import { Card } from "./component/card/card.js";
import { ImageComponent } from "./component/image/imageComponent.js";
import { ListParentOrdered } from "./component/list/listParent.js";
import ButtonComponent from "./component/button/button.js";
import "./index.css";
import FirstComponent from "./component/bootstrap/first-component.js";
import CustomAccordion from "./component/accordion/accordion.js";
import CustomProgressBar from "./component/progress-bar/progress-bar.js";
import { feakData } from "./component/javascript/data.js";
import Heading1, { Heading3, Heading6 } from "./component/heading/headings.js";
import CustomList from "./component/list/customList.js";
import { recipeData } from "./component/javascript/recipeData.js";

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
      {/* <ButtonComponent
 text="Login"
 bgColor="red"
 height={100}
 width={100}
 onPress={()=>{}}/>

<ButtonComponent
 text="Signup"
 bgColor="green"
 height={100}
 width={50}
 onPress={()=>{}}/> */}

      {/* {feakData.map((eachProduct) => {
        return (
          <>
            <Heading1 title={eachProduct.title} />
            <Heading3 title={eachProduct.description} />
            <ImageComponent
              src={eachProduct.image}
              width={100}
              height={100}
              alt={eachProduct.title}
            ></ImageComponent>

            <ButtonComponent
              text={`$ ${eachProduct.price}`}
              bgColor="green"
              height={30}
              width={100}
              onPress={() => {}}
            />

            <Heading6>
            <Heading1 title={eachProduct.title} />
              </Heading6>
          </>
        );
      })} */}

      {/* 
      <CustomList list={["apple","banana","Orange"]}/>
      <CustomList list={["rcb","srh","mi"]}/>
      <CustomList list={["fish","shark","dolphin"]}/>
      <Heading1 title={"Ingredients to prepare"} />
      <CustomList
      list={[
        "pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "olives oil",
        "Salt and pepper to taste",
      ]}
      />
       <Heading1 title={"Instructions to prepare"} />
      <CustomList
      list={[
        "Preheat the oven 475F (245C)",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ]}
      /> */}

{recipeData.map((eachRecipe, index) => {
        const {
          name: dishName,
          image,
          ingredients,
          instructions,
          id,
        } = eachRecipe;
        return (
          <React.Fragment key={id}>
            <Heading1 title={`${id} ${dishName}`} />
            <ImageComponent
              src={image}
              width={100}
              height={100}
              alt={dishName}
            />

            <Heading1 title={"Ingredients to prepare"} />
            <CustomList list={ingredients} />

            <Heading1 title={"Instructions to prepare"} />
            <CustomList list={instructions} />
          </React.Fragment>
        );
      })}


      
    </div>
  );
};

export default App;
