# use-sync-set-state

- This React Hook lets you store the state in localStorage and sync it in between tabs, automagically.

- **use-sync-set-state** is a superset of useState i.e, you can always set the state explicitly or via callback function, your call.

- What's difference is that it stores the state in the localSotrage and syncs it in between tabs by listening to localStorage's storage event.

### Installation

```sh
yarn add use-sync-set-state
```
or

```sh
npm i use-sync-set-state

```

### Usage

```js
import useSyncSetState from 'use-sync-set-state';

const App = () => {

  React.useEffect(() => {
    setTheme('light');
  }, [])

  const [theme, setTheme] = useSyncSetState('theme', 'dark');

  return <React.Fragment>
  <p data-testid='theme'>{ theme }</p>
  <button onClick={e => setTheme((current) => current === 'dark' ? 'light' : 'dark')}>toggle</button>
  <p data-testid='localstorage'>
    {localStorage.getItem('theme')}
  </p>
  </React.Fragment>
}
```

### Repository

[Explore](https://github.com/inblack67/use-sync-set-state)

### About The Author

[Website](https://inblack67.netlify.app)

[Github](https://github.com/inblack67)

