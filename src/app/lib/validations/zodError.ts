import { ZodError as Error, ZodIssue } from 'zod';

export class ZodError {
  errors: Record<string, string[]> = {};

  constructor(error: Error) {
    this.formatErrors(error.errors);
  }

  private formatErrors(issues: ZodIssue[]) {
    for (const issue of issues) {
      const field = issue.path.join('.') || 'form';
      if (!this.errors[field]) {
        this.errors[field] = [];
      }
      this.errors[field].push(issue.message);
    }
  }

  toJSON() {
    return { error: this.errors };
  }
}
