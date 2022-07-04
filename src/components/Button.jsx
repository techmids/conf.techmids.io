import Link from 'next/link'
import clsx from 'clsx'

const styles =
  'inline-flex justify-center rounded-2xl bg-yellow-300 p-4 text-base font-semibold text-white hover:bg-yellow-500 active:text-white/70 focus:outline-none focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-yellow-500'

export function Button({ className, ...props }) {
  return <button className={clsx(styles, className)} {...props} />
}

export function ButtonLink({ href, className, ...props }) {
  return (
    <Link href={href}>
      <a className={clsx(styles, className)} {...props} />
    </Link>
  )
}
