import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('d225b87a-482f-40da-99e0-de768c26e9c6', '1Mauricio.Roberts70@gmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=3', 'def456', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('3584d016-4efc-4ae5-a8b3-da2d837b50ad', '10Nils.Kuhic70@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=12', 'abc123', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('bd2b81b4-8de5-4c22-93a6-6cc6f98bb1f3', '19Eugenia68@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=21', 'mno345', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('90a017bf-3e69-43e9-9630-3a50f2860786', '28Liana9@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=30', 'def456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('dad7b3d5-be15-4ca1-90bb-ab89bd39ddb7', '37Anibal.Lehner@hotmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=39', 'abc123', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('4e51a8c0-8792-4da7-922e-487487873140', '46Wallace_Paucek61@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=48', 'mno345', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('7760a11d-b80a-441a-a6ce-c68ef87bf29e', '55Roel71@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=57', 'def456', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('80f42550-0d27-414d-8dbd-456e694f4cca', '64Tierra.Cremin@hotmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=66', 'jkl012', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('144becb6-475d-4f6b-8b63-ed01f6bf27c8', '73Friedrich.Murray@gmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=75', 'abc123', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('c946bddc-eb62-4404-80fd-27747b1b04b3', 'httpspushservice.comendpointabcde', 'sub_67890_ghijkl', '4e51a8c0-8792-4da7-922e-487487873140');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('cce261ae-d61b-465d-8f89-c65c0a7dc4b1', 'httpspushservice.comendpoint12345', 'sub_abcde_mnopqr', '7760a11d-b80a-441a-a6ce-c68ef87bf29e');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('67b8a7bc-e79f-48e3-834b-fc138fafa67e', 'httpspushservice.comendpointfghij', 'sub_fghij_stuvwx', 'dad7b3d5-be15-4ca1-90bb-ab89bd39ddb7');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('1cedb1bc-8fee-4740-8ceb-fc4a037d82ca', 'httpspushservice.comendpointklmno', 'sub_67890_ghijkl', '3584d016-4efc-4ae5-a8b3-da2d837b50ad');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('9663dfc1-be19-4ba9-b45a-b3fdc217b893', 'httpspushservice.comendpointklmno', 'sub_klmno_yzabcd', '90a017bf-3e69-43e9-9630-3a50f2860786');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('22ef2eb1-e07c-4193-a046-1fa462071879', 'httpspushservice.comendpoint12345', 'sub_klmno_yzabcd', 'dad7b3d5-be15-4ca1-90bb-ab89bd39ddb7');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('1b40a2a3-429d-49c8-9e92-729e9e351f86', 'httpspushservice.comendpoint12345', 'sub_klmno_yzabcd', '4e51a8c0-8792-4da7-922e-487487873140');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('a664e317-74c5-41ce-ae3d-01d92166ba1c', 'httpspushservice.comendpointklmno', 'sub_klmno_yzabcd', 'd225b87a-482f-40da-99e0-de768c26e9c6');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('670837b9-cea5-48b6-9717-d3f0ce35b361', 'httpspushservice.comendpointabcde', 'sub_fghij_stuvwx', '7760a11d-b80a-441a-a6ce-c68ef87bf29e');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('5d92b5b3-dd0c-473c-909b-904e182cf772', 'httpspushservice.comendpointklmno', 'sub_fghij_stuvwx', '4e51a8c0-8792-4da7-922e-487487873140');

INSERT INTO "Chat" ("id", "type", "creatorUserId") VALUES ('e4add0fa-f18c-4e7b-96c8-64c563c513d4', 'file', '80f42550-0d27-414d-8dbd-456e694f4cca');
INSERT INTO "Chat" ("id", "type", "creatorUserId") VALUES ('89525c71-6ca6-4982-9191-7148c8cfdb4f', 'image', '144becb6-475d-4f6b-8b63-ed01f6bf27c8');
INSERT INTO "Chat" ("id", "type", "creatorUserId") VALUES ('e5d34a01-ad5b-4344-9834-72bee8d6e563', 'file', '3584d016-4efc-4ae5-a8b3-da2d837b50ad');
INSERT INTO "Chat" ("id", "type", "creatorUserId") VALUES ('2206b161-cd9c-476e-967d-bb67e2aa80a9', 'video', '3584d016-4efc-4ae5-a8b3-da2d837b50ad');
INSERT INTO "Chat" ("id", "type", "creatorUserId") VALUES ('0931bfb8-885e-4125-9766-a1593a70a3fd', 'video', '3584d016-4efc-4ae5-a8b3-da2d837b50ad');
INSERT INTO "Chat" ("id", "type", "creatorUserId") VALUES ('5c8a3999-18a8-45ec-9174-4d3892bd24a3', 'audio', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Chat" ("id", "type", "creatorUserId") VALUES ('1a2aa825-2a6b-487e-baaa-c63081209ba4', 'video', '80f42550-0d27-414d-8dbd-456e694f4cca');
INSERT INTO "Chat" ("id", "type", "creatorUserId") VALUES ('7edf971f-37f9-4f92-bb1d-6611b125019f', 'text', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Chat" ("id", "type", "creatorUserId") VALUES ('e7d2d7f8-c458-48ca-bd9e-06eca196aca3', 'audio', '3584d016-4efc-4ae5-a8b3-da2d837b50ad');
INSERT INTO "Chat" ("id", "type", "creatorUserId") VALUES ('f02acec0-098f-4ceb-bff5-61aa2212b678', 'text', '4e51a8c0-8792-4da7-922e-487487873140');

INSERT INTO "ChatParticipant" ("id", "role", "chatId", "userId") VALUES ('34553df0-6e3b-4c60-ad7f-daf43e4ed20e', 'owner', 'e5d34a01-ad5b-4344-9834-72bee8d6e563', '3584d016-4efc-4ae5-a8b3-da2d837b50ad');
INSERT INTO "ChatParticipant" ("id", "role", "chatId", "userId") VALUES ('cc4bb4a9-50fc-47a2-b9aa-f0d83f44d7dd', 'owner', 'e7d2d7f8-c458-48ca-bd9e-06eca196aca3', '90a017bf-3e69-43e9-9630-3a50f2860786');
INSERT INTO "ChatParticipant" ("id", "role", "chatId", "userId") VALUES ('4d61e5e1-ebda-4c3d-8c7f-2b78b89756e4', 'moderator', '5c8a3999-18a8-45ec-9174-4d3892bd24a3', 'dad7b3d5-be15-4ca1-90bb-ab89bd39ddb7');
INSERT INTO "ChatParticipant" ("id", "role", "chatId", "userId") VALUES ('ea091086-ab23-44bb-a6dd-adbb5d4b5903', 'member', '1a2aa825-2a6b-487e-baaa-c63081209ba4', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "ChatParticipant" ("id", "role", "chatId", "userId") VALUES ('8acbbca6-57f1-49d5-aecf-b0d524d3101a', 'moderator', '0931bfb8-885e-4125-9766-a1593a70a3fd', '7760a11d-b80a-441a-a6ce-c68ef87bf29e');
INSERT INTO "ChatParticipant" ("id", "role", "chatId", "userId") VALUES ('71fc1ea3-2cc2-40ff-81c4-090e4286ce2c', 'moderator', '89525c71-6ca6-4982-9191-7148c8cfdb4f', '4e51a8c0-8792-4da7-922e-487487873140');
INSERT INTO "ChatParticipant" ("id", "role", "chatId", "userId") VALUES ('fe8055ee-855e-4320-b3cc-329c13c4632c', 'member', '7edf971f-37f9-4f92-bb1d-6611b125019f', '80f42550-0d27-414d-8dbd-456e694f4cca');
INSERT INTO "ChatParticipant" ("id", "role", "chatId", "userId") VALUES ('d1f4c187-1b10-4264-af0f-721c7f473659', 'guest', '5c8a3999-18a8-45ec-9174-4d3892bd24a3', '4e51a8c0-8792-4da7-922e-487487873140');
INSERT INTO "ChatParticipant" ("id", "role", "chatId", "userId") VALUES ('28276c35-18a5-4eae-9130-1f8ab14821b6', 'admin', 'f02acec0-098f-4ceb-bff5-61aa2212b678', 'bd2b81b4-8de5-4c22-93a6-6cc6f98bb1f3');
INSERT INTO "ChatParticipant" ("id", "role", "chatId", "userId") VALUES ('2f957fff-831c-42e4-8eb4-d7a05af42b42', 'member', 'e7d2d7f8-c458-48ca-bd9e-06eca196aca3', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "chatId", "senderUserId") VALUES ('faad34a7-222a-42a8-8b0d-00f850e34fae', 'Happy Birthday ', 'video', 'https://i.imgur.com/YfJQV5z.png?id=163', 'e7d2d7f8-c458-48ca-bd9e-06eca196aca3', 'bd2b81b4-8de5-4c22-93a6-6cc6f98bb1f3');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "chatId", "senderUserId") VALUES ('3af93384-3437-4782-acac-afb13d8f0b28', 'Hey how are you', 'file', 'https://i.imgur.com/YfJQV5z.png?id=167', '2206b161-cd9c-476e-967d-bb67e2aa80a9', '3584d016-4efc-4ae5-a8b3-da2d837b50ad');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "chatId", "senderUserId") VALUES ('a259da1c-9e48-4de5-9f74-f63de093a35a', 'Happy Birthday ', 'text', 'https://i.imgur.com/YfJQV5z.png?id=171', 'e5d34a01-ad5b-4344-9834-72bee8d6e563', '7760a11d-b80a-441a-a6ce-c68ef87bf29e');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "chatId", "senderUserId") VALUES ('3ce33c65-be2e-4519-b45f-c6c85139e09f', 'Check out this cool video', 'audio', 'https://i.imgur.com/YfJQV5z.png?id=175', '2206b161-cd9c-476e-967d-bb67e2aa80a9', 'bd2b81b4-8de5-4c22-93a6-6cc6f98bb1f3');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "chatId", "senderUserId") VALUES ('51fc1a02-4fcb-4964-9433-33e00b5b29d4', 'Check out this cool video', 'audio', 'https://i.imgur.com/YfJQV5z.png?id=179', '5c8a3999-18a8-45ec-9174-4d3892bd24a3', '7760a11d-b80a-441a-a6ce-c68ef87bf29e');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "chatId", "senderUserId") VALUES ('caeb2e69-3ee2-42e2-96ca-3f0fb8ad1462', 'Happy Birthday ', 'audio', 'https://i.imgur.com/YfJQV5z.png?id=183', '5c8a3999-18a8-45ec-9174-4d3892bd24a3', '80f42550-0d27-414d-8dbd-456e694f4cca');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "chatId", "senderUserId") VALUES ('e2be9cae-cbaf-495a-b70c-a7b734d59e79', 'Happy Birthday ', 'text', 'https://i.imgur.com/YfJQV5z.png?id=187', 'e5d34a01-ad5b-4344-9834-72bee8d6e563', '4e51a8c0-8792-4da7-922e-487487873140');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "chatId", "senderUserId") VALUES ('349a188e-11cb-47b7-8747-4c6ef52dbf3a', 'Did you get my last message', 'audio', 'https://i.imgur.com/YfJQV5z.png?id=191', '0931bfb8-885e-4125-9766-a1593a70a3fd', '144becb6-475d-4f6b-8b63-ed01f6bf27c8');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "chatId", "senderUserId") VALUES ('6ef5a08b-be4d-4872-8529-1197fe85f0c9', 'Check out this cool video', 'file', 'https://i.imgur.com/YfJQV5z.png?id=195', '2206b161-cd9c-476e-967d-bb67e2aa80a9', '144becb6-475d-4f6b-8b63-ed01f6bf27c8');
INSERT INTO "Message" ("id", "content", "messageType", "mediaUrl", "chatId", "senderUserId") VALUES ('06033513-96b6-400f-9592-5eb4ba7353d9', 'Hey how are you', 'audio', 'https://i.imgur.com/YfJQV5z.png?id=199', 'e5d34a01-ad5b-4344-9834-72bee8d6e563', '90a017bf-3e69-43e9-9630-3a50f2860786');

