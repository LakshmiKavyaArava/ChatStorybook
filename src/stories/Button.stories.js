import Button from "../components/Button";

export default {
  title: "components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Red Button",
  size: "md",
  type: "primary",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Green Button",
  size: "md",
  type: "primary",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "Small Button",
  size: "sm",
  type: "primary",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Large Button",
  size: "lg",
  type: "primary",
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: "red",
  label: "Click Me and I will open the new window",
  size: "md",
  type: "primary",
};

// Primary and Secondary Variants
export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "blue",
  label: "Primary Button",
  size: "md",
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: "blue",
  label: "Secondary Button",
  size: "md",
  type: "secondary",
};
