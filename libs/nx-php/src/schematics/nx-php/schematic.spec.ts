import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { NxPhpSchematicSchema } from './schema';

describe('nx-php schematic', () => {
  let appTree: Tree;
  const options: NxPhpSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@b-legrand/nx-php',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('nxPhp', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
