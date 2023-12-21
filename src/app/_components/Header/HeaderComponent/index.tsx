'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'
// import { MobileNav } from '../MobileNav'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
    const pathname = usePathname()

  return (
    <nav 
        className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide].filter(Boolean).join(' ')}>
        {/* in navigation, filter the ones that are true and join with an empty space */}
        <Gutter className={classes.wrap}>
            <Link href="/">
                <Image src="/logo-black.svg" alt="logo" width={170} height={50} />
            </Link>

            <HeaderNav header={header} />
            {/* <MobileNav header={header} /> */}
        </Gutter>
    </nav>
  )
}

export default HeaderComponent