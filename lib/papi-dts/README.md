# paranext-core/lib/papi-dts

Type declarations provided for use in Platform.Bible extensions

## Summary

This is a types package that provides type declarations for `papi` and other important interfaces through which extensions interact with Platform.Bible.

## Included Types in Documentation

The documentation includes a variety of types to support different aspects of the project. For extension development, the most crucial sections to focus on are:

- `@papi/backend`: PAPI objects that can be accessed in the backend of the extension.
- `@papi/core`: Types for use when interacting with the PAPI.
- `@papi/frontend`: PAPI objects that can be accessed in the frontend of the extension.
- `@papi/frontend/react`: React hooks to help interaction between React components and the PAPI.
- `papi-shared-types`: Extensible interface declarations shared between core and extensions to expose extension API types on the PAPI

Feel free to explore other sections based on your specific needs and context.

## To install

Install dependencies:

1. Follow the instructions to install [`paranext-core`](https://github.com/paranext/paranext-core#developer-install).
2. (This step is automatically performed on running `npm install` in `paranext-core`) In `paranext-core/lib/papi-dts`, run `npm install` to install published dependencies.
