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

        createMany: procedure.input($Schema.QuizInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quiz.createMany(input as any))),

        create: procedure.input($Schema.QuizInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quiz.create(input as any))),

        deleteMany: procedure.input($Schema.QuizInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quiz.deleteMany(input as any))),

        delete: procedure.input($Schema.QuizInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quiz.delete(input as any))),

        findFirst: procedure.input($Schema.QuizInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).quiz.findFirst(input as any))),

        findMany: procedure.input($Schema.QuizInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).quiz.findMany(input as any))),

        findUnique: procedure.input($Schema.QuizInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).quiz.findUnique(input as any))),

        updateMany: procedure.input($Schema.QuizInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quiz.updateMany(input as any))),

        update: procedure.input($Schema.QuizInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quiz.update(input as any))),

        count: procedure.input($Schema.QuizInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).quiz.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.QuizCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuizCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuizCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuizCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.QuizCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuizCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.QuizGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.QuizGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuizCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuizCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.QuizGetPayload<T>, Context>) => Promise<Prisma.QuizGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.QuizDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuizDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuizDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuizDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.QuizDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuizDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.QuizGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.QuizGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuizDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuizDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.QuizGetPayload<T>, Context>) => Promise<Prisma.QuizGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.QuizFindFirstArgs, TData = Prisma.QuizGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.QuizFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.QuizGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.QuizFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.QuizFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.QuizGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.QuizGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.QuizFindManyArgs, TData = Array<Prisma.QuizGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.QuizFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.QuizGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.QuizFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.QuizFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.QuizGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.QuizGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.QuizFindUniqueArgs, TData = Prisma.QuizGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.QuizFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.QuizGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.QuizFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.QuizFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.QuizGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.QuizGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.QuizUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuizUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuizUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuizUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.QuizUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuizUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.QuizGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.QuizGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuizUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuizUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.QuizGetPayload<T>, Context>) => Promise<Prisma.QuizGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.QuizCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.QuizCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.QuizCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.QuizCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.QuizCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.QuizCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.QuizCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.QuizCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
