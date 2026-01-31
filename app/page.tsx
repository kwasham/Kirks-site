export default function HomePage() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      textAlign: 'center',
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#333',
      }}>
        Next.js migration in progress
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: '#666',
        maxWidth: '600px',
      }}>
        This site is being migrated from a static Webflow export to Next.js.
        The legacy site can be found in the <code style={{
          backgroundColor: '#f0f0f0',
          padding: '0.25rem 0.5rem',
          borderRadius: '4px',
          fontFamily: 'monospace',
        }}>legacy/</code> folder.
      </p>
    </main>
  )
}
