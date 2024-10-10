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

        createMany: procedure.input($Schema.ChoiceInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).choice.createMany(input as any))),

        create: procedure.input($Schema.ChoiceInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).choice.create(input as any))),

        deleteMany: procedure.input($Schema.ChoiceInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).choice.deleteMany(input as any))),

        delete: procedure.input($Schema.ChoiceInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).choice.delete(input as any))),

        findFirst: procedure.input($Schema.ChoiceInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).choice.findFirst(input as any))),

        findMany: procedure.input($Schema.ChoiceInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).choice.findMany(input as any))),

        findUnique: procedure.input($Schema.ChoiceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).choice.findUnique(input as any))),

        updateMany: procedure.input($Schema.ChoiceInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).choice.updateMany(input as any))),

        update: procedure.input($Schema.ChoiceInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).choice.update(input as any))),

        count: procedure.input($Schema.ChoiceInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).choice.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ChoiceCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChoiceCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChoiceCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChoiceCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ChoiceCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChoiceCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ChoiceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ChoiceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChoiceCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChoiceCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ChoiceGetPayload<T>, Context>) => Promise<Prisma.ChoiceGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ChoiceDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChoiceDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChoiceDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChoiceDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ChoiceDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChoiceDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ChoiceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ChoiceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChoiceDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChoiceDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ChoiceGetPayload<T>, Context>) => Promise<Prisma.ChoiceGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ChoiceFindFirstArgs, TData = Prisma.ChoiceGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ChoiceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ChoiceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ChoiceFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ChoiceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ChoiceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ChoiceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ChoiceFindManyArgs, TData = Array<Prisma.ChoiceGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ChoiceFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ChoiceGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ChoiceFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ChoiceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ChoiceGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ChoiceGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ChoiceFindUniqueArgs, TData = Prisma.ChoiceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ChoiceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ChoiceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ChoiceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ChoiceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ChoiceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ChoiceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ChoiceUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChoiceUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChoiceUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChoiceUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ChoiceUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChoiceUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ChoiceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ChoiceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChoiceUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChoiceUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ChoiceGetPayload<T>, Context>) => Promise<Prisma.ChoiceGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ChoiceCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ChoiceCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ChoiceCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ChoiceCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ChoiceCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ChoiceCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ChoiceCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ChoiceCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
