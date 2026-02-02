# Authentication UI Components

This document describes the visual design of the authentication pages.

## Sign-In Page (`/sign-in`)

**Layout:**
- Clean, centered form on a light gray background (`bg-gray-50`)
- White card container with shadow and rounded corners
- Maximum width of 28rem (448px)

**Components:**
1. **Header**
   - Title: "Sign in to your account"
   - Large, bold, centered text (3xl font size)

2. **Error Display**
   - Red background (`bg-red-50`)
   - Red text for error messages
   - Appears above form when errors occur

3. **Form Fields**
   - Email input:
     - Label: "Email address"
     - Type: email
     - Placeholder: "Email address"
     - Full width with border
   - Password input:
     - Label: "Password"
     - Type: password
     - Placeholder: "Password"
     - Full width with border

4. **Submit Button**
   - Text: "Sign in"
   - Indigo background (`bg-indigo-600`)
   - White text
   - Full width
   - Hover effect (darker indigo)
   - Disabled state while loading

5. **Footer Link**
   - Text: "Don't have an account? Sign up"
   - "Sign up" is a link to `/sign-up`
   - Centered below the button

## Sign-Up Page (`/sign-up`)

**Two-Step Process:**

### Step 1: Email and Password Entry

Similar layout to sign-in page with:
- Title: "Create your account"
- Email input field
- Password input field (for new password)
- Submit button: "Sign up"
- Footer link: "Already have an account? Sign in"

### Step 2: Email Verification

After submitting email/password:
- Title: "Verify your email"
- Info text: "We've sent a verification code to [user's email]"
- Verification code input:
  - Label: "Verification code"
  - Type: text
  - Placeholder: "Enter verification code"
- Submit button: "Verify Email"

## Dashboard Page (`/dashboard`)

**Layout:**
- Full-height page with light gray background
- Navigation bar at top
- Main content area

**Navigation Bar:**
- White background with shadow
- Left side: "Kirk's Site" logo/title
- Right side: "Sign out" button (indigo)

**Main Content:**

1. **Welcome Section**
   - Heading: "Dashboard Overview"
   - Subtext: "Welcome back, [User Name/Email]!"

2. **Information Cards** (3-column grid on desktop)
   
   **Card 1: Profile**
   - Title: "Profile"
   - Email address
   - Full name (if provided)
   
   **Card 2: Account Status**
   - Title: "Account Status"
   - Status badge: "Active" (green text)
   - Member since date
   
   **Card 3: Quick Actions**
   - Title: "Quick Actions"
   - Links to legacy pages:
     - "View Home Page →"
     - "View About Page →"

3. **Recent Activity Section**
   - Title: "Recent Activity"
   - Placeholder text: "No recent activity to display."
   - Full width below the cards

**Card Styling:**
- White background
- Rounded corners
- Drop shadow
- Padding for comfortable spacing
- Responsive grid (stacks on mobile)

## Color Scheme

- **Primary Action**: Indigo (`indigo-600`, `indigo-700` on hover)
- **Background**: Light gray (`gray-50`)
- **Cards**: White
- **Text**: Dark gray (`gray-900` for headings, `gray-600` for body)
- **Borders**: Light gray (`gray-300`)
- **Errors**: Red (`red-50` background, `red-800` text)
- **Success**: Green (`green-600` for status indicators)

## Responsive Design

All pages are fully responsive:
- Mobile: Single column layout, full-width cards
- Tablet: 2-column grid where applicable
- Desktop: 3-column grid for dashboard cards

## Accessibility

- Proper label associations for all inputs
- Semantic HTML elements
- Focus states on interactive elements
- Clear error messaging
- Disabled states for buttons during loading
