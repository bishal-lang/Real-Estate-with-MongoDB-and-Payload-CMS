// components/auth/Background.tsx

export default function Background() {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAp2RtUuZ_27iGsEk-CgyMZNVAcPUKjCU-MHY6Vfe4GswAiGVvrxVSF8_CbmzMAd5cRR0Dhzo8Cxau65eLpW4azCL6dez7Hs_TAK2jE3O7PGdUZ9gfeEgCanNU790J2tQTK0tYkHNubdmMycMtz0d2oGevA_SF0kmSl-_vwzxiPjZ2NW2oQjvP2fg6hthgv2wsLEfSF0mRLp3DavooSC5iJIuhV4gu9Z-FsEhbyndjsM6R5FrNx_sLdk5D_0flT0YOXyI4AOIIPdY"
        alt="Luxury property interior"
        className="w-full h-full object-cover brightness-[0.9] grayscale-[0.2]"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/80 via-transparent to-surface/40" />
    </div>
  )
}
