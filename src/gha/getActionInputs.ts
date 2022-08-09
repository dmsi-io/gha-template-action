import { context } from '@actions/github';

export default () => ({
    name: process.env.NAME ?? 'World',
    repo: context.repo,
})
