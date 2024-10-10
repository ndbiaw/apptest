/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.QuizAttemptInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quizAttempt.createMany(input as any))),

        create: procedure.input($Schema.QuizAttemptInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quizAttempt.create(input as any))),

        deleteMany: procedure.input($Schema.QuizAttemptInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quizAttempt.deleteMany(input as any))),

        delete: procedure.input($Schema.QuizAttemptInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quizAttempt.delete(input as any))),

        findFirst: procedure.input($Schema.QuizAttemptInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).quizAttempt.findFirst(input as any))),

        findMany: procedure.input($Schema.QuizAttemptInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).quizAttempt.findMany(input as any))),

        findUnique: procedure.input($Schema.QuizAttemptInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).quizAttempt.findUnique(input as any))),

        updateMany: procedure.input($Schema.QuizAttemptInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quizAttempt.updateMany(input as any))),

        update: procedure.input($Schema.QuizAttemptInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quizAttempt.update(input as any))),

        count: procedure.input($Schema.QuizAttemptInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).quizAttempt.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.QuizAttemptCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuizAttemptCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuizAttemptCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuizAttemptCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.QuizAttemptCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuizAttemptCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.QuizAttemptGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.QuizAttemptGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuizAttemptCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuizAttemptCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.QuizAttemptGetPayload<T>, Context>) => Promise<Prisma.QuizAttemptGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.QuizAttemptDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuizAttemptDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuizAttemptDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuizAttemptDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.QuizAttemptDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuizAttemptDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.QuizAttemptGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.QuizAttemptGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuizAttemptDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuizAttemptDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.QuizAttemptGetPayload<T>, Context>) => Promise<Prisma.QuizAttemptGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.QuizAttemptFindFirstArgs, TData = Prisma.QuizAttemptGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.QuizAttemptFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.QuizAttemptGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.QuizAttemptFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.QuizAttemptFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.QuizAttemptGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.QuizAttemptGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.QuizAttemptFindManyArgs, TData = Array<Prisma.QuizAttemptGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.QuizAttemptFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.QuizAttemptGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.QuizAttemptFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.QuizAttemptFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.QuizAttemptGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.QuizAttemptGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.QuizAttemptFindUniqueArgs, TData = Prisma.QuizAttemptGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.QuizAttemptFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.QuizAttemptGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.QuizAttemptFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.QuizAttemptFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.QuizAttemptGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.QuizAttemptGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.QuizAttemptUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuizAttemptUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuizAttemptUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuizAttemptUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.QuizAttemptUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuizAttemptUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.QuizAttemptGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.QuizAttemptGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuizAttemptUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuizAttemptUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.QuizAttemptGetPayload<T>, Context>) => Promise<Prisma.QuizAttemptGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.QuizAttemptCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.QuizAttemptCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.QuizAttemptCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.QuizAttemptCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.QuizAttemptCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.QuizAttemptCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.QuizAttemptCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.QuizAttemptCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
