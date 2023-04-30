import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import { Repository } from './types';
import { api } from '../api/github';

async function fetchRepos(ctx: QueryFunctionContext) {
   const [_, userGitHub] = ctx.queryKey;
   const { data } = await api.get<Repository[]>(`/users/${userGitHub}/repos`);
   return data;
}

function useFetchRepositories(userGitHub: string) {
   return useQuery(['repos', userGitHub], fetchRepos);
}

export { useFetchRepositories };
