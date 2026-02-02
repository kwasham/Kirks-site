'use client'

import * as React from 'react'
import { useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function SignInPage() {
  const { isLoaded, signIn, setActive } = useSignIn()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [rememberMe, setRememberMe] = React.useState(false)
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
      <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
      <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
      <link href="/css/kirks-amazing-site-b96f2d.webflow.css" rel="stylesheet" type="text/css" />
      
      <div className="page-wrapper page-wrapper-flex">
        <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="header-wrapper w-nav">
          <div className="container-default w-container">
            <div className="header-content-wrapper center">
              <div className="header-middle">
                <Link href="/" className="header-logo-link center w-nav-brand">
                  <Image src="/images/logo-gpt-webflow-ecommerce-template.png" alt="Logo" width={150} height={40} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <section className="section hero sign-in">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="inner-container _660px center">
              <div className="position-relative">
                <div className="card-content sign-in-card-content">
                  <div className="gradient-border line-single-left"></div>
                  <div>
                    <div className="text-center mg-bottom-32px">
                      <h1 className="heading-h2-size">Welcome back</h1>
                      <p className="color-neutral-200 mg-bottom-0">Please fill your email and password to sign in.</p>
                    </div>
                    
                    <div className="mg-bottom-24px w-form">
                      <form id="wf-form-Sign-In-Form" name="wf-form-Sign-In-Form" onSubmit={handleSubmit}>
                        {error && (
                          <div className="error-message w-form-fail" style={{ display: 'block' }}>
                            <div>{error}</div>
                          </div>
                        )}
                        
                        <div className="mg-bottom-32px">
                          <label htmlFor="Email">Email</label>
                          <input 
                            className="input w-input" 
                            maxLength={256} 
                            name="Email" 
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
                            <div className={`w-checkbox-input w-checkbox-input--inputType-custom checkbox ${rememberMe ? 'w--redirected-checked' : ''}`}></div>
                            <input 
                              id="Remember-Me" 
                              type="checkbox" 
                              name="Remember-Me" 
                              style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                              checked={rememberMe}
                              onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <span className="w-form-label">Remember me</span>
                          </label>
                          <Link href="/forgot-password" className="link text-decoration">Forgot password?</Link>
                        </div>
                        
                        <div style={{ marginTop: '32px' }}>
                          <button 
                            type="submit" 
                            className="btn-primary w-button" 
                            style={{ width: '100%' }}
                            disabled={!isLoaded}
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                    
                    <div>
                      <div className="mg-bottom-32px">
                        <div className="flex-horizontal">
                          <div className="divider _0px width-100"></div>
                          <div className="badge-primary sign-in-or">or</div>
                          <div className="divider _0px width-100"></div>
                        </div>
                      </div>
                      
                      <div className="mg-bottom-32px">
                        <button 
                          onClick={signInWithGoogle}
                          disabled={!isLoaded || isGoogleLoading}
                          className="btn-secondary sign-in-button w-inline-block"
                          style={{ width: '100%', textAlign: 'center', cursor: 'pointer' }}
                        >
                          <Image src="/images/google-icon-gpt-x-webflow-template.svg" alt="Google Icon" width={20} height={20} />
                          <div className="mg-top-4px">{isGoogleLoading ? 'Redirecting...' : 'Sign in with Google'}</div>
                        </button>
                      </div>
                      
                      <div className="flex-horizontal text-center">
                        <p className="color-neutral-200 mg-bottom-0">
                          Don&apos;t have an account? <Link href="/sign-up" className="link text-decoration">Sign up today</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="gradient-border line-single-right"></div>
                </div>
                
                <div className="floating-sphere sign-in-top-sphere">
                  <Image 
                    src="/images/shape-v11-gpt-x-webflow-template.png" 
                    alt="" 
                    width={460} 
                    height={460}
                  />
                </div>
                <div className="floating-sphere sign-in-sphere-bottom">
                  <Image 
                    src="/images/shape-v6-gpt-x-webflow-template.png" 
                    alt="" 
                    width={410} 
                    height={410}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div>
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="footer-bottom-flex">
              <Link href="/" className="footer-logo-wrapper mg-bottom-0 w-inline-block">
                <Image src="/images/logo-gpt-webflow-ecommerce-template.png" alt="Logo" width={150} height={40} />
              </Link>
              <p className="color-neutral-200 mg-bottom-0">
                Copyright © Kirk&apos;s Site
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
