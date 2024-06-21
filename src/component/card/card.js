import ButtonComponent from "../button/button"
import { Heading1 } from "../heading/headings"
import { ImageComponent } from "../image/imageComponent"
import { ListParentOrdered } from "../list/listParent"



export const Card = () => {
    return( <div>
        <Heading1/>
        <ImageComponent/>
        <ListParentOrdered/>
        <ButtonComponent/>



        
    </div>
    );
};