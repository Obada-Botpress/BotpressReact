<h1>Dab Up Webchat</h1>

<p>
  A tiny React app that showcases the <code>@botpress/webchat</code> React components with a playful “dab up” flow.

  Demo <a href="https://spectacular-dapper.netlify.app/" target="new">Here </a>
</p>

<h2>What it uses</h2>
<ul>
  <li>React + Vite</li>
  <li>Tailwind CSS</li>
  <li><code>@botpress/webchat</code> (Container, Header, MessageList, Composer)</li>
</ul>

<h2>What it does</h2>
<ul>
  <li>Renders a real chat layout: fixed Header, scrollable MessageList, fixed Composer.</li>
  <li>Enriches messages so user posts are outgoing and bot posts are incoming with avatars.</li>
  <li>Shows typing only when the bot is expected to reply.</li>
  <li>Two buttons send a custom event <code>{ "dabbed": true | false }</code> to Botpress.</li>
</ul>

<h2>Botpress behavior</h2>
<ul>
  <li>A custom trigger listens for the boolean at <code>event.payload.payload.dabbed</code>.</li>
  <li><code>true</code> routes to <code>global.dabbed</code> workflow after a short hype line.</li>
  <li><code>false</code> routes to <code>global.fumbled</code> workflow after a playful “aura loss” line.</li>
  <li>If the user emphatically asks to jump (ALL CAPS or multiple exclamation marks), the bot may route them to the requested flow. Otherwise it keeps the convo light and simple.</li>
</ul>

<h2>React components</h2>
<p>We use the composable stack from the library:</p>
<ul>
  <li><strong>Container</strong> wraps everything.</li>
  <li><strong>Header</strong> at the top.</li>
  <li><strong>MessageList</strong> in the middle (only this area scrolls).</li>
  <li><strong>Composer</strong> at the bottom.</li>
</ul>
<p>More info: <a href="https://botpress.com/docs/webchat/react-library/get-started" target="_blank" rel="noopener noreferrer">React library quick start</a></p>

<h2>Styling</h2>
<p>
  This is my first time leaning into CSS details for Webchat. The UI is polished using the built-in
  <code>.bp*</code> CSS hooks so I can tweak spacing, borders, and avatars without changing React code.
</p>
<p>
  CSS classes reference:
  <a href="https://botpress.com/docs/webchat/get-started/configure-your-webchat#css-classes" target="_blank" rel="noopener noreferrer">
    Webchat CSS classes
  </a>
</p>

<h2>Run it</h2>
<pre><code class="language-bash">npm install
npm run dev
</code></pre>
