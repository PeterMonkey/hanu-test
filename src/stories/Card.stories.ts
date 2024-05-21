import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/card';
import { Suit } from '../enums/suit.enum';

const meta = {
    title: 'Project/Card',
    component: Card,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Card>

export default meta;
type Story = StoryObj<typeof meta>;

export const A: Story = {
    args: {
        numb: 1,
        suit: Suit['spade']
    }
}