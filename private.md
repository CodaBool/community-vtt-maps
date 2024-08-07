# TODO
- see what github actions I could start on
  - can perform `pg_dump -h host -U user -t 'public."Location"' -t 'public."Comment"' --column-inserts --data-only --no-owner --no-privileges postgres | grep '^INSERT' > backup.sql` to dump public data
- mobile cant handle resize events for its menubar
- separate out existing and non-existing locations
- do a star if capital, also handle KTB or long rim complexities (1-8)

# Links
- map editors 1 https://www.reddit.com/r/mapmaking/wiki/index/#wiki_1.0_links
- map editors 2 https://www.mapforge-software.com/links-to-map-making-apps/
- map editors 3 https://docs.google.com/document/d/1C7smRafom0Lgonicl1tgkQam5_zeUtkQ6fCodm0jGEg/edit
- react package for maps https://www.react-simple-maps.io/docs/geographies
- nextjs https://nextjs.org/docs/getting-started/installation
- shadcn https://ui.shadcn.com/docs/components/tooltip
- geo to topo convert https://jeffpaine.github.io/geojson-topojson/
- json minify https://codebeautify.org/jsonminifier
- icons https://lucide.dev/icons
- tailwind cheatsheet https://nerdcave.com/tailwind-cheat-sheet

# Process
- https://www.figma.com -> svg
- https://atticus.dev/svg-plotter/demo/index.html -> geojson (22000000 width)
- https://geojson.io -> do your geo work here, export topojson to mapshaper
- https://mapshaper.org -> export individual layer to clipboard and paste topojson to data.js

# top scifi VTT
1. Starfinder
2. Cyberpunk
3. Star Wars
4. Lancer
5. Alien

# maps
- Karma Reef Sector http://madletter.net/rpg/lancer/lancer-map-2.jpg
- Shasta http://madletter.net/rpg/lancer/shasta_bright.jpg
- life accurate map https://www.reddit.com/r/LancerRPG/comments/16r61x4/galactic_map_of_union_by_me
- canon info https://www.worldanvil.com/w/the-third-committee3A-lancer-billytherex/a/union-territory-location

## details
- Cradle blink gate position https://www.reddit.com/r/LancerRPG/comments/je5nzl/comment/gcjzcbb
- cmdk https://github.com/pacocoursey/cmdk

# laptop dev
- https://www.prisma.io/docs/orm/prisma-schema/overview
- example small https://www.prisma.io/nextjs
- guide https://vercel.com/guides/nextjs-prisma-postgres
- next-auth requirements https://authjs.dev/getting-started/adapters/prisma#schema
- example full https://github.com/prisma/prisma-examples/blob/latest/typescript/rest-nextjs-api-routes-auth/prisma/schema.prisma
- d3 starmap example https://observablehq.com/@d3/star-map?collection=@d3/d3-geo

# prisma commands
bunx prisma db pull
bunx prisma generate
bunx prisma migrate dev

bunx prisma db pull && bunx prisma generate
bunx prisma migrate dev --name larger_coord && bunx prisma generate
