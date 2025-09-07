import { octokit } from '$lib/octokit';
import type { PageServerLoad } from './$types';
import { username } from '$lib/config.json';
import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

export const load: PageServerLoad = async () => {
	const { data } = await octokit.repos.getContent({
		owner: username,
		repo: username,
		path: 'README.md'
	});

	if (Array.isArray(data) || data.type !== 'file') throw new Error('Something went wrong');

	const markdown = atob(data.content);
	const html = DOMPurify.sanitize(await marked.parse(markdown));

	const { data: user } = await octokit.users.getByUsername({ username });
	return { html, user };
};
