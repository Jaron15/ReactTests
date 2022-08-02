
// Three As of Writing Tests
// Arrange - Set up the test data, test conditions and test environment
// Act - Run logic that should be tested (e.g. execute function)
// Assert - Compare execution results with expected results

import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting';

//describe can be used to group tests into a "Suite"
describe('Greeting component', () => {
test('renders Hello World as a text', () => {
    // Arrange 
    render(<Greeting />);

    // Act
    // ... nothing 
    
    //Assert 
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
});
test('Renders initial paragraph if the button was NOT clicked', () => {
    // Arrange 
    render(<Greeting />);

    // Act
    // ... nothing 
    
    //Assert 
    const initialP = screen.getByText('good to see you', {exact: false});
    expect(initialP).toBeInTheDocument();
    
});
test('Renders changed text if the button was clicked', () => {
    // Arrange 
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button')
     userEvent.click(buttonElement)
    
    //Assert 
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
});
test('Hides initial paragraph if the button was clicked', () => {
    // Arrange 
    render(<Greeting />);
    
    
    // Act
    //click the button to hide the inital text and display new text 
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    
    //Assert 
    //makes sure the identified initial text is not in the document 
    const initialP = screen.queryByText('good to see you', {exact: false});
    expect(initialP).toBeNull();
});

})

