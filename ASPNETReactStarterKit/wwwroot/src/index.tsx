import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

export function BindDynamicComponent(component:JSX.Element,html:HTMLElement)
{
 
  return ReactDOM.render(
    <div>
        {component}
    </div>
   ,
   html
  );
}



export {
  Hello
}







