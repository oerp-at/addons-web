# web_responsive – agent notes

Community replacement for the enterprise home menu: grid apps menu in the navbar
(`button.o_grid_apps_menu__button`), menu search, mobile layout. Excludes
`web_enterprise`.

## Origin (20.0)

- Taken over unchanged from OCA/web#3679 and rebased onto 20.0 of this fork. When OCA
  merges its own 20.0 version, replace this branch with the OCA one instead of merging.
- Used by the OrderJim community instances (Weboffice task 13871).

## Tests

`odoo test -m web_responsive` runs the Python tests and
`static/tests/apps_menu.test.js`. Click test: open the apps menu, type into
`.app-menu-container .search-input`, Enter opens the first hit; check desktop and a
mobile viewport.
