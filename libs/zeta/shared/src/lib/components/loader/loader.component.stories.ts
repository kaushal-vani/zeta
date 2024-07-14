import type { Meta, StoryObj } from '@storybook/angular';
import { LoaderComponent } from './loader.component';


const meta: Meta<LoaderComponent> = {
  component: LoaderComponent,
  title: 'LoaderComponent',
  argTypes: {
    isLoading: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  },
};
export default meta;
type Story = StoryObj<LoaderComponent>;

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Loaded: Story = {
  args: {
    isLoading: false,
  },
};

