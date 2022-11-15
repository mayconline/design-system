var a=Object.defineProperty;var o=(n,e)=>a(n,"name",{value:e,configurable:!0});import{B as t}from"./index.1d584724.js";import{j as i}from"./jsx-runtime.e007a7da.js";import"./index.module.d83c3041.js";import"./index.2dd405ac.js";import"./iframe.5076b590.js";import"./clsx.m.256e9345.js";const B={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create Account',
  },
  argTypes: {
    kind: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  kind: 'secondary',
};
`,locationsMap:{primary:{startLoc:{col:48,line:20},endLoc:{col:78,line:20},startBody:{col:48,line:20},endBody:{col:78,line:20}},secondary:{startLoc:{col:48,line:20},endLoc:{col:78,line:20},startBody:{col:48,line:20},endBody:{col:78,line:20}}}}},title:"Components/Button",component:t,args:{children:"Create Account"},argTypes:{kind:{options:["primary","secondary"],control:{type:"inline-radio"}}}},r=o(n=>i(t,{...n}),"Template"),f=r.bind({}),c=r.bind({});c.args={kind:"secondary"};const g=["Primary","Secondary"];export{f as Primary,c as Secondary,g as __namedExportsOrder,B as default};
//# sourceMappingURL=Button.stories.c5c2cd47.js.map
