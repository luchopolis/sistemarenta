import { HttpException, HttpStatus } from '@nestjs/common';

export class RawQueryException extends HttpException {
  constructor(error: unknown) {
    super(
      'Bad Raw Query Execution: ' + error,
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
