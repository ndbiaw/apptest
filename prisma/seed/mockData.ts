import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a9af54c2-de3c-46ba-8a26-5d9a886bae2f', '1Chance.Oberbrunner9@yahoo.com', 'Chris Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'token0123', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('d78b59e9-c4b2-4284-b43b-812f20234f55', '9Chadrick23@yahoo.com', 'Emily Davis', 'https://i.imgur.com/YfJQV5z.png?id=11', 'token0123', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a8cbb226-2e3d-4297-84a7-de488124efeb', '25Carleton_OHara@gmail.com', 'Chris Brown', 'https://i.imgur.com/YfJQV5z.png?id=27', 'token0123', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('8b134a60-078a-45d7-9c24-59fb92d19ce4', '33Damion.Jacobson@yahoo.com', 'Chris Brown', 'https://i.imgur.com/YfJQV5z.png?id=35', 'token456inv', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('0f005d9b-85e1-4303-af8e-3f5e1d27fd30', '41Jules_Zemlak@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=43', 'token456inv', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a1a592af-81d6-418f-9ec1-469cc38c75f6', '49Paula_Borer@gmail.com', 'Chris Brown', 'https://i.imgur.com/YfJQV5z.png?id=51', 'token0123', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('67706996-3ef6-48fe-990d-587f6907c247', '57Linwood.Reichel93@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=59', 'invtoken345', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('45cdd9f5-bfb6-4538-9f2f-99428de93ff6', '65Krista.King@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=67', 'token456inv', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c25b9f6d-01e2-47d3-b014-707a5ab50837', '73Robyn54@gmail.com', 'Chris Brown', 'https://i.imgur.com/YfJQV5z.png?id=75', '789tokeninv', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('571b3bbf-865f-456a-8002-573f21e5e7c0', 'Quizify', 'https://i.imgur.com/YfJQV5z.png?id=82');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b8e8e882-0ebb-4419-9157-c96bc2350842', 'LearnQuest', 'https://i.imgur.com/YfJQV5z.png?id=85');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('38208443-11dd-4d48-8f95-244acb387d9a', 'Quizify', 'https://i.imgur.com/YfJQV5z.png?id=88');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('a60e2b46-a4a0-46ae-89b7-ef7254c13594', 'LearnQuest', 'https://i.imgur.com/YfJQV5z.png?id=91');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('09a90d95-ac58-4f9b-ac9c-1a3aeb7f79c6', 'LearnQuest', 'https://i.imgur.com/YfJQV5z.png?id=94');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('ae3b9636-eadd-4978-96d1-b37c031adb58', 'LearnQuest', 'https://i.imgur.com/YfJQV5z.png?id=97');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('563c07eb-9c95-4e7e-ab1f-561b348b02b2', 'Quizify', 'https://i.imgur.com/YfJQV5z.png?id=100');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('9a9b87ad-8a72-411f-8f48-eb104c672004', 'EduTech Solutions', 'https://i.imgur.com/YfJQV5z.png?id=103');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('ef37606b-c3cb-4b61-8224-285b19fa41a6', 'KnowledgeHub', 'https://i.imgur.com/YfJQV5z.png?id=106');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b4a211b3-3923-4b40-807e-035449f199b3', 'Quizify', 'https://i.imgur.com/YfJQV5z.png?id=109');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('62bbeb59-8a0f-4a6c-9714-eef6e8f8b724', 'Quiz Editor', '67706996-3ef6-48fe-990d-587f6907c247', 'b8e8e882-0ebb-4419-9157-c96bc2350842');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('cb236880-ec35-4d99-862d-0b53fe7461f4', 'Viewer', 'c25b9f6d-01e2-47d3-b014-707a5ab50837', '563c07eb-9c95-4e7e-ab1f-561b348b02b2');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('73cbc57c-39c0-47c7-9f4a-d96422313ec5', 'Viewer', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '38208443-11dd-4d48-8f95-244acb387d9a');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('57221372-8d67-4fd1-bd2e-31615d24c7ff', 'Content Creator', 'a9af54c2-de3c-46ba-8a26-5d9a886bae2f', '563c07eb-9c95-4e7e-ab1f-561b348b02b2');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('635f13bb-a48b-409b-8174-72e511268324', 'Viewer', '0f005d9b-85e1-4303-af8e-3f5e1d27fd30', 'ef37606b-c3cb-4b61-8224-285b19fa41a6');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('1d1260d7-a9a3-4b99-8ad6-49157e3132a1', 'Administrator', 'a9af54c2-de3c-46ba-8a26-5d9a886bae2f', '38208443-11dd-4d48-8f95-244acb387d9a');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('e897be4c-2e17-4b61-9409-b2b4ff86de3c', 'Moderator', 'a1a592af-81d6-418f-9ec1-469cc38c75f6', '571b3bbf-865f-456a-8002-573f21e5e7c0');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('5d7aaf15-00f1-4a9a-9d7d-c8ea4176c5aa', 'Content Creator', 'c25b9f6d-01e2-47d3-b014-707a5ab50837', 'ae3b9636-eadd-4978-96d1-b37c031adb58');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('fd541424-2df6-4e2a-9027-ef12529de59f', 'Content Creator', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '563c07eb-9c95-4e7e-ab1f-561b348b02b2');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('80522863-4188-41ed-aba9-390de08ae940', 'Content Creator', 'a8cbb226-2e3d-4297-84a7-de488124efeb', '38208443-11dd-4d48-8f95-244acb387d9a');

INSERT INTO "Quiz" ("id", "title", "description", "isPublic", "docxFileUrl", "shareableLinkToken", "userId", "organizationId") VALUES ('00a8ba1f-2cb1-4c44-a3cf-baa22c733a95', 'Art and Culture Exploration', 'Test your knowledge on key historical events and figures.', true, 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=134', 'ghi789rst', 'a8cbb226-2e3d-4297-84a7-de488124efeb', 'ef37606b-c3cb-4b61-8224-285b19fa41a6');
INSERT INTO "Quiz" ("id", "title", "description", "isPublic", "docxFileUrl", "shareableLinkToken", "userId", "organizationId") VALUES ('362154b9-3e85-4640-a7bd-b33c6144ef6b', 'Fundamentals of Programming', 'Explore the world of art and culture with this quiz.', false, 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=140', 'jkl012opq', 'd78b59e9-c4b2-4284-b43b-812f20234f55', '563c07eb-9c95-4e7e-ab1f-561b348b02b2');
INSERT INTO "Quiz" ("id", "title", "description", "isPublic", "docxFileUrl", "shareableLinkToken", "userId", "organizationId") VALUES ('b3c99019-1c4e-490f-9890-b473b0a8f888', 'Art and Culture Exploration', 'Test your knowledge on key historical events and figures.', false, 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=146', 'ghi789rst', '8b134a60-078a-45d7-9c24-59fb92d19ce4', '9a9b87ad-8a72-411f-8f48-eb104c672004');
INSERT INTO "Quiz" ("id", "title", "description", "isPublic", "docxFileUrl", "shareableLinkToken", "userId", "organizationId") VALUES ('1c5a0e72-ecf3-4d5b-8d9f-7a7e771eea16', 'Art and Culture Exploration', 'Explore the world of art and culture with this quiz.', true, 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=152', 'abc123xyz', 'a9af54c2-de3c-46ba-8a26-5d9a886bae2f', 'a60e2b46-a4a0-46ae-89b7-ef7254c13594');
INSERT INTO "Quiz" ("id", "title", "description", "isPublic", "docxFileUrl", "shareableLinkToken", "userId", "organizationId") VALUES ('e88d3173-0163-43d9-a3c2-d8095fbf1cc3', 'Art and Culture Exploration', 'Explore the world of art and culture with this quiz.', false, 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=158', 'abc123xyz', 'c25b9f6d-01e2-47d3-b014-707a5ab50837', '09a90d95-ac58-4f9b-ac9c-1a3aeb7f79c6');
INSERT INTO "Quiz" ("id", "title", "description", "isPublic", "docxFileUrl", "shareableLinkToken", "userId", "organizationId") VALUES ('c3fd0214-6b61-4d3b-add1-dbb5f6021cca', 'Art and Culture Exploration', 'A comprehensive quiz covering the basics of biology.', false, 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=164', 'def456uvw', '45cdd9f5-bfb6-4538-9f2f-99428de93ff6', '9a9b87ad-8a72-411f-8f48-eb104c672004');
INSERT INTO "Quiz" ("id", "title", "description", "isPublic", "docxFileUrl", "shareableLinkToken", "userId", "organizationId") VALUES ('be8f6a77-a13b-4e01-930a-08e99d96b869', 'Advanced Mathematics Quiz', 'Test your knowledge on key historical events and figures.', true, 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=170', 'jkl012opq', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b4a211b3-3923-4b40-807e-035449f199b3');
INSERT INTO "Quiz" ("id", "title", "description", "isPublic", "docxFileUrl", "shareableLinkToken", "userId", "organizationId") VALUES ('b286a4bb-4952-4861-9313-41921576f27f', 'Art and Culture Exploration', 'An introductory quiz on programming concepts.', false, 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=176', 'abc123xyz', 'a1a592af-81d6-418f-9ec1-469cc38c75f6', 'b4a211b3-3923-4b40-807e-035449f199b3');
INSERT INTO "Quiz" ("id", "title", "description", "isPublic", "docxFileUrl", "shareableLinkToken", "userId", "organizationId") VALUES ('a7f9ed73-6a98-43dc-9d0c-14937354217f', 'Advanced Mathematics Quiz', 'Challenge yourself with advanced math problems.', false, 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=182', 'jkl012opq', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b4a211b3-3923-4b40-807e-035449f199b3');
INSERT INTO "Quiz" ("id", "title", "description", "isPublic", "docxFileUrl", "shareableLinkToken", "userId", "organizationId") VALUES ('03975299-080a-4f78-a49f-6a86e309415f', 'Fundamentals of Programming', 'Test your knowledge on key historical events and figures.', true, 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=188', 'ghi789rst', '0f005d9b-85e1-4303-af8e-3f5e1d27fd30', '571b3bbf-865f-456a-8002-573f21e5e7c0');

INSERT INTO "Question" ("id", "text", "imageUrl", "order", "quizId") VALUES ('139ca93f-db12-4da3-a169-551ddcf219e3', 'Who wrote To Kill a Mockingbird', 'https://i.imgur.com/YfJQV5z.png?id=192', 781, '03975299-080a-4f78-a49f-6a86e309415f');
INSERT INTO "Question" ("id", "text", "imageUrl", "order", "quizId") VALUES ('80720a66-d545-494e-a439-4ab16cc65325', 'What is the largest planet in our solar system', 'https://i.imgur.com/YfJQV5z.png?id=196', 384, 'b3c99019-1c4e-490f-9890-b473b0a8f888');
INSERT INTO "Question" ("id", "text", "imageUrl", "order", "quizId") VALUES ('5727e813-da44-4142-9f92-28f869bfb244', 'What is the capital of France', 'https://i.imgur.com/YfJQV5z.png?id=200', 654, 'b286a4bb-4952-4861-9313-41921576f27f');
INSERT INTO "Question" ("id", "text", "imageUrl", "order", "quizId") VALUES ('9bb2c658-fd75-42d6-b225-c3eb88f1594e', 'Who wrote To Kill a Mockingbird', 'https://i.imgur.com/YfJQV5z.png?id=204', 101, 'a7f9ed73-6a98-43dc-9d0c-14937354217f');
INSERT INTO "Question" ("id", "text", "imageUrl", "order", "quizId") VALUES ('a113dc2e-350f-4925-b94b-a7cd2dbcc0f8', 'What is the largest planet in our solar system', 'https://i.imgur.com/YfJQV5z.png?id=208', 513, 'b3c99019-1c4e-490f-9890-b473b0a8f888');
INSERT INTO "Question" ("id", "text", "imageUrl", "order", "quizId") VALUES ('3ede2a5e-406b-47ab-a61d-6a413c04d866', 'What year did the Titanic sink', 'https://i.imgur.com/YfJQV5z.png?id=212', 619, 'a7f9ed73-6a98-43dc-9d0c-14937354217f');
INSERT INTO "Question" ("id", "text", "imageUrl", "order", "quizId") VALUES ('9a71871f-f6ce-4b32-882b-9ff956882d26', 'What is the largest planet in our solar system', 'https://i.imgur.com/YfJQV5z.png?id=216', 194, 'c3fd0214-6b61-4d3b-add1-dbb5f6021cca');
INSERT INTO "Question" ("id", "text", "imageUrl", "order", "quizId") VALUES ('9e1f49cd-c72f-4028-842e-e2bed9726807', 'Who wrote To Kill a Mockingbird', 'https://i.imgur.com/YfJQV5z.png?id=220', 250, '1c5a0e72-ecf3-4d5b-8d9f-7a7e771eea16');
INSERT INTO "Question" ("id", "text", "imageUrl", "order", "quizId") VALUES ('5f42dcf5-8a8a-4922-9bc1-3a9eef782214', 'What is the largest planet in our solar system', 'https://i.imgur.com/YfJQV5z.png?id=224', 711, 'a7f9ed73-6a98-43dc-9d0c-14937354217f');
INSERT INTO "Question" ("id", "text", "imageUrl", "order", "quizId") VALUES ('a430b7ba-7040-43fd-827b-0cba74dfc559', 'What is the capital of France', 'https://i.imgur.com/YfJQV5z.png?id=228', 811, 'a7f9ed73-6a98-43dc-9d0c-14937354217f');

INSERT INTO "Choice" ("id", "text", "isCorrect", "order", "questionId") VALUES ('d540c54c-3c88-46a2-bc7f-dfac076eeb71', 'Who wrote To Kill a Mockingbird', true, 395, '3ede2a5e-406b-47ab-a61d-6a413c04d866');
INSERT INTO "Choice" ("id", "text", "isCorrect", "order", "questionId") VALUES ('b4908053-c69a-4312-853f-7c7ce16692e5', 'What is the boiling point of water in Celsius', true, 307, '3ede2a5e-406b-47ab-a61d-6a413c04d866');
INSERT INTO "Choice" ("id", "text", "isCorrect", "order", "questionId") VALUES ('9781ac41-50f7-4516-9465-61c65d477690', 'Which planet is known as the Red Planet', false, 771, '3ede2a5e-406b-47ab-a61d-6a413c04d866');
INSERT INTO "Choice" ("id", "text", "isCorrect", "order", "questionId") VALUES ('4e3d6fbf-5d10-4518-b352-e0a448901907', 'What is the largest mammal in the world', false, 353, '3ede2a5e-406b-47ab-a61d-6a413c04d866');
INSERT INTO "Choice" ("id", "text", "isCorrect", "order", "questionId") VALUES ('5200e007-5bf1-490a-bf34-55575570c69d', 'Who wrote To Kill a Mockingbird', true, 884, '9e1f49cd-c72f-4028-842e-e2bed9726807');
INSERT INTO "Choice" ("id", "text", "isCorrect", "order", "questionId") VALUES ('53bbb3e2-6610-4f97-83af-5fe1b1462fb8', 'What is the capital of France', true, 270, '5727e813-da44-4142-9f92-28f869bfb244');
INSERT INTO "Choice" ("id", "text", "isCorrect", "order", "questionId") VALUES ('c2cd3870-9fe7-47d0-a9ad-76e758a50b75', 'What is the capital of France', true, 301, '80720a66-d545-494e-a439-4ab16cc65325');
INSERT INTO "Choice" ("id", "text", "isCorrect", "order", "questionId") VALUES ('ae132dd2-2868-45c5-89db-cf1abb34ed03', 'Which planet is known as the Red Planet', true, 937, '9e1f49cd-c72f-4028-842e-e2bed9726807');
INSERT INTO "Choice" ("id", "text", "isCorrect", "order", "questionId") VALUES ('f0a7df03-3ad3-4943-941a-2ee2c55b81b8', 'Which planet is known as the Red Planet', false, 828, '9e1f49cd-c72f-4028-842e-e2bed9726807');
INSERT INTO "Choice" ("id", "text", "isCorrect", "order", "questionId") VALUES ('72c03750-9232-4c3a-a4b7-1e825ca0a06b', 'What is the largest mammal in the world', false, 961, '5727e813-da44-4142-9f92-28f869bfb244');

INSERT INTO "QuizAttempt" ("id", "startTime", "endTime", "score", "quizId", "userId") VALUES ('03413b88-9df2-4e2f-be6a-d4d2dab7ad51', '2025-10-05T00:07:23.548Z', '2024-07-13T22:54:35.305Z', '90', 'c3fd0214-6b61-4d3b-add1-dbb5f6021cca', 'a8cbb226-2e3d-4297-84a7-de488124efeb');
INSERT INTO "QuizAttempt" ("id", "startTime", "endTime", "score", "quizId", "userId") VALUES ('13c65b8f-9a95-4b0c-84bd-a4e490a273ba', '2025-07-15T18:30:13.441Z', '2025-06-15T04:12:41.324Z', '78', 'b3c99019-1c4e-490f-9890-b473b0a8f888', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "QuizAttempt" ("id", "startTime", "endTime", "score", "quizId", "userId") VALUES ('6f27ddf2-848b-41be-b2ae-771bd2da4d96', '2023-10-28T04:39:30.133Z', '2023-10-20T20:00:10.095Z', '67', '1c5a0e72-ecf3-4d5b-8d9f-7a7e771eea16', '67706996-3ef6-48fe-990d-587f6907c247');
INSERT INTO "QuizAttempt" ("id", "startTime", "endTime", "score", "quizId", "userId") VALUES ('0b560584-ee0e-4219-9a09-bcfd809e8c0a', '2025-09-17T23:43:07.219Z', '2023-12-06T01:35:51.175Z', '90', 'be8f6a77-a13b-4e01-930a-08e99d96b869', 'c25b9f6d-01e2-47d3-b014-707a5ab50837');
INSERT INTO "QuizAttempt" ("id", "startTime", "endTime", "score", "quizId", "userId") VALUES ('6ceecc56-12ad-482c-8dcb-32974c58757c', '2024-10-26T12:43:44.078Z', '2024-05-17T13:40:31.705Z', '78', 'b3c99019-1c4e-490f-9890-b473b0a8f888', '0f005d9b-85e1-4303-af8e-3f5e1d27fd30');
INSERT INTO "QuizAttempt" ("id", "startTime", "endTime", "score", "quizId", "userId") VALUES ('9f972d7a-42a7-4b82-b5c1-b0ff8e13acb7', '2025-05-18T19:15:59.935Z', '2023-12-05T13:27:55.472Z', '67', 'c3fd0214-6b61-4d3b-add1-dbb5f6021cca', 'a1a592af-81d6-418f-9ec1-469cc38c75f6');
INSERT INTO "QuizAttempt" ("id", "startTime", "endTime", "score", "quizId", "userId") VALUES ('8af6a200-fc45-4a06-b9e8-93a7cedaf8aa', '2024-04-14T18:56:52.496Z', '2023-12-13T15:26:55.193Z', '90', '1c5a0e72-ecf3-4d5b-8d9f-7a7e771eea16', 'a1a592af-81d6-418f-9ec1-469cc38c75f6');
INSERT INTO "QuizAttempt" ("id", "startTime", "endTime", "score", "quizId", "userId") VALUES ('c810f077-304f-4c97-862d-b6b7f8e67321', '2025-07-16T12:08:36.445Z', '2024-10-05T00:40:07.988Z', '78', 'a7f9ed73-6a98-43dc-9d0c-14937354217f', '45cdd9f5-bfb6-4538-9f2f-99428de93ff6');
INSERT INTO "QuizAttempt" ("id", "startTime", "endTime", "score", "quizId", "userId") VALUES ('5e439c96-ad43-4923-9a56-eabc3418a196', '2023-11-15T14:04:46.943Z', '2024-02-27T23:28:31.697Z', '78', '362154b9-3e85-4640-a7bd-b33c6144ef6b', '0f005d9b-85e1-4303-af8e-3f5e1d27fd30');
INSERT INTO "QuizAttempt" ("id", "startTime", "endTime", "score", "quizId", "userId") VALUES ('3ab63a33-538b-4700-bb7b-67e48ce82b81', '2024-11-30T02:11:37.097Z', '2024-01-18T14:40:41.452Z', '85', 'b286a4bb-4952-4861-9313-41921576f27f', '8b134a60-078a-45d7-9c24-59fb92d19ce4');

INSERT INTO "QuizAttemptAnswer" ("id", "isCorrect", "quizAttemptId", "questionId", "choiceId") VALUES ('3644991f-66aa-4f25-acf3-5a8e197f1567', true, '0b560584-ee0e-4219-9a09-bcfd809e8c0a', '5727e813-da44-4142-9f92-28f869bfb244', 'ae132dd2-2868-45c5-89db-cf1abb34ed03');
INSERT INTO "QuizAttemptAnswer" ("id", "isCorrect", "quizAttemptId", "questionId", "choiceId") VALUES ('3d1c1e0a-bca6-4e6b-8205-a28138e49746', true, '0b560584-ee0e-4219-9a09-bcfd809e8c0a', '9bb2c658-fd75-42d6-b225-c3eb88f1594e', '9781ac41-50f7-4516-9465-61c65d477690');
INSERT INTO "QuizAttemptAnswer" ("id", "isCorrect", "quizAttemptId", "questionId", "choiceId") VALUES ('691714d8-c6e3-49a5-846d-b1b305b29f75', true, '5e439c96-ad43-4923-9a56-eabc3418a196', '80720a66-d545-494e-a439-4ab16cc65325', '9781ac41-50f7-4516-9465-61c65d477690');
INSERT INTO "QuizAttemptAnswer" ("id", "isCorrect", "quizAttemptId", "questionId", "choiceId") VALUES ('eb407c31-a9bf-418b-9560-b9aa636f7298', false, '13c65b8f-9a95-4b0c-84bd-a4e490a273ba', '9bb2c658-fd75-42d6-b225-c3eb88f1594e', '53bbb3e2-6610-4f97-83af-5fe1b1462fb8');
INSERT INTO "QuizAttemptAnswer" ("id", "isCorrect", "quizAttemptId", "questionId", "choiceId") VALUES ('3b54eb7e-247d-42ee-a29a-a08804c4d3b8', true, '0b560584-ee0e-4219-9a09-bcfd809e8c0a', '5f42dcf5-8a8a-4922-9bc1-3a9eef782214', 'b4908053-c69a-4312-853f-7c7ce16692e5');
INSERT INTO "QuizAttemptAnswer" ("id", "isCorrect", "quizAttemptId", "questionId", "choiceId") VALUES ('6e0bd569-c61b-4cde-a161-37c492cbe438', true, '6ceecc56-12ad-482c-8dcb-32974c58757c', '5727e813-da44-4142-9f92-28f869bfb244', '53bbb3e2-6610-4f97-83af-5fe1b1462fb8');
INSERT INTO "QuizAttemptAnswer" ("id", "isCorrect", "quizAttemptId", "questionId", "choiceId") VALUES ('ed55e327-8c84-40f9-a1b1-92aeced66d6a', false, '3ab63a33-538b-4700-bb7b-67e48ce82b81', '5f42dcf5-8a8a-4922-9bc1-3a9eef782214', 'c2cd3870-9fe7-47d0-a9ad-76e758a50b75');
INSERT INTO "QuizAttemptAnswer" ("id", "isCorrect", "quizAttemptId", "questionId", "choiceId") VALUES ('bd0b507f-aa89-46d8-b005-0fa153e13014', false, '03413b88-9df2-4e2f-be6a-d4d2dab7ad51', '5727e813-da44-4142-9f92-28f869bfb244', '53bbb3e2-6610-4f97-83af-5fe1b1462fb8');
INSERT INTO "QuizAttemptAnswer" ("id", "isCorrect", "quizAttemptId", "questionId", "choiceId") VALUES ('fe995c67-f7ae-4f42-8df3-20b823103b6a', true, '6ceecc56-12ad-482c-8dcb-32974c58757c', '9e1f49cd-c72f-4028-842e-e2bed9726807', '53bbb3e2-6610-4f97-83af-5fe1b1462fb8');
INSERT INTO "QuizAttemptAnswer" ("id", "isCorrect", "quizAttemptId", "questionId", "choiceId") VALUES ('9688226b-dc75-4f62-a7cd-de149dc6bb8f', false, '03413b88-9df2-4e2f-be6a-d4d2dab7ad51', '9bb2c658-fd75-42d6-b225-c3eb88f1594e', '5200e007-5bf1-490a-bf34-55575570c69d');

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
