import clsx from 'clsx'
import { selectDarkMode, setDarkMode } from '../../stores/darkModeSlice'
import { useAppSelector, useAppDispatch } from '../../stores/hooks'
import Lucide from '../../base-components/Lucide'

function Main() {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector(selectDarkMode)

  const setDarkModeClass = () => {
    const el = document.querySelectorAll('html')[0]
    darkMode ? el.classList.add('dark') : el.classList.remove('dark')
  }

  const switchMode = () => {
    dispatch(setDarkMode(!darkMode))
    localStorage.setItem('darkMode', (!darkMode).toString())
    setDarkModeClass()
  }

  setDarkModeClass()

  return (
    <>
      {/* BEGIN: Dark Mode Switcher */}
      <div onClick={switchMode} className="flex flex-row w-full items-center">
        <Lucide
          icon={darkMode ? 'ToggleRight' : 'ToggleLeft'}
          className="w-4 h-4 mr-2"
        />
        <span>{darkMode ? 'Light' : 'Dark'} Mode</span>
      </div>
      {/* END: Dark Mode Switcher */}
    </>
  )
}

export default Main
