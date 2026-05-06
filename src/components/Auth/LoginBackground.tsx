'use client'

import { Box } from '@mantine/core'

export default function LoginBackground() {
  return (
    <Box
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        backgroundImage:
          'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDAp2RtUuZ_27iGsEk-CgyMZNVAcPUKjCU-MHY6Vfe4GswAiGVvrxVSF8_CbmzMAd5cRR0Dhzo8Cxau65eLpW4azCL6dez7Hs_TAK2jE3O7PGdUZ9gfeEgCanNU790J2tQTK0tYkHNubdmMycMtz0d2oGevA_SF0kmSl-_vwzxiPjZ2NW2oQjvP2fg6hthgv2wsLEfSF0mRLp3DavooSC5iJIuhV4gu9Z-FsEhbyndjsM6R5FrNx_sLdk5D_0flT0YOXyI4AOIIPdY)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(20%) brightness(0.9)',
      }}
    />
  )
}
