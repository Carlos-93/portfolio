import { useEffect, useState } from 'react';
import type { GithubRepo, RepoStats } from '../lib/types';
import { projects, GITHUB_STATS_CACHE_KEY } from '../lib/constants';

// This hook fetches GitHub repository stats for the projects listed in `projects`.
export function useGithubStats() {
    const [stats, setStats] = useState<Record<string, RepoStats> | null>(() => {
        try {
            const cached = sessionStorage.getItem(GITHUB_STATS_CACHE_KEY);
            return cached ? (JSON.parse(cached) as Record<string, RepoStats>) : null;
        } catch {
            return null;
        }
    });

    useEffect(() => {
        if (stats) return;
        const controller = new AbortController();

        // `allSettled`, not `all`: one repo that 404s or hits the rate limit must not discard the
        // stats of the repos that did answer.
        Promise.allSettled(
            projects
                .flatMap((project) => project.repoUrl ? [{ id: project.id, repoUrl: project.repoUrl }] : [])
                .map(async ({ id, repoUrl }) => {
                    const response = await fetch(`https://api.github.com/repos${new URL(repoUrl).pathname}`, { signal: controller.signal });
                    if (!response.ok) throw new Error(`GitHub API responded ${response.status}`);
                    const repo: GithubRepo = await response.json();
                    return [id, { stars: repo.stargazers_count, language: repo.language }] as const;
                }),
        )
            .then((outcomes) => {
                // An aborted effect still settles, so check before touching state
                if (controller.signal.aborted) return;

                const entries = outcomes.flatMap((outcome) => outcome.status === 'fulfilled' ? [outcome.value] : []);
                // Every request failed — leave `stats` null so a later visit can retry
                if (entries.length === 0) return;

                const result = Object.fromEntries(entries);
                setStats(result);
                try {
                    sessionStorage.setItem(GITHUB_STATS_CACHE_KEY, JSON.stringify(result));
                } catch {
                    // Storage unavailable — skip caching
                }
            })
            .catch(() => {
                // Offline or rate-limited — cards simply render without live stats
            });

        return () => controller.abort();
    }, [stats]);

    return stats;
}