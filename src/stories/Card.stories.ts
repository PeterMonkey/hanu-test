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
        suit: Suit['heart']
    },
}

export const Two: Story = {
    args: {
        numb: 2,
        suit: Suit['heart']
    }
}

export const Three: Story = {
    args: {
        numb: 3,
        suit: Suit['heart']
    }
}

export const Four: Story = {
    args: {
        numb: 4,
        suit: Suit['heart']
    }
}

export const Five: Story = {
    args: {
        numb: 5,
        suit: Suit['heart']
    }
}

export const Six: Story = {
    args: {
        numb: 6,
        suit: Suit['heart']
    }
}

export const Seven: Story = {
    args: {
        numb: 7,
        suit: Suit['heart']
    }
}

export const Eight: Story = {
    args: {
        numb: 8,
        suit: Suit['heart']
    }
}

export const Nine: Story = {
    args: {
        numb: 9,
        suit: Suit['heart']
    }
}

export const Ten: Story = {
    args: {
        numb: 10,
        suit: Suit['heart']
    }
}

export const J: Story = {
    args: {
        numb: 11,
        suit: Suit['heart']
    }
}

export const Q: Story = {
    args: {
        numb: 12,
        suit: Suit['heart']
    }
}

export const K: Story = {
    args: {
        numb: 13,
        suit: Suit['heart']
    }
}