export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Next.js migration in progress
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          This site is being migrated from a static Webflow export to Next.js.
          The legacy site can be found in the{' '}
          <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono text-gray-800">
            legacy/
          </code>{' '}
          folder.
        </p>
        <div className="mt-8 pt-6 border-t border-gray-300">
          <p className="text-sm text-gray-600 italic">
            ✨ Styled with Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  )
}
