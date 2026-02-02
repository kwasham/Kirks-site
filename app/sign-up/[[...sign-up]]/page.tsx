'use client'

import * as React from 'react'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function SignUpPage() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [termsAccepted, setTermsAccepted] = React.useState(false)
  const [pendingVerification, setPendingVerification] = React.useState(false)
  const [code, setCode] = React.useState('')
  const [error, setError] = React.useState('')
  const [isGoogleLoading, setIsGoogleLoading] = React.useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoaded) {
      return
    }

    if (!termsAccepted) {
      setError('Please accept the Terms & Conditions to continue')
      return
    }

    try {
      await signUp.create({
        emailAddress: email,
        password,
        firstName: name.split(' ')[0] || name,
        lastName: name.split(' ').slice(1).join(' ') || undefined,
      })

      // Send email verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // Display second form to collect verification code
      setPendingVerification(true)
      setError('')
    } catch (err: unknown) {
      console.error('Error:', JSON.stringify(err, null, 2))
      const error = err as { errors?: Array<{ message: string }> }
      setError(error.errors?.[0]?.message || 'An error occurred during sign up')
    }
  }

  const onPressVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoaded) {
      return
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId })
        router.push('/dashboard')
      }
    } catch (err: unknown) {
      console.error('Error:', JSON.stringify(err, null, 2))
      const error = err as { errors?: Array<{ message: string }> }
      setError(error.errors?.[0]?.message || 'An error occurred during verification')
    }
  }

  const signUpWithGoogle = async () => {
    if (!isLoaded) {
      return
    }

    try {
      setIsGoogleLoading(true)
      await signUp.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: '/sso-callback',
        redirectUrlComplete: '/dashboard',
      })
    } catch (err: unknown) {
      console.error('Error:', JSON.stringify(err, null, 2))
      const error = err as { errors?: Array<{ message: string }> }
      setError(error.errors?.[0]?.message || 'An error occurred during Google sign up')
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
        
        <section className="section hero sign-up">
          <div className="w-layout-blockcontainer container-default w-container">
            <div className="w-layout-grid grid-2-columns sign-up-grid-2-col">
              <div className="overflow-hidden---tablet">
                <div>
                  <h1>Create your account</h1>
                  <p className="color-neutral-200 mg-bottom-40px">
                    Join us today and start your journey with our platform. Sign up now to access exclusive features.
                  </p>
                  <h2 className="heading-h3-size mg-bottom-32px mg-bottom-16px-tablet">What our clients say</h2>
                </div>
                
                <div className="position-relative">
                  <div className="card-content sign-up-testimonial">
                    <div className="gradient-border line-single-left"></div>
                    <div>
                      <h3 className="heading-h4-size mg-bottom-16px">&quot;It is an amazing tool&quot;</h3>
                      <p className="color-neutral-200 mg-bottom-24px">
                        This platform has transformed the way I work. The features are intuitive and powerful.
                      </p>
                      <div className="w-layout-grid grid-2-columns testimonial-grid-2-col v3">
                        <Image 
                          src="/images/sophie-moore-testimonial-image-gpt-x-webflow-template.png" 
                          alt="User Testimonial" 
                          className="avatar-circle"
                          width={64}
                          height={64}
                        />
                        <div>
                          <div className="heading-h5-size mg-bottom-6px">Happy User</div>
                          <div className="text-200 color-neutral-200">Verified Customer</div>
                        </div>
                      </div>
                    </div>
                    <div className="gradient-border line-single-right"></div>
                  </div>
                  <Image 
                    className="floating-sphere testimonial-sphere" 
                    src="/images/shape-v15-gpt-x-webflow-template.png" 
                    alt=""
                    width={533}
                    height={533}
                  />
                </div>
              </div>
              
              <div className="content-right-full-width-wrapper testimonial-right-full-width-wrapper">
                {!pendingVerification ? (
                  <div className="sign-up-card-content w-form">
                    <form id="wf-form-Sign-Up-Form" name="wf-form-Sign-Up-Form" onSubmit={handleSubmit}>
                      {error && (
                        <div className="error-message w-form-fail" style={{ display: 'block', marginBottom: '20px' }}>
                          <div>{error}</div>
                        </div>
                      )}
                      
                      <div className="w-layout-grid grid-2-columns form">
                        <div>
                          <label htmlFor="Name">Name</label>
                          <input 
                            className="input w-input" 
                            maxLength={256} 
                            name="Name" 
                            placeholder="Full name" 
                            type="text" 
                            id="Name" 
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label htmlFor="Email-2">Email</label>
                          <input 
                            className="input w-input" 
                            maxLength={256} 
                            name="Email" 
                            placeholder="Email address" 
                            type="email" 
                            id="Email-2" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div style={{ gridColumn: '1 / -1' }}>
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
                        <div style={{ gridColumn: '1 / -1' }}>
                          <label className="w-checkbox checkbox-field-wrapper small mg-bottom-0">
                            <div className={`w-checkbox-input w-checkbox-input--inputType-custom checkbox small ${termsAccepted ? 'w--redirected-checked' : ''}`}></div>
                            <input 
                              id="Terms-And-Conditions" 
                              type="checkbox" 
                              name="Terms-And-Conditions" 
                              style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                              checked={termsAccepted}
                              onChange={(e) => setTermsAccepted(e.target.checked)}
                            />
                            <span className="w-form-label">
                              I have read and agree to the Terms &amp; Conditions
                            </span>
                          </label>
                        </div>
                        <button 
                          type="submit" 
                          className="btn-primary w-button" 
                          style={{ gridColumn: '1 / -1' }}
                          disabled={!isLoaded}
                        >
                          Create Account
                        </button>
                      </div>
                    </form>
                    
                    <div className="mg-top-40px">
                      <div className="mg-bottom-32px">
                        <div className="flex-horizontal">
                          <div className="divider _0px width-100"></div>
                          <div className="badge-primary sign-in-or">or</div>
                          <div className="divider _0px width-100"></div>
                        </div>
                      </div>
                      
                      <div className="mg-bottom-24px">
                        <button 
                          onClick={signUpWithGoogle}
                          disabled={!isLoaded || isGoogleLoading}
                          className="btn-secondary sign-in-button w-inline-block"
                          style={{ width: '100%', textAlign: 'center', cursor: 'pointer' }}
                        >
                          <Image src="/images/google-icon-gpt-x-webflow-template.svg" alt="Google Icon" width={20} height={20} />
                          <div className="mg-top-4px">{isGoogleLoading ? 'Redirecting...' : 'Sign up with Google'}</div>
                        </button>
                      </div>
                      
                      <div className="flex-horizontal text-center">
                        <p className="color-neutral-200 mg-bottom-0">
                          Already have an account? <Link href="/sign-in" className="link text-decoration">Sign in</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="sign-up-card-content w-form">
                    <form onSubmit={onPressVerify}>
                      <h2 className="heading-h3-size mg-bottom-16px">Verify your email</h2>
                      <p className="color-neutral-200 mg-bottom-32px">
                        We&apos;ve sent a verification code to {email}
                      </p>
                      
                      {error && (
                        <div className="error-message w-form-fail" style={{ display: 'block', marginBottom: '20px' }}>
                          <div>{error}</div>
                        </div>
                      )}
                      
                      <div className="mg-bottom-24px">
                        <label htmlFor="code">Verification code</label>
                        <input 
                          className="input w-input" 
                          name="code" 
                          placeholder="Enter verification code" 
                          type="text" 
                          id="code" 
                          required
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                        />
                      </div>
                      
                      <button 
                        type="submit" 
                        className="btn-primary w-button" 
                        style={{ width: '100%' }}
                        disabled={!isLoaded}
                      >
                        Verify Email
                      </button>
                      
                      <div className="success-message w-form-done" style={{ display: 'none' }}>
                        <div>
                          <div className="line-rounded-icon success-message-check large"></div>
                          <h3>Thank you</h3>
                          <div>Your email has been verified successfully!</div>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                
                <div className="content-right-full-width testimonial-right-full-width">
                  <div className="gradient-border line-single-left"></div>
                  <div className="gradient-border line-single-right"></div>
                </div>
                <div className="floating-shape sign-up-shape">
                  <Image 
                    src="/images/shape-v8-gpt-x-webflow-template.png" 
                    alt=""
                    width={1018}
                    height={1018}
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
