import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import useSyncSetState from '../src';

const App = () => {

  React.useEffect(() => {
    setTheme('light');
  }, [])

  const [theme, setTheme] = useSyncSetState('theme', 'dark');

  return <React.Fragment>
  <p data-testid='theme'>{ theme }</p>
  <button onClick={e => setTheme((current: string) => current === 'dark' ? 'light' : 'dark')}>toggle</button>
  <p data-testid='localstorage'>
    {localStorage.getItem('theme')}
  </p>
  </React.Fragment>
}

describe('useSyncSetState', () => {

  it('sets the state correctly', () => {
    render(<App />);
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  })

  it('toggles theme', () => {
    render(<App />);
    fireEvent.click(screen.getByText('toggle'));
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  })

  it('saves state in localstorage', () => {
    render(<App />);
    expect(screen.getByTestId('localstorage')).toHaveTextContent('light');
  })

});
