const { render } = require('@testing-library/react');
const App = require('./App');

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });
});