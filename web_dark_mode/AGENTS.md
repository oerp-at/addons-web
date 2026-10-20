# web_dark_mode – agent notes

Dark mode for the community backend: user menu switch "Dark Mode", stored per user
(`res.users.settings.dark_mode`), optional "Device Dependent Dark Mode" in the user
preferences. Excludes `web_enterprise` (enterprise ships its own dark mode).

## How it works

- The `color_scheme` cookie selects the asset bundle: core loads `web.assets_web_dark`
  when it is `dark`. This module fills that bundle with its `*.dark.scss` overrides.
- `ir.http._post_dispatch` sets the cookie from the user preference, or from the
  `Sec-CH-Prefers-Color-Scheme` client hint when device dependent is on.
- `static/src/js/switch_item.esm.js`: service `color_scheme` adds the user menu switch,
  writes `dark_mode` and reloads. Device dependent hides the switch and follows the
  browser (`prefers-color-scheme`, one reload when it changes).

## Origin (20.0)

- Ported from OCA/web 19.0 with history (`git format-patch | git am`); no OCA 20.0
  version exists yet. When OCA publishes one, take theirs instead of merging.
- Used by the local Weboffice instance `odoo_mr` (Weboffice task 13895).

## Tests

`odoo test -m web_dark_mode` runs `tests/test_ir_http.py` (cookie logic, 9 tests).
Click test: toggle "Dark Mode" in the user menu, the page reloads dark; toggle back.
