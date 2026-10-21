# Copyright 2026 Weboffice IT-Service und Marketing GmbH & Co KG
# License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl.html).

{
    "name": "Mail Tuning",
    "summary": "Small usability fixes for Discuss, e.g. a shorter notification tab label",
    "version": "20.0.1.0.0",
    "category": "Productivity/Discuss",
    "website": "https://github.com/oerp-at/addons-web",
    "author": "Weboffice IT-Service und Marketing GmbH & Co KG",
    "license": "LGPL-3",
    "installable": True,
    "depends": ["mail"],
    "assets": {
        "web.assets_backend": [
            "mail_tuning/static/src/**/*",
        ],
        "web.assets_unit_tests": [
            "mail_tuning/static/tests/**/*.test.js",
        ],
    },
}
