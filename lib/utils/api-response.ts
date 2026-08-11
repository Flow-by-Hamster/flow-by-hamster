import { NextResponse } from "next/server";

export type ApiErrorCode =
  | "BAD_REQUEST"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT"
  | "VALIDATION_ERROR"
  | "INTERNAL_SERVER_ERROR";

export interface ApiErrorPayload {
  code: ApiErrorCode;
  message: string;
  details?: Record<string, unknown> | string[] | null;
}

export interface ApiSuccessPayload<T> {
  success: true;
  data: T;
  message?: string;
  meta?: Record<string, unknown>;
}

export interface ApiErrorResponsePayload {
  success: false;
  error: ApiErrorPayload;
}

export type ApiResponsePayload<T> = ApiSuccessPayload<T> | ApiErrorResponsePayload;

interface ResponseOptions {
  message?: string;
  meta?: Record<string, unknown>;
  headers?: HeadersInit;
}

interface ErrorOptions {
  details?: Record<string, unknown> | string[] | null;
  headers?: HeadersInit;
}

export function success<T>(data: T, options: ResponseOptions = {}) {
  return NextResponse.json<ApiSuccessPayload<T>>(
    {
      success: true,
      data,
      ...(options.message ? { message: options.message } : {}),
      ...(options.meta ? { meta: options.meta } : {}),
    },
    {
      status: 200,
      headers: options.headers,
    },
  );
}

export function created<T>(data: T, options: ResponseOptions = {}) {
  return NextResponse.json<ApiSuccessPayload<T>>(
    {
      success: true,
      data,
      ...(options.message ? { message: options.message } : {}),
      ...(options.meta ? { meta: options.meta } : {}),
    },
    {
      status: 201,
      headers: options.headers,
    },
  );
}

function errorResponse(
  status: number,
  code: ApiErrorCode,
  message: string,
  options: ErrorOptions = {},
) {
  return NextResponse.json<ApiErrorResponsePayload>(
    {
      success: false,
      error: {
        code,
        message,
        ...(options.details !== undefined ? { details: options.details } : {}),
      },
    },
    {
      status,
      headers: options.headers,
    },
  );
}

export function badRequest(message = "Bad request", options: ErrorOptions = {}) {
  return errorResponse(400, "BAD_REQUEST", message, options);
}

export function unauthorized(message = "Unauthorized", options: ErrorOptions = {}) {
  return errorResponse(401, "UNAUTHORIZED", message, options);
}

export function forbidden(message = "Forbidden", options: ErrorOptions = {}) {
  return errorResponse(403, "FORBIDDEN", message, options);
}

export function notFound(message = "Not found", options: ErrorOptions = {}) {
  return errorResponse(404, "NOT_FOUND", message, options);
}

export function conflict(message = "Conflict", options: ErrorOptions = {}) {
  return errorResponse(409, "CONFLICT", message, options);
}

export function validationError(message = "Validation failed", options: ErrorOptions = {}) {
  return errorResponse(422, "VALIDATION_ERROR", message, options);
}

export function internalServerError(message = "Internal server error", options: ErrorOptions = {}) {
  return errorResponse(500, "INTERNAL_SERVER_ERROR", message, options);
}

// TODO: Add more helpers such as paginated or redirect-style responses when needed.
