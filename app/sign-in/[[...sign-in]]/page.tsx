'use client'

import * as React from 'react'
import { useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const { isLoaded, signIn, setActive } = useSignIn()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [isGoogleLoading, setIsGoogleLoading] = React.useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoaded) {
      return
    }

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      })

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId })
        router.push('/dashboard')
      }
    } catch (err: unknown) {
      console.error('Error:', JSON.stringify(err, null, 2))
      const error = err as { errors?: Array<{ message: string }> }
      setError(error.errors?.[0]?.message || 'An error occurred during sign in')
    }
  }

  const signInWithGoogle = async () => {
    if (!isLoaded) {
      return
    }

    try {
      setIsGoogleLoading(true)
      await signIn.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: '/sso-callback',
        redirectUrlComplete: '/dashboard',
      })
    } catch (err: unknown) {
      console.error('Error:', JSON.stringify(err, null, 2))
      const error = err as { errors?: Array<{ message: string }> }
      setError(error.errors?.[0]?.message || 'An error occurred during Google sign in')
      setIsGoogleLoading(false)
    }
  }

  return (
    <>
      <div className="page-wrapper page-wrapper-flex">
        <div
          data-w-id="ed7da387-3fa5-16ab-4508-257834d97516"
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="header-wrapper w-nav"
        >
          <div className="container-default w-container">
            <div data-w-id="ed7da387-3fa5-16ab-4508-257834d97518" className="header-content-wrapper center">
              <div className="header-middle">
                <a href="/index.html" className="header-logo-link center w-nav-brand">
                  <img src="/images/logo-gpt-webflow-ecommerce-template.png" alt="GPT X Webflow Template - Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="section hero sign-in">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="inner-container _660px center">
              <div data-w-id="27c3a4e0-def4-2a36-e595-a502d1d424f8" className="position-relative">
                <div
                  data-w-id="069aacf3-dbac-037f-888e-e28f5c61c839"
                  className="card-content sign-in-card-content"
                >
                  <div className="gradient-border line-single-left"></div>
                  <div>
                    <div className="text-center mg-bottom-32px">
                      <h1 className="heading-h2-size">Welcome back</h1>
                      <p className="color-neutral-200 mg-bottom-0">Please fill your email and password to sign in.</p>
                    </div>

                    <div
                      data-w-id="fe6a401a-f132-2fb2-e09b-9d333a50e33c"
                      className="mg-bottom-24px w-form"
                    >
                      <form
                        id="wf-form-Sign-In-Form"
                        name="wf-form-Sign-In-Form"
                        data-name="Sign In Form"
                        method="get"
                        data-wf-page-id="68c8509bc7d6bb3791acf693"
                        data-wf-element-id="fe6a401a-f132-2fb2-e09b-9d333a50e33d"
                        onSubmit={handleSubmit}
                      >
                        <div className="mg-bottom-32px">
                          <label htmlFor="Email">Email</label>
                          <input
                            className="input w-input"
                            maxLength={256}
                            name="Email"
                            data-name="Email"
                            placeholder="Email address"
                            type="email"
                            id="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="mg-bottom-24px mg-bottom-24px---mbl">
                          <label htmlFor="Password-2">Password</label>
                          <input
                            className="input w-input"
                            maxLength={256}
                            name="Password"
                            data-name="Password"
                            placeholder="Enter your password"
                            type="password"
                            id="Password-2"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="flex-horizontal space-between gap-16px---flex-wrap">
                          <label className="w-checkbox checkbox-field-wrapper mg-bottom-0">
                            <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                            <input
                              id="Remember-Me"
                              type="checkbox"
                              name="Remember-Me"
                              data-name="Remember Me"
                              style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                            />
                            <span className="w-form-label" htmlFor="Remember-Me">
                              Remember me
                            </span>
                          </label>
                          <a href="/utility-pages/forgot-password.html" className="link text-decoration">
                            Forgot password?
                          </a>
                        </div>
                        <button type="submit" style={{ display: 'none' }} aria-hidden="true" tabIndex={-1}>
                          Sign in
                        </button>
                      </form>
                      <div className="success-message sign-in-form w-form-done">
                        <div className="success-message-wrapper sign-in-form">
                          <div className="line-rounded-icon success-message-check large"></div>
                          <h3 className="display-4">Welcome back!</h3>
                        </div>
                      </div>
                      <div className="error-message w-form-fail" style={{ display: error ? 'block' : undefined }}>
                        <div>{error || 'Oops! Something went wrong while submitting the form.'}</div>
                      </div>
                    </div>

                    <div>
                      <div id="w-node-_1c5ed401-a468-9024-33d1-3eacb1da8c22-91acf693" className="mg-bottom-32px">
                        <div className="flex-horizontal">
                          <div className="divider _0px width-100"></div>
                          <div className="badge-primary sign-in-or">or</div>
                          <div className="divider _0px width-100"></div>
                        </div>
                      </div>

                      <div id="w-node-_1c5ed401-a468-9024-33d1-3eacb1da8c28-91acf693" className="mg-bottom-32px">
                        <a
                          href="#"
                          className="btn-secondary sign-in-button w-inline-block"
                          onClick={(event) => {
                            event.preventDefault()
                            if (!isGoogleLoading) {
                              signInWithGoogle()
                            }
                          }}
                        >
                          <img src="/images/google-icon-gpt-x-webflow-template.svg" alt="Google Icon - GPT X Webflow Template" />
                          <div className="mg-top-4px">{isGoogleLoading ? 'Redirecting...' : 'Sign in with Google'}</div>
                        </a>
                      </div>

                      <div id="w-node-_1c5ed401-a468-9024-33d1-3eacb1da8c2d-91acf693" className="mg-bottom-24px mg-bottom-24px---mbl">
                        <a href="https://facebook.com" target="_blank" className="btn-secondary sign-in-button w-inline-block" rel="noreferrer">
                          <img src="/images/facebook-icon-gpt-x-webflow-template.svg" alt="Facebook Icon - GPT X Webflow Template" />
                          <div className="mg-top-4px">Sign in with Facebook</div>
                        </a>
                      </div>

                      <div id="w-node-_1c5ed401-a468-9024-33d1-3eacb1da8c32-91acf693" className="flex-horizontal text-center">
                        <p className="color-neutral-200 mg-bottom-0">
                          Don&apos;t have an account?{' '}
                          <a href="/utility-pages/sign-up.html" className="link text-decoration">
                            Sign up today
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="gradient-border line-single-right"></div>
                </div>

                <div className="floating-sphere sign-in-top-sphere">
                  <img
                    src="/images/shape-v11-gpt-x-webflow-template.png"
                    alt=""
                    style={{
                      WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                      MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                      msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                      transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                      transformStyle: 'preserve-3d',
                    }}
                    sizes="(max-width: 479px) 100vw, 460px"
                    data-w-id="9fc20eb5-ddc3-3480-7d4a-afe42f929413"
                    srcSet="/images/shape-v11-gpt-x-webflow-template-p-500.png 500w, /images/shape-v11-gpt-x-webflow-template-p-800.png 800w, /images/shape-v11-gpt-x-webflow-template-p-1080.png 1080w, /images/shape-v11-gpt-x-webflow-template.png 1496w"
                  />
                </div>
                <div className="floating-sphere sign-in-sphere-bottom">
                  <img
                    src="/images/shape-v6-gpt-x-webflow-template.png"
                    alt=""
                    style={{
                      WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                      MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                      msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                      transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                      transformStyle: 'preserve-3d',
                    }}
                    sizes="(max-width: 479px) 100vw, 410px"
                    data-w-id="88c7dd7c-deb4-ac80-7d31-4501b3fbdc37"
                    srcSet="/images/shape-v6-gpt-x-webflow-template-p-500.png 500w, /images/shape-v6-gpt-x-webflow-template-p-800.png 800w, /images/shape-v6-gpt-x-webflow-template-p-1080.png 1080w, /images/shape-v6-gpt-x-webflow-template.png 1400w"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="footer-bottom-flex">
              <a href="/index.html" className="footer-logo-wrapper mg-bottom-0 w-inline-block">
                <img src="/images/logo-gpt-webflow-ecommerce-template.png" alt="GPT X Webflow Template - Logo" />
              </a>
              <p className="color-neutral-200 mg-bottom-0">
                Copyright © GPT X | Designed by{' '}
                <a href="https://brixtemplates.com/" target="_blank" className="link" rel="noreferrer">
                  BRIX Templates
                </a>{' '}
                - Powered by{' '}
                <a href="https://webflow.com/" target="_blank" className="link" rel="noreferrer">
                  Webflow
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
