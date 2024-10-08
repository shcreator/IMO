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

        createMany: procedure.input($Schema.UserSettingInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userSetting.createMany(input as any))),

        create: procedure.input($Schema.UserSettingInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userSetting.create(input as any))),

        deleteMany: procedure.input($Schema.UserSettingInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userSetting.deleteMany(input as any))),

        delete: procedure.input($Schema.UserSettingInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userSetting.delete(input as any))),

        findFirst: procedure.input($Schema.UserSettingInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).userSetting.findFirst(input as any))),

        findMany: procedure.input($Schema.UserSettingInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).userSetting.findMany(input as any))),

        findUnique: procedure.input($Schema.UserSettingInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).userSetting.findUnique(input as any))),

        updateMany: procedure.input($Schema.UserSettingInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userSetting.updateMany(input as any))),

        update: procedure.input($Schema.UserSettingInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userSetting.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.UserSettingCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserSettingCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserSettingCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserSettingCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.UserSettingCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserSettingCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserSettingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserSettingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserSettingCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserSettingCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserSettingGetPayload<T>, Context>) => Promise<Prisma.UserSettingGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.UserSettingDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserSettingDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserSettingDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserSettingDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.UserSettingDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserSettingDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserSettingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserSettingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserSettingDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserSettingDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserSettingGetPayload<T>, Context>) => Promise<Prisma.UserSettingGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.UserSettingFindFirstArgs, TData = Prisma.UserSettingGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserSettingFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserSettingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserSettingFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserSettingFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserSettingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserSettingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.UserSettingFindManyArgs, TData = Array<Prisma.UserSettingGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.UserSettingFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.UserSettingGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserSettingFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserSettingFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.UserSettingGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.UserSettingGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.UserSettingFindUniqueArgs, TData = Prisma.UserSettingGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserSettingFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserSettingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserSettingFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserSettingFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserSettingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserSettingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.UserSettingUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserSettingUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserSettingUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserSettingUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.UserSettingUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserSettingUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserSettingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserSettingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserSettingUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserSettingUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserSettingGetPayload<T>, Context>) => Promise<Prisma.UserSettingGetPayload<T>>
            };

    };
}
