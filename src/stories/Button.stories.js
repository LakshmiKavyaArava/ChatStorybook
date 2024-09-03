import Button from "../components/Button";

export default {
  title: "components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const PrimaryRed = Template.bind({});
PrimaryRed.args = {
  type: "primary",
  backgroundColor: "red",
  label: "Click Me",
  size: "md",
};

export const SecondaryGreen = Template.bind({});
SecondaryGreen.args = {
  type: "secondary",
  backgroundColor: "green",
  label: "Click Me",
  size: "md",
};

export const SmallPrimary = Template.bind({});
SmallPrimary.args = {
  type: "primary",
  backgroundColor: "red",
  label: "Click Me",
  size: "sm",
};

export const LargeSecondary = Template.bind({});
LargeSecondary.args = {
  type: "secondary",
  backgroundColor: "red",
  label: "Click Me",
  size: "lg",
};

export const LongLabelPrimary = Template.bind({});
LongLabelPrimary.args = {
  type: "primary",
  backgroundColor: "red",
  label: "Click Me and I will open the new window",
  size: "md",
};
