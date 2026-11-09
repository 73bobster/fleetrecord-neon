// Test build only. Adds a banner and marks the tab title so this copy cannot be mistaken for the live app.
(function () {
  document.title = '[Neon test] ' + document.title.replace(/^\[Neon test\]\s*/, '');
  new MutationObserver(() => { if (!document.title.startsWith('[Neon test]')) document.title = '[Neon test] ' + document.title; }).observe(document.querySelector('title'), { childList: true });
  const bar = document.createElement('div');
  bar.id = 'test-banner';
  bar.setAttribute('role', 'note');
  bar.innerHTML = '<b>NEON TEST</b><span>Proof of concept on a Neon database</span><span class="long">· data is copied from the live system each night and reset · <a href="https://fleetrecord.app/">go to live FleetRecord</a></span>';
  document.body.prepend(bar);
})();
