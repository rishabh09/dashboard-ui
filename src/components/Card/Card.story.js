import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card";

storiesOf("Card", module).add("with text", () => (
  <div>
    <Card>
      Basic Card <br /> Multi Line
    </Card>
    <Card>
      Basic Card <br /> Multi Line
    </Card>
    <Card>
      Basic Card <br /> Multi Line
    </Card>
  </div>
));
