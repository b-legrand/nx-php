import {
  BuilderContext,
  BuilderOutput,
  createBuilder
} from '@angular-devkit/architect';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NxPhpBuilderSchema } from './schema';

export function runBuilder(
  options: NxPhpBuilderSchema,
  context: BuilderContext
): Observable<BuilderOutput> {
  return of({ success: true }).pipe(
    tap(() => {
      context.logger.info('Builder ran for nx-php');
    })
  );
}

export default createBuilder(runBuilder);
