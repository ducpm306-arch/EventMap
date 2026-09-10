import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ResponseData } from 'src/global/globalClass';
export declare class ResponseInterceptor<T> implements NestInterceptor<T, ResponseData<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseData<T>>;
}
