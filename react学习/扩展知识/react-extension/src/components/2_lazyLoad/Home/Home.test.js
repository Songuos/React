import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home'; // 确保路径正确

describe('Home Component', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<Home />);
        const headingElement = getByText('我是Home组件');
        expect(headingElement).toBeInTheDocument();
    });
});