EARTH WAKENS — APPROVED M2 / FUNKY JUNKY — DEPLOYMENT REPAIR

The eight HTML source pages and all 29 static assets are preserved from the
approved M2 preview. Artwork and story have not been redesigned or replaced.

Repository structure:
  index.html and seven other HTML pages — source pages
  static/ — all 29 source artwork, style, script, and credit files
  scripts/build.mjs — validates references and creates clean dist/
  package.json and package-lock.json — no third-party dependencies
  .github/workflows/ — existing Ionos deployment configuration
  dist/ — ready-to-publish output, included for direct static hosting

GITHUB / IONOS
Repository: Laverdura/EarthWakens, branch main.
Build: npm run build. Publish directory: dist (not repository root or static).
The existing Ionos workflow runs this build automatically after a commit.
Retain the existing GitHub Actions / Ionos secrets and project connection.
The ZIP does not include account secrets.

DIRECT STATIC HOSTING
Publish the contents of dist/ together at the web root. Do not flatten static/.
Do not publish the unopened ZIP or put the whole project inside another folder.

TECHNICAL REPAIR
The former public site had current HTML with older styles and missing images.
The first complete deployment was also rejected by Ionos: 67.18 MB exceeded
the current 50 MB hosting quota. The corrected build retains all 29 source
assets, but publishes only the eight approved pages and their 21 dependencies
(about 47.73 MB). Unused artwork stays in the source archive and repository.
It rejects missing or incorrectly capitalized image/style references and
checks the output size before publication. No visible artwork is removed.
CSS and JS URLs include content hashes so updated styles are reloaded.
The renderer now controls the approved moon/doors order, fixing blank chapters
when leaving Earth Wakens. Writing, artwork, and picture order are preserved.
.htaccess asks Apache to revalidate HTML and JSON after each deployment.
version.json records the release and SHA-256 for each published file.

PUBLIC DOMAIN
The existing Ionos site is https://earthwakens.com (without an extra 'a').
At inspection, https://earthawakens.com redirected to an Atom domain-sales page.
A domain ownership / DNS change is separate from the website file repair.
