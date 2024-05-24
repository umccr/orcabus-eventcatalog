# OrcaBus Event Catalog

Based on [EventCatalog](https://www.eventcatalog.dev/).

Here we document the events and their use within the OrcaBus [project](https://github.com/umccr/orcabus).

## Quick Guide


### Add / change content

Add / edit events under `events/` or `domains/<your domain>/events`.
Add / edit services under `services/`.
Add / edit users in `eventcatalog.config.js`.

Test locally (localhost:3000):
```bash
npm run dev
```



### Build static site

```bash
npn run build
```
This will update / generate the content in `out/` and `.next/`.



### Deploy site

Update gh-pages branch with new content from build output (found in `out/`).