# Testing Guide for Auth Flow Integration

## Prerequisites

Before testing the new authentication pages, you need to configure valid Clerk API keys:

1. Create or access your Clerk account at https://dashboard.clerk.com/
2. Create a new application or use an existing one
3. Navigate to API Keys in the Clerk Dashboard
4. Copy the following keys:
   - **Publishable Key** (starts with `pk_test_` or `pk_live_`)
   - **Secret Key** (starts with `sk_test_` or `sk_live_`)

## Setup

1. **Create Environment File:**
   ```bash
   cp .env.example .env.local
   ```

2. **Add Your Clerk Keys:**
   Edit `.env.local` and add your actual keys:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
   CLERK_SECRET_KEY=sk_test_your_actual_secret_key_here
   ```

3. **Install Dependencies (if not already done):**
   ```bash
   npm install
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```

5. **Open Browser:**
   Navigate to http://localhost:3000/sign-in

## Testing Checklist

### Visual Design Testing

#### Sign-In Page (http://localhost:3000/sign-in)

**Layout & Styling:**
- [ ] Page displays with dark gradient-bordered card design
- [ ] Header shows logo that links to homepage
- [ ] "Welcome back" heading is visible and properly styled
- [ ] Email and password input fields are styled with Webflow CSS
- [ ] "Remember me" checkbox displays correctly (visual only, not functional)
- [ ] "Forgot password?" link is visible and styled
- [ ] "Sign in" button is styled with primary button design
- [ ] "or" divider with gradient borders displays correctly
- [ ] Google sign-in button shows Google icon and text
- [ ] "Sign up today" link is visible at bottom
- [ ] Footer displays with branding
- [ ] Two floating spheres display as decorative elements (top and bottom)

**Responsive Design:**
- [ ] Test on desktop (1920x1080)
- [ ] Test on tablet (768x1024)
- [ ] Test on mobile (375x667)
- [ ] All elements resize appropriately
- [ ] Floating spheres adjust position on different screens

#### Sign-Up Page (http://localhost:3000/sign-up)

**Layout & Styling:**
- [ ] Page displays with 2-column layout
- [ ] Left column shows testimonial section with user feedback
- [ ] Right column shows sign-up form
- [ ] Header shows logo that links to homepage
- [ ] "Create your account" heading is visible
- [ ] Name and Email fields display side-by-side
- [ ] Password field spans full width
- [ ] Terms & Conditions checkbox is styled correctly
- [ ] "Create Account" button is styled with primary button design
- [ ] "or" divider with gradient borders displays correctly
- [ ] Google sign-up button shows Google icon and text
- [ ] "Sign in" link is visible at bottom
- [ ] Footer displays with branding
- [ ] Floating shapes display as decorative elements
- [ ] Gradient borders display on form container

**Responsive Design:**
- [ ] Test on desktop (1920x1080)
- [ ] Test on tablet (768x1024) - columns should stack
- [ ] Test on mobile (375x667) - columns should stack
- [ ] All elements resize appropriately
- [ ] Testimonial section remains visible on larger screens

### Functional Testing

#### Sign-In Flow

**Email/Password Authentication:**
1. [ ] Enter valid email and password → redirects to /dashboard
2. [ ] Enter invalid email → shows error message
3. [ ] Enter wrong password → shows error message
4. [ ] Leave fields empty → shows HTML5 validation
5. [ ] Check "Remember me" (visual only - doesn't affect auth)
6. [ ] Click "Forgot password?" → navigates to forgot password page
7. [ ] Click "Sign up today" → navigates to /sign-up

**Google OAuth:**
1. [ ] Click "Sign in with Google" button
2. [ ] Should redirect to Google OAuth consent screen
3. [ ] After Google auth → should redirect to /sso-callback
4. [ ] After callback → should redirect to /dashboard
5. [ ] Verify user is logged in on dashboard

**Error Handling:**
- [ ] Network error → displays user-friendly error message
- [ ] Invalid credentials → displays error in Webflow-styled error box
- [ ] Error messages are readable and properly styled

#### Sign-Up Flow

**Email/Password Registration:**
1. [ ] Enter name, email, password
2. [ ] Leave Terms & Conditions unchecked → shows error
3. [ ] Check Terms & Conditions
4. [ ] Submit form → shows verification screen
5. [ ] Check email for verification code
6. [ ] Enter correct code → redirects to /dashboard
7. [ ] Enter wrong code → shows error message
8. [ ] User is logged in on dashboard

**Name Parsing:**
- [ ] Single word name (e.g., "John") → firstName: "John", lastName: undefined
- [ ] Two word name (e.g., "John Doe") → firstName: "John", lastName: "Doe"
- [ ] Three+ word name (e.g., "John Paul Doe") → firstName: "John", lastName: "Paul Doe"
- [ ] Extra spaces → properly trimmed and parsed

**Google OAuth:**
1. [ ] Click "Sign up with Google" button
2. [ ] Should redirect to Google OAuth consent screen
3. [ ] After Google auth → should redirect to /sso-callback
4. [ ] After callback → should redirect to /dashboard
5. [ ] Verify user is logged in on dashboard

**Error Handling:**
- [ ] Email already exists → displays error message
- [ ] Weak password → displays Clerk's password requirements
- [ ] Invalid email format → displays error
- [ ] Verification code expired → displays error with option to resend
- [ ] All errors display in Webflow-styled error boxes

### Cross-Browser Testing

Test on multiple browsers:
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest, macOS/iOS)
- [ ] Edge (latest)

### Accessibility Testing

- [ ] All form fields have proper labels
- [ ] Tab navigation works correctly through form
- [ ] Error messages are announced to screen readers
- [ ] Buttons have proper focus states
- [ ] Color contrast meets WCAG standards

### Performance Testing

- [ ] CSS files load from /public/css/
- [ ] Images load from /public/images/
- [ ] No console errors in browser DevTools
- [ ] Page loads in under 2 seconds on 3G connection
- [ ] No layout shift when page loads

## Visual Comparison

Compare the React pages with the original HTML templates:

**Sign-In Comparison:**
- Original: `public/utility-pages/sign-in.html` (open in browser)
- React: http://localhost:3000/sign-in
- Compare side-by-side and verify matching:
  - Layout and spacing
  - Colors and gradients
  - Font sizes and weights
  - Button styles
  - Input field styling
  - Floating sphere positions

**Sign-Up Comparison:**
- Original: `public/utility-pages/sign-up.html` (open in browser)
- React: http://localhost:3000/sign-up
- Compare side-by-side and verify matching:
  - 2-column layout
  - Testimonial card design
  - Form layout and spacing
  - Colors and gradients
  - Floating shape positions

## Known Differences from Original HTML

The React implementation intentionally differs from the original HTML in these ways:

1. **Animations:** Webflow animations (data-w-id) are not implemented in React version
2. **Testimonial Carousel:** Sign-up page shows single testimonial instead of carousel
3. **Loading Animation:** Original HTML has page loading bar - not in React version
4. **Badge Carousel:** "More templates" badges removed from React version
5. **Functionality:** React pages have working authentication vs. static HTML forms

## Troubleshooting

### "Publishable key not valid" Error
**Problem:** Server returns 500 error with this message
**Solution:** Update .env.local with valid Clerk publishable key (starts with pk_test_ or pk_live_)

### Styles Not Loading
**Problem:** Page displays without Webflow styling
**Solution:** 
1. Verify files exist in public/css/ directory
2. Check browser DevTools Network tab for 404 errors
3. Clear browser cache and hard reload (Cmd+Shift+R or Ctrl+Shift+R)

### Images Not Loading
**Problem:** Logo or decorative images missing
**Solution:**
1. Verify images exist in public/images/ directory
2. Check browser DevTools Console for errors
3. Verify Next.js Image component is loading properly

### Build Fails
**Problem:** `npm run build` fails
**Solution:**
1. Ensure .env.local has valid Clerk keys
2. Check for TypeScript errors: `npx tsc --noEmit`
3. Run linter: `npm run lint`

## Reporting Issues

When reporting issues, include:
1. Browser and version
2. Screen size / device
3. Steps to reproduce
4. Expected vs actual behavior
5. Screenshots if visual issue
6. Console errors from browser DevTools

## Success Criteria

The implementation is complete when:
- ✅ Both pages match the visual design of original HTML templates
- ✅ All authentication flows work correctly with Clerk
- ✅ Error handling displays proper messages
- ✅ Forms validate input correctly
- ✅ OAuth redirects work as expected
- ✅ Pages are responsive on all screen sizes
- ✅ No console errors or warnings
- ✅ Linter passes with no errors
- ✅ Code review feedback addressed
