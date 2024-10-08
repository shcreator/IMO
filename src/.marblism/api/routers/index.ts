/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createChatRouter from "./Chat.router";
import createChatParticipantRouter from "./ChatParticipant.router";
import createMessageRouter from "./Message.router";
import createMessageReadReceiptRouter from "./MessageReadReceipt.router";
import createCallRouter from "./Call.router";
import createContactRouter from "./Contact.router";
import createContactRequestRouter from "./ContactRequest.router";
import createUserSettingRouter from "./UserSetting.router";
import createUserRouter from "./User.router";
import createPushNotificationRouter from "./PushNotification.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import { ClientType as ChatClientType } from "./Chat.router";
import { ClientType as ChatParticipantClientType } from "./ChatParticipant.router";
import { ClientType as MessageClientType } from "./Message.router";
import { ClientType as MessageReadReceiptClientType } from "./MessageReadReceipt.router";
import { ClientType as CallClientType } from "./Call.router";
import { ClientType as ContactClientType } from "./Contact.router";
import { ClientType as ContactRequestClientType } from "./ContactRequest.router";
import { ClientType as UserSettingClientType } from "./UserSetting.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as PushNotificationClientType } from "./PushNotification.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        chat: createChatRouter(router, procedure),
        chatParticipant: createChatParticipantRouter(router, procedure),
        message: createMessageRouter(router, procedure),
        messageReadReceipt: createMessageReadReceiptRouter(router, procedure),
        call: createCallRouter(router, procedure),
        contact: createContactRouter(router, procedure),
        contactRequest: createContactRequestRouter(router, procedure),
        userSetting: createUserSettingRouter(router, procedure),
        user: createUserRouter(router, procedure),
        pushNotification: createPushNotificationRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    chat: ChatClientType<AppRouter>;
    chatParticipant: ChatParticipantClientType<AppRouter>;
    message: MessageClientType<AppRouter>;
    messageReadReceipt: MessageReadReceiptClientType<AppRouter>;
    call: CallClientType<AppRouter>;
    contact: ContactClientType<AppRouter>;
    contactRequest: ContactRequestClientType<AppRouter>;
    userSetting: UserSettingClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    pushNotification: PushNotificationClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
