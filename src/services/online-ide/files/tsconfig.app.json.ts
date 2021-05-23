export default {
  extends: './tsconfig.json',
  compilerOptions: {
    outDir: './out-tsc/app',
    types: []
  },
  include: ['src/**/*.ts'],
  exclude: ['src/test.ts', 'src/**/*.spec.ts'],
  angularCompilerOptions: {
    enableIvy: true
  }
};
