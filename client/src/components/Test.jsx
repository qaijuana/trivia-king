import { useState, useEffect } from "react";
import { SquareIcon, CheckIcon } from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Label from "@radix-ui/react-label";

const Test = () => {
  const [testData, setTestData] = useState({});
  const [checked, setChecked] = useState("indeterminate");

  useEffect(() => {
    const URL = "/api/test/";
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      console.log("data", data);
      setTestData(data);
    };
    fetchData();
  }, []);

  const handleChange = () => {
    if (checked === "indeterminate") {
      setChecked(true);
    } else {
      setChecked("indeterminate");
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold">{testData?.[0]?.name}</h1>
      <h2>{testData?.[0]?.description}</h2>
      <div>
        <Checkbox.Root id="c1" checked={checked} onCheckedChange={handleChange}>
          <Checkbox.Indicator>
            {checked === "indeterminate" && <SquareIcon />}
            {checked === true && <CheckIcon />}
          </Checkbox.Indicator>
        </Checkbox.Root>
        <Label.Root htmlFor="c1">New Checkbox</Label.Root>
      </div>
      <div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger> Settings </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>New Tab</DropdownMenu.Item>
            <DropdownMenu.Item>New Window</DropdownMenu.Item>
            <DropdownMenu.Item>New Private Window</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      {/* <button
        type="button"
        onClick={() =>
          setChecked((prevIsChecked) =>
            prevIsChecked === "indeterminate" ? false : "indeterminate"
          )
        }
      >
        Toggle indeterminate
      </button> */}
    </div>
  );
};

export default Test;
