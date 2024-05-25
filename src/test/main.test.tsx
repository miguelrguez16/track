import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from '../App';

describe('Main rendering', () => {
	test('once rendered, then it should have the correct strings', () => {
		const { getByText } = render(<App />);
		expect(getByText('Vite + React')).toBeDefined();
	});
});
