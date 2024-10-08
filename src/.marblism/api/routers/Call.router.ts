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

        createMany: procedure.input($Schema.CallInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).call.createMany(input as any))),

        create: procedure.input($Schema.CallInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).call.create(input as any))),

        deleteMany: procedure.input($Schema.CallInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).call.deleteMany(input as any))),

        delete: procedure.input($Schema.CallInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).call.delete(input as any))),

        findFirst: procedure.input($Schema.CallInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).call.findFirst(input as any))),

        findMany: procedure.input($Schema.CallInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).call.findMany(input as any))),

        findUnique: procedure.input($Schema.CallInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).call.findUnique(input as any))),

        updateMany: procedure.input($Schema.CallInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).call.updateMany(input as any))),

        update: procedure.input($Schema.CallInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).call.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.CallCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CallCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CallCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CallCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CallCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CallCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CallGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CallGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CallCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CallCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CallGetPayload<T>, Context>) => Promise<Prisma.CallGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CallDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CallDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CallDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CallDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CallDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CallDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CallGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CallGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CallDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CallDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CallGetPayload<T>, Context>) => Promise<Prisma.CallGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CallFindFirstArgs, TData = Prisma.CallGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CallFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CallGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CallFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CallFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CallGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CallGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CallFindManyArgs, TData = Array<Prisma.CallGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.CallFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CallGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CallFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CallFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CallGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CallGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CallFindUniqueArgs, TData = Prisma.CallGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CallFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CallGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CallFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CallFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CallGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CallGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CallUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CallUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CallUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CallUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CallUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CallUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CallGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CallGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CallUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CallUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CallGetPayload<T>, Context>) => Promise<Prisma.CallGetPayload<T>>
            };

    };
}
