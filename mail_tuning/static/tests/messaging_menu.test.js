/* Copyright 2026 Weboffice IT-Service und Marketing GmbH & Co KG
 * License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl). */

import {
    contains,
    defineMailModels,
    openMessagingMenu,
    start,
    startServer,
} from "@mail/../tests/mail_test_helpers";
import {describe, test} from "@odoo/hoot";
import {serverState} from "@web/../tests/web_test_helpers";

// Load the patch shipped by mail_tuning
import "@mail_tuning/messaging_menu/messaging_menu.esm";

describe.current.tags("desktop");
defineMailModels();

test("mail_tuning: notification tab is labelled Messages", async () => {
    const pyEnv = await startServer();
    pyEnv["res.users"].write([serverState.userId], {notification_type: "inbox"});
    await start();
    await openMessagingMenu();
    await contains(
        ".o-mail-MessagingMenu-tab[data-id='notification'][aria-label='Messages']:has(:text('Messages'))"
    );
    await contains(".o-mail-MessagingMenu-tab:has(:text('Notifications'))", {count: 0});
});

test("mail_tuning: other tabs keep their label", async () => {
    await start();
    await openMessagingMenu();
    await contains(".o-mail-MessagingMenu-tab[data-id='chat']:has(:text('Chats'))");
    await contains(".o-mail-MessagingMenu-tab[data-id='channel']:has(:text('Channels'))");
});
