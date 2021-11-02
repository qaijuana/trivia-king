import { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Label from "@radix-ui/react-label";
import { RadiobuttonIcon, CircleIcon } from "@radix-ui/react-icons";
import categoryList from "../categoryList";

const ShowCategories = (props) => {
  const CategoryCheckbox = (props) => {
    const [checked, setChecked] = useState([]);
    const toggleChecked = () => {
      console.log("name", props.name);
      if (checked === false) {
        setChecked(true);
      } else {
        setChecked(false);
      }
      //   props.handleChange(checked, props.title);
    };
    return (
      <>
        <div className="flex items-center text-red-600 py-1">
          {/* <Checkbox.Root
            id={props.index}
            checked={checked}
            onCheckedChange={() => {
              toggleChecked();
            }}
            className="w-4 h-4"
            name="category"
            value={props.title}
          >
            <Checkbox.Indicator>
              {checked === "indeterminate" && <CircleIcon />}
              {checked === true && <RadiobuttonIcon />}
            </Checkbox.Indicator>
          </Checkbox.Root>
          <Label.Root htmlFor={props.index} className="pl-1">
            {props.title}
          </Label.Root> */}
          <input
            id={props.index}
            type="checkbox"
            checked={checked}
            onChange={(event) => {
              props.handleChange(event);
              toggleChecked();
            }}
            name={props.title}
            // value={props.title}
          />
          <label htmlFor={props.index}>{props.title}</label>
        </div>
      </>
    );
  };

  return categoryList.map((category, index) => {
    return (
      <CategoryCheckbox
        key={index}
        title={category}
        handleChange={props.handleChange}
        index={index}
        name={props.categories}
      />
    );
  });
};

export default ShowCategories;
