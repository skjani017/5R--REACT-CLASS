import ButtonComponent from "./component/button/button.js";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./component/heading/headings.js";
import { ImageComponent } from "./component/image/imageComponent.js";

import { ListParentOrdered,
  ListParentUnordered } from "./component/list/listParent.js";

import {Card} from "./component/card/card.js"

const App = () => {
  return (
    <>
       <h3>Hai 3:11 pm code commit </h3>
       {[1,2,3,4].map ((num) => (
          <Card></Card>
       ))}
    </>
  );
};

export default App;
