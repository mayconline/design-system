var m=Object.defineProperty;var o=(e,r)=>m(e,"name",{value:r,configurable:!0});import{C as n}from"./index.127e0698.js";import{T as a}from"./index.59ab7cb8.js";import{a as s,j as t}from"./jsx-runtime.e007a7da.js";import"./index.module.d83c3041.js";import"./index.2dd405ac.js";import"./iframe.5076b590.js";import"./index.8fb9bc8d.js";import"./IconBase.esm.c63bc2ac.js";import"./clsx.m.256e9345.js";const y={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    onCheckedChange: {
      type: 'function',
    },
    checked: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <div className="flex items-center gap-2">
    <Checkbox {...args} />
    <Text size="sm">Lembrar-me de mim por 30 dias</Text>
  </div>
);

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:50,line:18},endLoc:{col:1,line:23},startBody:{col:50,line:18},endBody:{col:1,line:23}}}}},title:"Components/Checkbox",component:n,argTypes:{onCheckedChange:{type:"function"},checked:{type:"boolean"}}},c=o(e=>s("div",{className:"flex items-center gap-2",children:[t(n,{...e}),t(a,{size:"sm",children:"Lembrar-me de mim por 30 dias"})]}),"Template"),T=c.bind({}),u=["Default"];export{T as Default,u as __namedExportsOrder,y as default};
//# sourceMappingURL=Checkbox.stories.a38d8099.js.map
