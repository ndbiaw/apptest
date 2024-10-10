/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createUserRouter from "./User.router";
import createQuizRouter from "./Quiz.router";
import createQuestionRouter from "./Question.router";
import createChoiceRouter from "./Choice.router";
import createQuizAttemptRouter from "./QuizAttempt.router";
import createQuizAttemptAnswerRouter from "./QuizAttemptAnswer.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as QuizClientType } from "./Quiz.router";
import { ClientType as QuestionClientType } from "./Question.router";
import { ClientType as ChoiceClientType } from "./Choice.router";
import { ClientType as QuizAttemptClientType } from "./QuizAttempt.router";
import { ClientType as QuizAttemptAnswerClientType } from "./QuizAttemptAnswer.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";

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
        user: createUserRouter(router, procedure),
        quiz: createQuizRouter(router, procedure),
        question: createQuestionRouter(router, procedure),
        choice: createChoiceRouter(router, procedure),
        quizAttempt: createQuizAttemptRouter(router, procedure),
        quizAttemptAnswer: createQuizAttemptAnswerRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    quiz: QuizClientType<AppRouter>;
    question: QuestionClientType<AppRouter>;
    choice: ChoiceClientType<AppRouter>;
    quizAttempt: QuizAttemptClientType<AppRouter>;
    quizAttemptAnswer: QuizAttemptAnswerClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
}
