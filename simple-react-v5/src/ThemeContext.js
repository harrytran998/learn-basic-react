import { createContext } from 'react'
/**
 * () => {} = setColor
 */
const ThemeContext = createContext(['pink', () => {}])

export default ThemeContext
