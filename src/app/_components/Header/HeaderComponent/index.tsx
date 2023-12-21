import React from 'react'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Link from 'next/link'

import Image from 'next/image'
import { HeaderNav } from '../Nav'
import MobileNav from '../MobileNav'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  return (
    <nav className={[classes.Header]}>
        {/* will handle error later^: Type 'string[]' is not assignable to type 'string' */}
        <Gutter className={classes.wrap}>
            <Link href="/">
                <Image src="/logo-black.svg" alt="logo" width={170} height={50} />
            </Link>

            <HeaderNav header={header} />
            <MobileNav header={header} />
        </Gutter>
    </nav>
  )
}

export default HeaderComponent