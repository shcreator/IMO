/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.MessageReadReceiptInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageReadReceipt.createMany(input as any))),

        create: procedure.input($Schema.MessageReadReceiptInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageReadReceipt.create(input as any))),

        deleteMany: procedure.input($Schema.MessageReadReceiptInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageReadReceipt.deleteMany(input as any))),

        delete: procedure.input($Schema.MessageReadReceiptInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageReadReceipt.delete(input as any))),

        findFirst: procedure.input($Schema.MessageReadReceiptInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).messageReadReceipt.findFirst(input as any))),

        findMany: procedure.input($Schema.MessageReadReceiptInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).messageReadReceipt.findMany(input as any))),

        findUnique: procedure.input($Schema.MessageReadReceiptInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).messageReadReceipt.findUnique(input as any))),

        updateMany: procedure.input($Schema.MessageReadReceiptInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageReadReceipt.updateMany(input as any))),

        update: procedure.input($Schema.MessageReadReceiptInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageReadReceipt.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MessageReadReceiptCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageReadReceiptCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageReadReceiptCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageReadReceiptCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MessageReadReceiptCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageReadReceiptCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MessageReadReceiptGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MessageReadReceiptGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageReadReceiptCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageReadReceiptCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MessageReadReceiptGetPayload<T>, Context>) => Promise<Prisma.MessageReadReceiptGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MessageReadReceiptDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageReadReceiptDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageReadReceiptDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageReadReceiptDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MessageReadReceiptDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageReadReceiptDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MessageReadReceiptGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MessageReadReceiptGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageReadReceiptDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageReadReceiptDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MessageReadReceiptGetPayload<T>, Context>) => Promise<Prisma.MessageReadReceiptGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MessageReadReceiptFindFirstArgs, TData = Prisma.MessageReadReceiptGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MessageReadReceiptFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MessageReadReceiptGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MessageReadReceiptFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MessageReadReceiptFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MessageReadReceiptGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MessageReadReceiptGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MessageReadReceiptFindManyArgs, TData = Array<Prisma.MessageReadReceiptGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.MessageReadReceiptFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MessageReadReceiptGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MessageReadReceiptFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MessageReadReceiptFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MessageReadReceiptGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MessageReadReceiptGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MessageReadReceiptFindUniqueArgs, TData = Prisma.MessageReadReceiptGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MessageReadReceiptFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MessageReadReceiptGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MessageReadReceiptFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MessageReadReceiptFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MessageReadReceiptGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MessageReadReceiptGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MessageReadReceiptUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageReadReceiptUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageReadReceiptUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageReadReceiptUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MessageReadReceiptUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageReadReceiptUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MessageReadReceiptGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MessageReadReceiptGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageReadReceiptUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageReadReceiptUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MessageReadReceiptGetPayload<T>, Context>) => Promise<Prisma.MessageReadReceiptGetPayload<T>>
            };

    };
}
