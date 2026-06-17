/**
 * Release script: bump versions, generate changelog, build, publish.
 *
 * Usage: node scripts/release.mjs <version> [--tag latest|next|beta] [--dry-run]
 *
 * Called by the workflow_dispatch GitHub Actions workflow.
 */
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

const args = process.argv.slice(2);
const version = args.find((a) => !a.startsWith('--'));
const tag = args.find((a) => a.startsWith('--tag='))?.split('=')[1] ?? 'latest';
const dryRun = args.includes('--dry-run') || process.env.DRY_RUN === 'true';

if (!version) {
  console.error('Usage: node scripts/release.mjs <version> [--tag latest|next|beta] [--dry-run]');
  process.exit(1);
}

function run(cmd, label) {
  console.log(`\n▶ ${label ?? cmd}`);
  if (!dryRun) {
    execSync(cmd, { stdio: 'inherit' });
  } else {
    console.log(`  [dry-run] skipped`);
  }
}

// 1. Bump versions in both package.json files
const paths = ['package.json', 'projects/ng-anim8/package.json'];
for (const p of paths) {
  const pkg = JSON.parse(readFileSync(p, 'utf8'));
  pkg.version = version;
  if (!dryRun) {
    writeFileSync(p, JSON.stringify(pkg, null, 2) + '\n');
  }
  console.log(`${dryRun ? '[dry-run] would update' : 'Updated'} ${p} → ${version}`);
}

// 2. Generate / update CHANGELOG.md
run(`npx changelogen -r ${version} --output CHANGELOG.md --no-commit --no-tag --no-push --no-bump`, 'Generate CHANGELOG');

// 3. Build the library
run(`pnpm ng build ng-anim8`, 'Build library');

// 4. Commit, tag
run(
  `git add CHANGELOG.md package.json projects/ng-anim8/package.json && git commit -m "chore(release): ${version} [skip ci]"`,
  'Commit release',
);
run(`git tag -a v${version} -m "v${version}"`, `Tag v${version}`);

// 5. NPM Publish
run(
  `npm publish ./dist/ng-anim8 --tag ${tag} --access public`,
  `Publish (tag=${tag})`,
);

// 6. Push back changes to GitHub
run(`git push --follow-tags`, 'Push with tags');

// 7. Create GitHub release
run(`npx changelogen gh release v${version}`, `Create GitHub release v${version}`);

console.log(`\n✅ Released v${version} (tag=${tag})${dryRun ? ' [dry-run]' : ''}`);
