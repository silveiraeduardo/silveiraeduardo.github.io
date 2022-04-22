module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'pnpm http-server ./out/ -p3000 -gb',
    },
    upload: {
      // target: 'temporary-public-storage',
      "target": "lhci",
      "serverBaseUrl": "https://lhci.eduardosilveira.com"
    },
  },
};
