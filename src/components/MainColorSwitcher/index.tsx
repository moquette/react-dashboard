import clsx from 'clsx'
import {
  selectColorScheme,
  setColorScheme,
  ColorSchemes,
} from '../../stores/colorSchemeSlice'
import { selectDarkMode } from '../../stores/darkModeSlice'
import { useAppSelector, useAppDispatch } from '../../stores/hooks'

function Main() {
  const dispatch = useAppDispatch()
  const colorScheme = useAppSelector(selectColorScheme)
  const darkMode = useAppSelector(selectDarkMode)

  const setColorSchemeClass = () => {
    const el = document.querySelectorAll('html')[0]
    el.setAttribute('class', colorScheme)
    darkMode && el.classList.add('dark')
  }

  const switchColorScheme = (colorScheme: ColorSchemes) => {
    dispatch(setColorScheme(colorScheme))
    localStorage.setItem('colorScheme', colorScheme)
    setColorSchemeClass()
  }

  setColorSchemeClass()

  return (
    <>
      {/* BEGIN: Main Color Switcher */}
      <div className="flex flex-row justify-between items-center w-full">
        <a
          onClick={() => {
            switchColorScheme('default')
          }}
          className={clsx({
            'block w-8 h-4 cursor-pointer bg-cyan-900 rounded-full border-2 mr-1 hover:border-slate-200':
              true,
            'border-slate-300 dark:border-darkmode-800/80':
              colorScheme === 'default',
            'border-white dark:border-darkmode-600': colorScheme !== 'default',
          })}
        />
        <a
          onClick={() => {
            switchColorScheme('theme-1')
          }}
          className={clsx({
            'block w-8 h-4 cursor-pointer bg-blue-800 rounded-full border-2 mr-1 hover:border-slate-200':
              true,
            'border-slate-300 dark:border-darkmode-800/80':
              colorScheme === 'theme-1',
            'border-white dark:border-darkmode-600': colorScheme !== 'theme-1',
          })}
        />
        <a
          onClick={() => {
            switchColorScheme('theme-2')
          }}
          className={clsx({
            'block w-8 h-4 cursor-pointer bg-blue-900 rounded-full border-2 mr-1 hover:border-slate-200':
              true,
            'border-slate-300 dark:border-darkmode-800/80':
              colorScheme === 'theme-2',
            'border-white dark:border-darkmode-600': colorScheme !== 'theme-2',
          })}
        />
        <a
          onClick={() => {
            switchColorScheme('theme-3')
          }}
          className={clsx({
            'block w-8 h-4 cursor-pointer bg-emerald-900 rounded-full border-2 mr-1 hover:border-slate-200':
              true,
            'border-slate-300 dark:border-darkmode-800/80':
              colorScheme === 'theme-3',
            'border-white dark:border-darkmode-600': colorScheme !== 'theme-3',
          })}
        />
        <a
          onClick={() => {
            switchColorScheme('theme-4')
          }}
          className={clsx({
            'block w-8 h-4 cursor-pointer bg-indigo-900 rounded-full border-2 hover:border-slate-200':
              true,
            'border-slate-300 dark:border-darkmode-800/80':
              colorScheme === 'theme-4',
            'border-white dark:border-darkmode-600': colorScheme !== 'theme-4',
          })}
        />
      </div>
      {/* END: Main Color Switcher */}
    </>
  )
}

export default Main
