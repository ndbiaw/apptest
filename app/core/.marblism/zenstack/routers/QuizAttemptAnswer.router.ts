/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.'
import * as _Schema from '@zenstackhq/runtime/zod/input'
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema
import { checkRead, checkMutate } from '../helper'
import type { Prisma } from '@zenstackhq/runtime/models'
import type {
  UseTRPCMutationOptions,
  UseTRPCMutationResult,
  UseTRPCQueryOptions,
  UseTRPCQueryResult,
  UseTRPCInfiniteQueryOptions,
  UseTRPCInfiniteQueryResult,
} from '@trpc/react-query/shared'
import type { TRPCClientErrorLike } from '@trpc/client'
import type { AnyRouter } from '@trpc/server'

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    createMany: procedure
      .input($Schema.QuizAttemptAnswerInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).quizAttemptAnswer.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.QuizAttemptAnswerInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).quizAttemptAnswer.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.QuizAttemptAnswerInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).quizAttemptAnswer.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.QuizAttemptAnswerInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).quizAttemptAnswer.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.QuizAttemptAnswerInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).quizAttemptAnswer.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.QuizAttemptAnswerInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).quizAttemptAnswer.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.QuizAttemptAnswerInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).quizAttemptAnswer.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.QuizAttemptAnswerInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).quizAttemptAnswer.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.QuizAttemptAnswerInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).quizAttemptAnswer.update(input as any)),
      ),

    count: procedure
      .input($Schema.QuizAttemptAnswerInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).quizAttemptAnswer.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.QuizAttemptAnswerCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.QuizAttemptAnswerCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.QuizAttemptAnswerCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.QuizAttemptAnswerCreateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  create: {
    useMutation: <T extends Prisma.QuizAttemptAnswerCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.QuizAttemptAnswerCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.QuizAttemptAnswerGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.QuizAttemptAnswerGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.QuizAttemptAnswerCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.QuizAttemptAnswerCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.QuizAttemptAnswerGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.QuizAttemptAnswerGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.QuizAttemptAnswerDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.QuizAttemptAnswerDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.QuizAttemptAnswerDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.QuizAttemptAnswerDeleteManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  delete: {
    useMutation: <T extends Prisma.QuizAttemptAnswerDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.QuizAttemptAnswerDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.QuizAttemptAnswerGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.QuizAttemptAnswerGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.QuizAttemptAnswerDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.QuizAttemptAnswerDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.QuizAttemptAnswerGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.QuizAttemptAnswerGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.QuizAttemptAnswerFindFirstArgs,
      TData = Prisma.QuizAttemptAnswerGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.QuizAttemptAnswerFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.QuizAttemptAnswerGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.QuizAttemptAnswerFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.QuizAttemptAnswerFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.QuizAttemptAnswerGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.QuizAttemptAnswerGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.QuizAttemptAnswerFindManyArgs,
      TData = Array<Prisma.QuizAttemptAnswerGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.QuizAttemptAnswerFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.QuizAttemptAnswerGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.QuizAttemptAnswerFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.QuizAttemptAnswerFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.QuizAttemptAnswerGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.QuizAttemptAnswerGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.QuizAttemptAnswerFindUniqueArgs,
      TData = Prisma.QuizAttemptAnswerGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.QuizAttemptAnswerFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.QuizAttemptAnswerGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.QuizAttemptAnswerFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.QuizAttemptAnswerFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.QuizAttemptAnswerGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.QuizAttemptAnswerGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.QuizAttemptAnswerUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.QuizAttemptAnswerUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.QuizAttemptAnswerUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.QuizAttemptAnswerUpdateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  update: {
    useMutation: <T extends Prisma.QuizAttemptAnswerUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.QuizAttemptAnswerUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.QuizAttemptAnswerGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.QuizAttemptAnswerGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.QuizAttemptAnswerUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.QuizAttemptAnswerUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.QuizAttemptAnswerGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.QuizAttemptAnswerGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.QuizAttemptAnswerCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.QuizAttemptAnswerCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.QuizAttemptAnswerCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.QuizAttemptAnswerCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.QuizAttemptAnswerCountArgs>(
      input?: Omit<
        Prisma.Subset<T, Prisma.QuizAttemptAnswerCountArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.QuizAttemptAnswerCountAggregateOutputType
              >
          : number,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.QuizAttemptAnswerCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
