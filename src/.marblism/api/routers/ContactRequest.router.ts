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

        createMany: procedure.input($Schema.ContactRequestInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactRequest.createMany(input as any))),

        create: procedure.input($Schema.ContactRequestInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactRequest.create(input as any))),

        deleteMany: procedure.input($Schema.ContactRequestInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactRequest.deleteMany(input as any))),

        delete: procedure.input($Schema.ContactRequestInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactRequest.delete(input as any))),

        findFirst: procedure.input($Schema.ContactRequestInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).contactRequest.findFirst(input as any))),

        findMany: procedure.input($Schema.ContactRequestInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).contactRequest.findMany(input as any))),

        findUnique: procedure.input($Schema.ContactRequestInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).contactRequest.findUnique(input as any))),

        updateMany: procedure.input($Schema.ContactRequestInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactRequest.updateMany(input as any))),

        update: procedure.input($Schema.ContactRequestInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactRequest.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ContactRequestCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactRequestCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactRequestCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactRequestCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ContactRequestCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactRequestCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContactRequestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContactRequestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactRequestCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactRequestCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContactRequestGetPayload<T>, Context>) => Promise<Prisma.ContactRequestGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ContactRequestDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactRequestDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactRequestDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactRequestDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ContactRequestDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactRequestDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContactRequestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContactRequestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactRequestDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactRequestDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContactRequestGetPayload<T>, Context>) => Promise<Prisma.ContactRequestGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ContactRequestFindFirstArgs, TData = Prisma.ContactRequestGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContactRequestFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContactRequestGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContactRequestFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContactRequestFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContactRequestGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContactRequestGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ContactRequestFindManyArgs, TData = Array<Prisma.ContactRequestGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ContactRequestFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ContactRequestGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContactRequestFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContactRequestFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ContactRequestGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ContactRequestGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ContactRequestFindUniqueArgs, TData = Prisma.ContactRequestGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContactRequestFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContactRequestGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContactRequestFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContactRequestFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContactRequestGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContactRequestGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ContactRequestUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactRequestUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactRequestUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactRequestUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ContactRequestUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactRequestUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContactRequestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContactRequestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactRequestUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactRequestUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContactRequestGetPayload<T>, Context>) => Promise<Prisma.ContactRequestGetPayload<T>>
            };

    };
}
