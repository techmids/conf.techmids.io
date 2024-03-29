import Link from 'next/link'
import clsx from 'clsx'

const styles =
  'inline-flex justify-center rounded-2xl bg-brand-300 p-4 text-base font-semibold text-black hover:bg-brand-500 active:text-black/70 focus:outline-none focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-brand-500'

export function Button({ className, ...props }) {
  return <button className={clsx(styles, className)} {...props} />
}

export function ButtonLink({ href, className, ...props }) {
  return (
    <Link legacyBehavior={true} href={href}>
      <a className={clsx(styles, className)} {...props} />
    </Link>
  )
}
