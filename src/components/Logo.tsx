import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 28 28"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns-xlink="http://www.w3.org/1999/xlink"
        xmlns-sketch="http://www.bohemiancoding.com/sketch/ns"
      >
        <title>cocktail</title>
        <desc>Created with Sketch Beta.</desc>
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          sketch-type="MSPage"
        >
          <g
            id="Icon-Set"
            sketch-type="MSLayerGroup"
            transform="translate(-518.000000, -413.000000)"
            fill="#000000"
          >
            <path
              d="M532,428 L521.093,415 L541.983,415 L532,428 L532,428 Z M544.652,414.753 C544.86,414.569 545,414.306 545,414 C545,413.569 544.734,413.21 544.366,413.069 C544.222,413.008 544.068,412.99 543.914,413 L519.054,413 C518.776,412.982 518.494,413.07 518.281,413.283 C517.89,413.676 517.89,414.313 518.281,414.707 L531,430 L531,439 L527,439 C526.447,439 526,439.448 526,440 C526,440.553 526.447,441 527,441 L537,441 C537.553,441 538,440.553 538,440 C538,439.448 537.553,439 537,439 L533,439 L533,430 L544.652,414.753 L544.652,414.753 Z"
              id="cocktail"
              sketch-type="MSShapeGroup"
            ></path>
          </g>
        </g>
      </svg>
      <defs>
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 230 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        x="32"
        y="24"
        className={clsx(
          'text-2xl font-bold text-neutral-950 transition-all duration-300',
          invert ? 'text-white' : 'text-neutral-950',
          filled && 'opacity-100',
        )}
      >
        DieBarschule.
      </text>
    </svg>
  )
}
