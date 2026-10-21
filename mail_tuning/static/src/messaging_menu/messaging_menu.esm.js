/* Copyright 2026 Weboffice IT-Service und Marketing GmbH & Co KG
 * License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl). */

import {MENU_TABS} from "@mail/core/public_web/messaging_menu/messaging_menu_model";
import {MessagingMenu} from "@mail/core/public_web/messaging_menu/messaging_menu";
import {_t} from "@web/core/l10n/translation";
import {patch} from "@web/core/utils/patch";

patch(MessagingMenu.prototype, {
    /**
     * Label of a tab in the navigation bar of the messaging menu. "Notifications" is too
     * wide for the bar in some languages (German "Benachrichtigungen") and makes it
     * scroll, so the notification tab is called "Messages".
     *
     * @param {import("models").MessagingMenuTab} tab
     * @returns {string}
     */
    tabLabel(tab) {
        if (tab.id === MENU_TABS.NOTIFICATION) {
            return _t("Messages");
        }
        return tab.label;
    },
});
