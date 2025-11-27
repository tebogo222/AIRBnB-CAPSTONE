// Root entrypoint for hosting platforms that expect `node server.js` at project root.
// This simply requires the actual backend server implementation located in ./backend/server.js
// We keep this as a tiny proxy so platforms like Render that run `node server.js` will start the app.
try {
  require('./backend/server');
} catch (err) {
  // Print a clear error message and exit with failure so logs show the real problem.
  console.error('Failed to start backend from root server.js:', err && err.stack ? err.stack : err);
  process.exit(1);
}
