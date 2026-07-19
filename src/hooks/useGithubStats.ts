import { useEffect, useState } from 'react';
import type { GithubRepo, RepoStats } from '../lib/types';
import { projects } from '../lib/constants';

const CACHE_KEY = 'github-stats';

// Live stats (stars, main language) for the featured repos from the public GitHub API,
// cached per browser session to stay well under the unauthenticated rate limit
export function useGithubStats() {
    const [stats, setStats] = useState<Record<string, RepoStats> | null>(() => {
        try {
            const cached = sessionStorage.getItem(CACHE_KEY);
            return cached ? (JSON.parse(cached) as Record<string, RepoStats>) : null;
        } catch {
            return null;
        }
    });

    useEffect(() => {
        if (stats) return;
        const controller = new AbortController();

        Promise.all(
            projects
                .flatMap((project) => project.repoUrl ? [{ id: project.id, repoUrl: project.repoUrl }] : [])
                .map(async ({ id, repoUrl }) => {
                    const response = await fetch(`https://api.github.com/repos${new URL(repoUrl).pathname}`, { signal: controller.signal });
                    if (!response.ok) throw new Error(`GitHub API responded ${response.status}`);
                    const repo: GithubRepo = await response.json();
                    return [id, { stars: repo.stargazers_count, language: repo.language }] as const;
                }),
        )
            .then((entries) => {
                const result = Object.fromEntries(entries);
                setStats(result);
                try {
                    sessionStorage.setItem(CACHE_KEY, JSON.stringify(result));
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
