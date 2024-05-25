import { act, fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('App rendering', () => {
	it('once rendered, then it should have the correct strings', () => {
		const { getByText } = render(<App />);
		expect(getByText('Vite + React')).toBeDefined();
	});

	it('on click in count, then count value should increase', () => {
		const { getByText } = render(<App />);
		const button = getByText('Increment') as HTMLButtonElement;
		const span = getByText('0');
		act(() => fireEvent.click(button));
		expect(span?.innerHTML).toBe('1');
		act(() => fireEvent.click(button));
		expect(span?.innerHTML).toBe('2');
	});
});
