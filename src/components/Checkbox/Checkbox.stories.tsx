import { ComponentStory, ComponentMeta } from '@storybook/react';
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