INSERT INTO "MessageReadReceipt" ("id", "readTimestamp", "messageId", "userId") VALUES ('5e210fc1-1562-4331-89b5-78534b2c4bbd', '2024-03-13T23:36:57.415Z', '349a188e-11cb-47b7-8747-4c6ef52dbf3a', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "MessageReadReceipt" ("id", "readTimestamp", "messageId", "userId") VALUES ('2b5d6459-dcf7-4bb1-a30d-ffb7292e2344', '2024-10-27T04:34:47.963Z', 'faad34a7-222a-42a8-8b0d-00f850e34fae', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "MessageReadReceipt" ("id", "readTimestamp", "messageId", "userId") VALUES ('d050660b-6cf6-4ae6-839e-c1266704be1d', '2024-06-23T13:25:52.507Z', '3af93384-3437-4782-acac-afb13d8f0b28', 'dad7b3d5-be15-4ca1-90bb-ab89bd39ddb7');
INSERT INTO "MessageReadReceipt" ("id", "readTimestamp", "messageId", "userId") VALUES ('2bd71d53-c571-44a6-a6b3-1d0525cdab92', '2024-01-16T03:28:48.809Z', '3af93384-3437-4782-acac-afb13d8f0b28', '144becb6-475d-4f6b-8b63-ed01f6bf27c8');
INSERT INTO "MessageReadReceipt" ("id", "readTimestamp", "messageId", "userId") VALUES ('de5e5d51-8dfc-4350-ac85-5e004a5e5c14', '2025-08-09T21:57:58.679Z', '3af93384-3437-4782-acac-afb13d8f0b28', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "MessageReadReceipt" ("id", "readTimestamp", "messageId", "userId") VALUES ('9cc98c24-c9b1-46fe-b396-fbb64d276cb6', '2024-01-14T18:33:20.846Z', '6ef5a08b-be4d-4872-8529-1197fe85f0c9', '144becb6-475d-4f6b-8b63-ed01f6bf27c8');
INSERT INTO "MessageReadReceipt" ("id", "readTimestamp", "messageId", "userId") VALUES ('e2ec76b0-d0b7-4c9f-b0ce-4cf0cf163ee0', '2025-03-28T10:30:40.497Z', '51fc1a02-4fcb-4964-9433-33e00b5b29d4', 'dad7b3d5-be15-4ca1-90bb-ab89bd39ddb7');
INSERT INTO "MessageReadReceipt" ("id", "readTimestamp", "messageId", "userId") VALUES ('91ce673a-b737-4d60-b16f-316dd0926f4e', '2023-10-12T23:04:29.923Z', '349a188e-11cb-47b7-8747-4c6ef52dbf3a', 'd225b87a-482f-40da-99e0-de768c26e9c6');
INSERT INTO "MessageReadReceipt" ("id", "readTimestamp", "messageId", "userId") VALUES ('d5182635-81c5-4acc-a5e8-799389b394aa', '2025-09-23T21:26:08.017Z', '6ef5a08b-be4d-4872-8529-1197fe85f0c9', '3584d016-4efc-4ae5-a8b3-da2d837b50ad');
INSERT INTO "MessageReadReceipt" ("id", "readTimestamp", "messageId", "userId") VALUES ('c4a60552-3dc3-4cdd-9552-e135f431b9fc', '2024-02-07T12:47:33.785Z', '6ef5a08b-be4d-4872-8529-1197fe85f0c9', 'd225b87a-482f-40da-99e0-de768c26e9c6');

INSERT INTO "Call" ("id", "callType", "startTime", "endTime", "callStatus", "callerUserId", "calleeUserId") VALUES ('674f5970-f040-4305-bd90-9e1d79522314', 'conference', '2024-02-05T03:08:54.663Z', '2024-04-09T03:59:17.017Z', 'connected', 'dad7b3d5-be15-4ca1-90bb-ab89bd39ddb7', '80f42550-0d27-414d-8dbd-456e694f4cca');
INSERT INTO "Call" ("id", "callType", "startTime", "endTime", "callStatus", "callerUserId", "calleeUserId") VALUES ('8a1e5405-3a76-4f4f-a4cd-8ea31cb665d9', 'audio', '2024-04-12T22:27:50.604Z', '2024-11-09T15:40:06.837Z', 'failed', '7760a11d-b80a-441a-a6ce-c68ef87bf29e', '144becb6-475d-4f6b-8b63-ed01f6bf27c8');
INSERT INTO "Call" ("id", "callType", "startTime", "endTime", "callStatus", "callerUserId", "calleeUserId") VALUES ('4416324c-a34d-4573-a61b-591579e8a36a', 'audio', '2024-11-27T08:38:21.891Z', '2024-04-02T20:33:56.065Z', 'failed', 'dad7b3d5-be15-4ca1-90bb-ab89bd39ddb7', '3584d016-4efc-4ae5-a8b3-da2d837b50ad');
INSERT INTO "Call" ("id", "callType", "startTime", "endTime", "callStatus", "callerUserId", "calleeUserId") VALUES ('85429059-9f8e-463b-9174-6347d1e0b6f9', 'audio', '2024-12-17T17:00:51.258Z', '2024-12-17T10:13:02.852Z', 'connected', '144becb6-475d-4f6b-8b63-ed01f6bf27c8', 'dad7b3d5-be15-4ca1-90bb-ab89bd39ddb7');
INSERT INTO "Call" ("id", "callType", "startTime", "endTime", "callStatus", "callerUserId", "calleeUserId") VALUES ('1ae40dc8-358e-459a-b9bf-2e08372f8003', 'video', '2025-07-16T20:33:15.027Z', '2024-07-12T21:47:35.879Z', 'ringing', '144becb6-475d-4f6b-8b63-ed01f6bf27c8', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Call" ("id", "callType", "startTime", "endTime", "callStatus", "callerUserId", "calleeUserId") VALUES ('3515dc22-c5c2-4d12-afcb-cf6672225613', 'group audio', '2024-03-05T23:48:59.199Z', '2024-08-20T12:06:12.820Z', 'failed', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Call" ("id", "callType", "startTime", "endTime", "callStatus", "callerUserId", "calleeUserId") VALUES ('75741422-20d3-4895-a9b8-a6b821bbd854', 'video', '2024-12-29T18:40:28.590Z', '2024-02-06T07:17:21.682Z', 'failed', '144becb6-475d-4f6b-8b63-ed01f6bf27c8', '90a017bf-3e69-43e9-9630-3a50f2860786');
INSERT INTO "Call" ("id", "callType", "startTime", "endTime", "callStatus", "callerUserId", "calleeUserId") VALUES ('f921251f-fe52-45d2-83ac-8a424bb28ec2', 'audio', '2025-06-12T09:20:05.771Z', '2025-03-25T01:41:57.721Z', 'ended', '3584d016-4efc-4ae5-a8b3-da2d837b50ad', '80f42550-0d27-414d-8dbd-456e694f4cca');
INSERT INTO "Call" ("id", "callType", "startTime", "endTime", "callStatus", "callerUserId", "calleeUserId") VALUES ('0566087d-142f-4c3a-a401-b3550d7a8b8f', 'conference', '2024-09-08T03:59:27.456Z', '2024-09-27T03:12:51.722Z', 'ringing', '144becb6-475d-4f6b-8b63-ed01f6bf27c8', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Call" ("id", "callType", "startTime", "endTime", "callStatus", "callerUserId", "calleeUserId") VALUES ('fc380fac-fc39-46ff-a7ab-eefac1017e33', 'audio', '2025-06-23T09:15:39.086Z', '2024-11-12T23:55:57.467Z', 'connected', 'bd2b81b4-8de5-4c22-93a6-6cc6f98bb1f3', '90a017bf-3e69-43e9-9630-3a50f2860786');

INSERT INTO "Contact" ("id", "userId", "contactUserId") VALUES ('5471d4ae-728a-4044-859b-fd70af4ba049', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '7760a11d-b80a-441a-a6ce-c68ef87bf29e');
INSERT INTO "Contact" ("id", "userId", "contactUserId") VALUES ('3badab6c-83a3-42fd-bcaa-cd38a13ac154', '7760a11d-b80a-441a-a6ce-c68ef87bf29e', 'd225b87a-482f-40da-99e0-de768c26e9c6');
INSERT INTO "Contact" ("id", "userId", "contactUserId") VALUES ('daef9183-6fc8-4282-9b5e-f32960f23cd0', '90a017bf-3e69-43e9-9630-3a50f2860786', 'dad7b3d5-be15-4ca1-90bb-ab89bd39ddb7');
INSERT INTO "Contact" ("id", "userId", "contactUserId") VALUES ('5914c10a-7c06-4daa-9da8-e3e525a11dfb', 'd225b87a-482f-40da-99e0-de768c26e9c6', 'bd2b81b4-8de5-4c22-93a6-6cc6f98bb1f3');
INSERT INTO "Contact" ("id", "userId", "contactUserId") VALUES ('8ad94056-02f8-4d7c-a956-0a19eb1a3c7c', '4e51a8c0-8792-4da7-922e-487487873140', '4e51a8c0-8792-4da7-922e-487487873140');
INSERT INTO "Contact" ("id", "userId", "contactUserId") VALUES ('59678cc8-661a-42f8-babf-d575698e16e3', '4e51a8c0-8792-4da7-922e-487487873140', 'd225b87a-482f-40da-99e0-de768c26e9c6');
INSERT INTO "Contact" ("id", "userId", "contactUserId") VALUES ('2ad5b2f0-a4f5-4983-a200-327ce7e4698c', '144becb6-475d-4f6b-8b63-ed01f6bf27c8', '90a017bf-3e69-43e9-9630-3a50f2860786');
INSERT INTO "Contact" ("id", "userId", "contactUserId") VALUES ('5b8397c5-9ea5-41b3-8bb3-8c7b4df787ec', '3584d016-4efc-4ae5-a8b3-da2d837b50ad', '144becb6-475d-4f6b-8b63-ed01f6bf27c8');
INSERT INTO "Contact" ("id", "userId", "contactUserId") VALUES ('7b1ad389-2a00-4c70-a559-5d78956abdb4', '3584d016-4efc-4ae5-a8b3-da2d837b50ad', '4e51a8c0-8792-4da7-922e-487487873140');
INSERT INTO "Contact" ("id", "userId", "contactUserId") VALUES ('0d4e6cdc-5066-40b2-bd62-a0b1a24bdf4d', '90a017bf-3e69-43e9-9630-3a50f2860786', 'd225b87a-482f-40da-99e0-de768c26e9c6');

INSERT INTO "ContactRequest" ("id", "status", "fromUserId", "toUserId") VALUES ('d8bf5f49-46ca-4748-bb14-22bcadf52272', 'blocked', '4e51a8c0-8792-4da7-922e-487487873140', '80f42550-0d27-414d-8dbd-456e694f4cca');
INSERT INTO "ContactRequest" ("id", "status", "fromUserId", "toUserId") VALUES ('d7582b73-c558-47af-ab7a-b08d33840927', 'pending', '7760a11d-b80a-441a-a6ce-c68ef87bf29e', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "ContactRequest" ("id", "status", "fromUserId", "toUserId") VALUES ('9f344541-4d39-4b21-82db-13e41d9f8e25', 'blocked', '90a017bf-3e69-43e9-9630-3a50f2860786', 'dad7b3d5-be15-4ca1-90bb-ab89bd39ddb7');
INSERT INTO "ContactRequest" ("id", "status", "fromUserId", "toUserId") VALUES ('9dce1e83-758f-414e-b5a7-c2b61e7fe333', 'accepted', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '4e51a8c0-8792-4da7-922e-487487873140');
INSERT INTO "ContactRequest" ("id", "status", "fromUserId", "toUserId") VALUES ('cf142527-1c4b-4bec-9e2a-144f168e42e0', 'accepted', '80f42550-0d27-414d-8dbd-456e694f4cca', 'd225b87a-482f-40da-99e0-de768c26e9c6');
INSERT INTO "ContactRequest" ("id", "status", "fromUserId", "toUserId") VALUES ('bdaa4d36-690a-4b17-953e-96684432a4ef', 'cancelled', '3584d016-4efc-4ae5-a8b3-da2d837b50ad', '90a017bf-3e69-43e9-9630-3a50f2860786');
INSERT INTO "ContactRequest" ("id", "status", "fromUserId", "toUserId") VALUES ('3f6a49cd-f995-40e6-93f3-737de7dbe71c', 'accepted', 'bd2b81b4-8de5-4c22-93a6-6cc6f98bb1f3', 'bd2b81b4-8de5-4c22-93a6-6cc6f98bb1f3');
INSERT INTO "ContactRequest" ("id", "status", "fromUserId", "toUserId") VALUES ('9dd066e0-8eef-4f55-b5c0-33ed5378d632', 'cancelled', '144becb6-475d-4f6b-8b63-ed01f6bf27c8', '4e51a8c0-8792-4da7-922e-487487873140');
INSERT INTO "ContactRequest" ("id", "status", "fromUserId", "toUserId") VALUES ('5615a343-b0fd-44cf-99a0-f16dcc841a7a', 'cancelled', '80f42550-0d27-414d-8dbd-456e694f4cca', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "ContactRequest" ("id", "status", "fromUserId", "toUserId") VALUES ('47ad6772-ea2a-439a-826a-fd56ab371edf', 'blocked', '144becb6-475d-4f6b-8b63-ed01f6bf27c8', '7760a11d-b80a-441a-a6ce-c68ef87bf29e');

INSERT INTO "UserSetting" ("id", "settingName", "settingValue", "userId") VALUES ('eea45006-f59a-4623-9b05-f47a1545c566', 'language', 'true', 'bd2b81b4-8de5-4c22-93a6-6cc6f98bb1f3');
INSERT INTO "UserSetting" ("id", "settingName", "settingValue", "userId") VALUES ('d998e96d-b53e-4f4b-9f9d-25b3b8809069', 'language', 'dark', 'd225b87a-482f-40da-99e0-de768c26e9c6');
INSERT INTO "UserSetting" ("id", "settingName", "settingValue", "userId") VALUES ('80838f5d-97af-418e-b91a-88d20c095959', 'notification', 'English', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "UserSetting" ("id", "settingName", "settingValue", "userId") VALUES ('e7e270bc-5495-4f80-9826-3a3ba4492db3', 'theme', 'disabled', 'dad7b3d5-be15-4ca1-90bb-ab89bd39ddb7');
INSERT INTO "UserSetting" ("id", "settingName", "settingValue", "userId") VALUES ('6c165ecf-6575-418a-90a4-4e3ec9b7c7cc', 'theme', 'enabled', '3584d016-4efc-4ae5-a8b3-da2d837b50ad');
INSERT INTO "UserSetting" ("id", "settingName", "settingValue", "userId") VALUES ('92b240a9-1479-4ac8-9e55-10ab8fdde8bb', 'theme', 'dark', '144becb6-475d-4f6b-8b63-ed01f6bf27c8');
INSERT INTO "UserSetting" ("id", "settingName", "settingValue", "userId") VALUES ('65261a0d-ad23-45a9-b637-90ea14c48c7a', 'autoUpdate', 'true', 'd225b87a-482f-40da-99e0-de768c26e9c6');
INSERT INTO "UserSetting" ("id", "settingName", "settingValue", "userId") VALUES ('41bf136c-8978-41bb-88a6-ac2d5f58738e', 'theme', 'dark', '7760a11d-b80a-441a-a6ce-c68ef87bf29e');
INSERT INTO "UserSetting" ("id", "settingName", "settingValue", "userId") VALUES ('15792044-db36-4889-ab36-98f0f0b18152', 'autoUpdate', 'disabled', 'd225b87a-482f-40da-99e0-de768c26e9c6');
INSERT INTO "UserSetting" ("id", "settingName", "settingValue", "userId") VALUES ('721b34fe-116d-4a85-95fc-1b72b5df5e91', 'language', 'English', '90a017bf-3e69-43e9-9630-3a50f2860786');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
