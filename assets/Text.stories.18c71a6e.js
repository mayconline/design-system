var l=Object.defineProperty;var e=(t,i)=>l(t,"name",{value:i,configurable:!0});import{T as n}from"./index.59ab7cb8.js";import{j as o}from"./jsx-runtime.e007a7da.js";import"./index.module.d83c3041.js";import"./index.2dd405ac.js";import"./iframe.5076b590.js";import"./clsx.m.256e9345.js";const x={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '.';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});

export const Custom = Template.bind({});
Custom.args = {
  asChild: true,
  children: <p>Text with P tag</p>,
};
Custom.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  asChild: {
    table: {
      disable: true,
    },
  },
};
`,locationsMap:{default:{startLoc:{col:46,line:21},endLoc:{col:74,line:21},startBody:{col:46,line:21},endBody:{col:74,line:21}},custom:{startLoc:{col:46,line:21},endLoc:{col:74,line:21},startBody:{col:46,line:21},endBody:{col:74,line:21}}}}},title:"Components/Text",component:n,args:{children:"Lorem ipsum.",size:"md"},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}}}},r=e(t=>o(n,{...t}),"Template"),y=r.bind({}),s=r.bind({});s.args={asChild:!0,children:o("p",{children:"Text with P tag"})};s.argTypes={children:{table:{disable:!0}},asChild:{table:{disable:!0}}};const C=["Default","Custom"];export{s as Custom,y as Default,C as __namedExportsOrder,x as default};
//# sourceMappingURL=Text.stories.18c71a6e.js.map
