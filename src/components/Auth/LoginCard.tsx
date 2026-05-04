// components/auth/LoginCard.tsx

export default function LoginCard() {
  return (
    <div className="bg-white/90 backdrop-blur-xl shadow-2xl p-10 md:p-14 border border-white/20">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-display-xl text-display-xl text-primary mb-4">Client Portal</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Secure access to your architectural portfolio and investment analytics.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-8">
        <div className="space-y-6">
          {/* Email */}
          <div>
            <label className="font-label-bold text-label-bold uppercase mb-3 block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@firm.com"
              className="w-full bg-surface-bright border-b border-outline focus:border-secondary outline-none py-4"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-label-bold text-label-bold uppercase">Password</label>
              <a className="text-secondary text-sm hover:underline" href="#">
                Forgot Password?
              </a>
            </div>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-surface-bright border-b border-outline focus:border-secondary outline-none py-4"
            />
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center">
          <input type="checkbox" className="h-4 w-4" />
          <label className="ml-3 text-sm">Remember Me</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-secondary text-white uppercase py-6 tracking-widest flex items-center justify-center gap-3 hover:brightness-110 transition-all"
        >
          Login
          <span className="material-symbols-outlined text-[18px]">lock</span>
        </button>
      </form>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-sm text-on-surface-variant">
          New to the firm?{' '}
          <a href="#" className="text-secondary font-bold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  )
}
