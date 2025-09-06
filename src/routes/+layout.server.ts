import { octokit } from '$lib/octokit';
import type { PageServerLoad } from './$types';
import { username } from '$lib/config.json';

export const load: PageServerLoad = async () => {
	const { data: repos } = await octokit.repos.listForUser({ username });
	const { data: user } = await octokit.users.getByUsername({ username });
	return { repos, user };
};
