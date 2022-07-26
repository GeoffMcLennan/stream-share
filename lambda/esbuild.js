let watch = false;
process.argv.slice(2).forEach(arg => {
  if (arg == '--watch') watch = true;
});

const config = {
  entryPoints: [
    'src/artist/index.ts',
  ],
  bundle: true,
  outdir: 'build',
  outbase: 'src',
  sourcemap: true,
  platform: 'node',
  external: ['aws-*'],
};

if (watch) {
  config.watch = {
    onRebuild: (error, result) => {
      console.log(`${new Date()} - Rebuilt lambda function`);
      if (error) {
        console.log(`Received error:`);
        console.log(error);
      }
    }
  };
}

require('esbuild')
    .build(config)
    .catch(() => process.exit(1));