import React, {MouseEventHandler, ReactNode, useMemo} from "react";

interface Props {
  children: ReactNode | string;
  onClick?: MouseEventHandler<HTMLButtonElement>,
  type?: 'success' | 'primary'
}

export function Button({ children, onClick, type = 'primary' }: Props) {
  const buttonCls = useMemo(() => {
    if (type === 'success') {
      return 'inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
    }

    return 'inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
  }, []);


  return (
    <button
      onClick={onClick}
      type="button"
      className={buttonCls}
    >
      {children}
    </button>
  )
}