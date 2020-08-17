import React from 'react'

function ToggleTheme({ darkMode, setDarkMode }) {
  React.useEffect(() => {
    // localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <button onClick={() => setDarkMode((prevMode) => !prevMode)}>
      ☀︎ / ☾{' '}
    </button>
  )
}

export default ToggleTheme
