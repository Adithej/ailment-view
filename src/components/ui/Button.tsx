import classNames from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  primary?: boolean
  secondary?: boolean
  success?: boolean
  warning?: boolean
  danger?: boolean
  outline?: boolean
  rounded?: boolean
}

const validateVariationProps = (props: ButtonProps) => {
  const { primary, secondary, success, warning, danger } = props
  const count =
    Number(!!primary) +
    Number(!!secondary) +
    Number(!!warning) +
    Number(!!success) +
    Number(!!danger)

  if (count > 1) {
    throw new Error(
      'Only one of primary, secondary, success, warning, danger can be true',
    )
  }
}

const Button: React.FC<ButtonProps> = props => {
  validateVariationProps(props)

  const {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
  } = props

  const classes = classNames(
    rest.className,
    'flex items-center justify-around',
    {
      'bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded transition duration-300 font-palanquin':
        primary,
      'border-stone-200 font-palanquin bg-neutral-400 text-white px-5 py-4 hover:bg-neutral-500':
        secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    },
  )

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  )
}

export default Button
