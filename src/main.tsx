import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

async function mountApp() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mock/browser');
    await worker.start();
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

mountApp();