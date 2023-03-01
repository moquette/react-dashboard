import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Transition } from 'react-transition-group'
import clsx from 'clsx'
import { FormattedMenu, enter, leave, linkTo, nestedMenu } from './sans-menu'

import Lucide from '../../base-components/Lucide'
import MobileMenu from '../../components/MobileMenu'
import SideMenuTooltip from '../../components/SideMenuTooltip'
import TopBar from '../../components/TopBar'
import { selectSideMenu } from '../../stores/sideMenuSlice'
import { useAppSelector } from '../../stores/hooks'

function Main() {
  const location = useLocation()
  const [formattedMenu, setFormattedMenu] = useState<
    Array<FormattedMenu | 'divider'>
  >([])
  const sideMenuStore = useAppSelector(selectSideMenu)
  const sideMenu = () => nestedMenu(sideMenuStore, location)

  useEffect(() => {
    setFormattedMenu(sideMenu())
  }, [sideMenuStore, location.pathname])

  return (
    <div className="py-5 md:py-0">
      <MobileMenu />
      <TopBar layout="sans-menu" />
      <div className="flex overflow-hidden">
        {/* BEGIN: Content */}
        <div
          className={clsx([
            'max-w-full md:max-w-none rounded-[30px] md:rounded-none px-4 md:px-[22px] min-w-0 min-h-screen bg-slate-100 flex-1 md:pt-20 pb-10 mt-5 md:mt-1 relative dark:bg-darkmode-700',
            "before:content-[''] before:w-full before:h-px before:block",
          ])}
        >
          <Outlet />
        </div>
        {/* END: Content */}
      </div>
    </div>
  )
}

function Menu(props: {
  className?: string
  menu: FormattedMenu
  formattedMenuState: [
    (FormattedMenu | 'divider')[],
    Dispatch<SetStateAction<(FormattedMenu | 'divider')[]>>
  ]
  level: 'first' | 'second' | 'third'
}) {
  const navigate = useNavigate()
  const [formattedMenu, setFormattedMenu] = props.formattedMenuState

  return (
    <SideMenuTooltip
      as="a"
      content={props.menu.title}
      href={props.menu.subMenu ? '#' : props.menu.pathname}
      className={clsx([
        'h-[50px] flex items-center pl-5 text-slate-600 mb-1 relative rounded-xl dark:text-slate-300',
        {
          'text-slate-600 dark:text-slate-400':
            !props.menu.active && props.level !== 'first',
          'bg-slate-100 dark:bg-transparent':
            props.menu.active && props.level === 'first',
          "before:content-[''] before:block before:inset-0 before:rounded-xl before:absolute before:border-b-[3px] before:border-solid before:border-black/[0.08] before:dark:border-black/[0.08] before:dark:bg-darkmode-700":
            props.menu.active && props.level === 'first',
          "after:content-[''] after:w-[20px] after:h-[80px] after:mr-[-27px] after:bg-menu-active after:bg-no-repeat after:bg-cover after:absolute after:top-0 after:bottom-0 after:right-0 after:my-auto after:dark:bg-menu-active-dark":
            props.menu.active && props.level === 'first',
          "hover:bg-slate-100 hover:dark:bg-transparent hover:before:content-[''] hover:before:block hover:before:inset-0 hover:before:rounded-xl hover:before:absolute hover:before:z-[-1] hover:before:border-b-[3px] hover:before:border-solid hover:before:border-black/[0.08] hover:before:dark:bg-darkmode-700":
            !props.menu.active &&
            !props.menu.activeDropdown &&
            props.level === 'first',

          // Animation
          'after:-mr-[47px] after:opacity-0 after:animate-[0.4s_ease-in-out_0.1s_active-side-menu-chevron] after:animate-fill-mode-forwards':
            props.menu.active && props.level === 'first',
        },
        props.className,
      ])}
      onClick={(event: React.MouseEvent) => {
        event.preventDefault()
        linkTo(props.menu, navigate)
        setFormattedMenu([...formattedMenu])
      }}
    >
      <div
        className={clsx({
          'text-primary z-10 dark:text-slate-300':
            props.menu.active && props.level === 'first',
          'text-slate-700 dark:text-slate-300':
            props.menu.active && props.level !== 'first',
          'dark:text-slate-400': !props.menu.active,
        })}
      >
        <Lucide icon={props.menu.icon} />
      </div>
      <div
        className={clsx([
          'w-full ml-3 hidden xl:flex items-center',
          {
            'text-primary font-medium z-10 dark:text-slate-300':
              props.menu.active && props.level === 'first',
            'text-slate-700 font-medium dark:text-slate-300':
              props.menu.active && props.level !== 'first',
            'dark:text-slate-400': !props.menu.active,
          },
        ])}
      >
        {props.menu.title}
        {props.menu.subMenu && (
          <div
            className={clsx([
              'transition ease-in duration-100 ml-auto mr-5 hidden xl:block',
              { 'transform rotate-180': props.menu.activeDropdown },
            ])}
          >
            <Lucide className="w-4 h-4" icon="ChevronDown" />
          </div>
        )}
      </div>
    </SideMenuTooltip>
  )
}

function Divider<C extends React.ElementType>(
  props: { as?: C } & React.ComponentPropsWithoutRef<C>
) {
  const { className, ...computedProps } = props
  const Component = props.as || 'div'

  return (
    <Component
      {...computedProps}
      className={clsx([
        props.className,
        'w-full h-px bg-black/[0.06] z-10 relative dark:bg-white/[0.07]',
      ])}
    />
  )
}

export default Main
