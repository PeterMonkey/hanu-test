import type { Meta, StoryObj } from '@storybook/react';
import ResetButton from '../components/header/resetButton';

const meta = {
    title: 'Project/ResetButton',
    component: ResetButton,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof ResetButton>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}