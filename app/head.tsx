export default function Head() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
      <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
      <link href="/css/kirks-amazing-site-b96f2d.webflow.css" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript" />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html:
            'WebFont.load({  google: {    families: ["DM Sans:regular,500,700","Inter:regular,500,700"]  }});',
        }}
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html:
            "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);",
        }}
      />
      <style>{`.w-webflow-badge{display:none !important;}`}</style>
    </>
  )
}
