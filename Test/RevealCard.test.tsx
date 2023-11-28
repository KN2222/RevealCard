import { render, screen } from '@testing-library/react';
import React from 'react';
import RevealCard from '../src/components/Card/RevealCard';
import '@testing-library/jest-dom'; // Make sure to import this line

// Mock the fetch function
const mockFetchPromise = Promise.resolve({
    json: () => Promise.resolve({ /* your mocked data */ }),
});
(global.fetch as jest.Mock) = jest.fn().mockImplementation(() => mockFetchPromise);

describe('RevealCard', () => {
    test('renders inactive state', async () => {
        render(<RevealCard active={false}>Test Content</RevealCard>);

        // Your test logic here

        // Add assertions to check the rendering of inactive state
        // For example:
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    test('renders active state', async () => {
        render(<RevealCard active={true}>Test Content</RevealCard>);

        // Your test logic here

        // Add assertions to check the rendering of active state
        // For example:
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });
});

// Clean up the mock after the tests are done
afterAll(() => {
    // Cast global.fetch to jest.Mock and use mockClear
    (global.fetch as jest.Mock).mockClear();
    // Use optional chaining for delete
    delete (global as any).fetch;
});
