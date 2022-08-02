import { render, screen } from "@testing-library/react";
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request secceeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}]
        });
        render(<Async />)

//findAllByRole will wait until it finds the item, the default time it waits is one second but that time can be configured 
//has to use async/await bc it returns a promise
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0)
    })
})