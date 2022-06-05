import { ArgumentMetadata, Injectable, PipeTransform, BadGatewayException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadGatewayException(`${value} is not an number`)
    }
    return value;
  }
}
