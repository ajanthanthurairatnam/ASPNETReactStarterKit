import * as React from "react";
import Button from '@material-ui/core/Button';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <h1>
   Configure Hello {props.compiler} and {props.framework}!
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </h1>
);  
