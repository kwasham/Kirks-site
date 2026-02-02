import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  const user = await currentUser()

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <h1 className="text-xl font-bold text-gray-900">Kirk's Site</h1>
              </div>
            </div>
            <div className="flex items-center">
              <form action="/api/auth/signout" method="POST">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
          <p className="mt-2 text-gray-600">Welcome back, {user?.firstName || user?.emailAddresses[0]?.emailAddress}!</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900">Profile</h3>
            <p className="mt-2 text-sm text-gray-600">
              Email: {user?.emailAddresses[0]?.emailAddress}
            </p>
            {user?.firstName && (
              <p className="mt-1 text-sm text-gray-600">
                Name: {user.firstName} {user.lastName}
              </p>
            )}
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900">Account Status</h3>
            <p className="mt-2 text-sm text-gray-600">
              Status: <span className="text-green-600">Active</span>
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Member since: {new Date(user?.createdAt || '').toLocaleDateString()}
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            <div className="mt-2 space-y-2">
              <a
                href="/home-pages/home-v1.html"
                className="block text-sm text-indigo-600 hover:text-indigo-500"
              >
                View Home Page →
              </a>
              <a
                href="/about.html"
                className="block text-sm text-indigo-600 hover:text-indigo-500"
              >
                View About Page →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-white p-6 shadow">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <p className="mt-4 text-sm text-gray-600">No recent activity to display.</p>
        </div>
      </main>
    </div>
  )
}
